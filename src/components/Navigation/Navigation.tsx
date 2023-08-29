import { useAuth } from "../../hooks/useAuth";
import { useHistory } from "react-router-dom";

export const Navigation: React.FC = () => {
  const { logout, setUser, isAuthenticated } = useAuth();
  const history = useHistory();

  const onRouteChange = (route: string) => {
    if (route === "signout") {
      logout();
      setUser({
        id: "",
        name: "",
        email: "",
        entries: 0,
        joined: "",
      });
      history.push("/signin");
    }

    if (route === "signin") {
      history.push("/signin");
    }

    if (route === "register") {
      history.push("/register");
    }
  };

  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {isAuthenticated ? (
        <p
          onClick={() => {
            onRouteChange("signout");
          }}
          className="f3 link dim black underline pa3 pointer"
        >
          Sign Out
        </p>
      ) : (
        <>
          <p
            onClick={() => onRouteChange("signin")}
            className="f3 link dim black underline pa3 pointer"
          >
            Sign In
          </p>
          <p
            onClick={() => onRouteChange("register")}
            className="f3 link dim black underline pa3 pointer"
          >
            Register
          </p>
        </>
      )}
    </nav>
  );
};
