export interface FaceRecognitionProps {
  imageUrl: string;
  box: {
    topRow: number;
    rightCol: number;
    bottomRow: number;
    leftCol: number;
  };
}
