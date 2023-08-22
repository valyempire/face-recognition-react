// import { NavigationProps } from "./Navigation.types";

// export const Navigation: React.FC<NavigationProps> = (props) => {
//   const { onRouteChange, isSignedIn } = props;
//   if (isSignedIn) {
//     return (
//       <nav style={{ display: "flex", justifyContent: "flex-end" }}>
//         <p
//           onClick={() => onRouteChange("signout")}
//           className="f3 link dim black underline pa3 pointer"
//         >
//           Sign Out
//         </p>
//       </nav>
//     );
//   } else {
//     return (
//       <nav style={{ display: "flex", justifyContent: "flex-end" }}>
//         <p
//           onClick={() => onRouteChange("signin")}
//           className="f3 link dim black underline pa3 pointer"
//         >
//           Sign In
//         </p>
//         <p
//           onClick={() => onRouteChange("register")}
//           className="f3 link dim black underline pa3 pointer"
//         >
//           Register
//         </p>
//       </nav>
//     );
//   }
// };
import { useAuth } from "../../hooks/useAuth";
import React from "react";
import { NavigationProps } from "./Navigation.types";

export const Navigation: React.FC<NavigationProps> = (props) => {
  const { onRouteChange, isSignedIn } = props;
  const { logout } = useAuth();

  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      {isSignedIn ? (
        <p
          onClick={() => {
            logout();
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
