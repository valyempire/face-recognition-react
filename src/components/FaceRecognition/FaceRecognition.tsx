/**
 * Imports styles
 */
import { Container, BoundingBox, Image } from "./FaceRecognition.styles";

/**
 * Imports types
 */
import { FaceRecognitionProps } from "./FaceRecognition.types";

/**
 * Displays the component
 */
export const FaceRecognition: React.FC<FaceRecognitionProps> = (props) => {
  const { imageUrl, box } = props;
  return (
    <Container className="center ma">
      <div className="absolute mt2">
        <Image
          id="inputimage"
          alt=""
          src={imageUrl}
          width="500px"
          height="auto"
        />
        <BoundingBox
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></BoundingBox>
      </div>
    </Container>
  );
};
