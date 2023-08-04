import React from "react";
// import Tilt from "react-parallax-tilt";
import brain from "../../assets/brain-png.webp";

import { TiltContainer, ImgBrain } from "./Logo.styles";

export const Logo: React.FC = () => {
  return (
    //
    <div className="ma4 mt0">
      <TiltContainer
        className="Tilt br2 shadow-2"
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner pa3">
          <ImgBrain alt="logo" src={brain} />
        </div>
      </TiltContainer>
    </div>
  );
};
