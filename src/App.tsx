import { Container } from "./App.styles";
import ParticlesBg from "particles-bg";
import { Navigation } from "./components/Navigation";
import { Logo } from "./components/Logo/Logo";
import { ImageLinkForm } from "./components/ImageLinkForm";
import { Rank } from "./components/Rank/Rank";
import { FaceRecognition } from "./components/FaceRecognition";
import { Signin } from "./components/Signin/Signin";
import { Register } from "./components/Register";
import { useState } from "react";
import { User, BoundingBox } from "./App.types";
import { AuthProvider, useAuth } from "./hooks/useAuth";

const App: React.FC = () => {
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
  const [user, setUser] = useState<User>({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  });
  const { isAuthenticated } = useAuth();

  const loadUser = (data: User) => {
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

  const onRouteChange = (route: string) => {
    if (route === "signout") {
      setInput("");
      setImageUrl("");
      setBox({} as BoundingBox);
      setRoute("signin");
      setIsSignedIn(false);
      setUser({
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      });
    } else if (route === "home") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  return (
    <AuthProvider>
      <Container className="App">
        <ParticlesBg type="polygon" bg={true} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
        {route === "home" ? (
          <div>
            <Logo />
            <Rank name={user.name} entries={user.entries} />
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition box={box} imageUrl={imageUrl} />
          </div>
        ) : route === "signin" ? (
          <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
        ) : (
          <Register loadUser={loadUser} onRouteChange={onRouteChange} />
        )}
      </Container>
    </AuthProvider>
  );
};

export default App;
