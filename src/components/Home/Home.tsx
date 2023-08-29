import React, { ChangeEvent } from "react";
import { Logo } from "../Logo";
import { Rank } from "../Rank";
import { ImageLinkForm } from "../ImageLinkForm";
import { FaceRecognition } from "../FaceRecognition";
import { useAuth } from "../../hooks";
import { BoundingBox } from "../AppController/AppController.types";

interface HomeProps {
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onButtonSubmit: () => void;
  box: BoundingBox;
  imageUrl: string;
}

export const Home: React.FC<HomeProps> = (props) => {
  const { onButtonSubmit, onInputChange, box, imageUrl } = props;

  const { user } = useAuth();

  return (
    <div>
      <Logo />
      <Rank name={user.name} entries={user.entries} />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonSubmit={onButtonSubmit}
      />
      <FaceRecognition box={box} imageUrl={imageUrl} />
    </div>
  );
};
