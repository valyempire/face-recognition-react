import { Container } from "./AppController.styles";
import ParticlesBg from "particles-bg";
import { Navigation } from "../Navigation";

import { Signin } from "../Signin/";
import { Register } from "../Register";
import { useState } from "react";
import { BoundingBox, UserData } from "./AppController.types";
import { AuthProvider, useAuth } from "../../hooks";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "../Home/Home";

export const AppController: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [box, setBox] = useState<BoundingBox>({
    topRow: 0,
    rightCol: 0,
    bottomRow: 0,
    leftCol: 0,
  });
  const [route, setRoute] = useState<string>("signin");
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const { user, setUser } = useAuth();

  const loadUser = (data: UserData) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  const calculateFaceLocation = (data: any) => {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage") as HTMLImageElement;
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const displayFaceBox = (box: BoundingBox) => {
    setBox(box);
  };

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setImageUrl(input);

    fetch("http://localhost:3001/clarifai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: input,
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        displayFaceBox(calculateFaceLocation(result));

        if (result) {
          fetch("http://localhost:3001/image", {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              id: user.id,
            }),
          })
            .then((response) => response.json())
            .then((count) => {
              setUser((prevState) => ({
                ...prevState,
                entries: count,
              }));
            });
        }
      })
      .catch((error) => console.log("error", error));
  };

  const onRouteChange = (route: string): void => {
    // Updates route and user sign-in status
    if (route === "signout") {
      setUser({
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      });
      setIsSignedIn(false);
      setRoute("signin");
    } else if (route === "home") {
      setIsSignedIn(true);
      setRoute("home");
    } else if (route === "signin") {
      setRoute("signin");
    } else if (route === "register") {
      setRoute("register");
    }
  };

  return (
    <AuthProvider>
      <Container className="App">
        <ParticlesBg type="polygon" bg={true} />
        <BrowserRouter>
          <Switch>
            <Route path={"/signin"}>
              <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
            </Route>
            <Route path={"/register"}>
              <Register loadUser={loadUser} onRouteChange={onRouteChange} />
            </Route>
            <Route path={"/home"}>
              <Home
                onButtonSubmit={onButtonSubmit}
                onInputChange={onInputChange}
                box={box}
                imageUrl={imageUrl}
              />
            </Route>
          </Switch>
          <Navigation />
        </BrowserRouter>
      </Container>
    </AuthProvider>
  );
};
