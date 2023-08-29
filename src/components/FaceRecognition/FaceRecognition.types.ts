export interface FaceRecognitionProps {
  imageUrl: string;
  box: {
    topRow: number;
    rightCol: number;
    bottomRow: number;
    leftCol: number;
  };
}
// /**
//  * Defines the component props interface
//  */
// export interface Region {
//   region_info: {
//     bounding_box: {
//       left_col: number;
//       top_row: number;
//       right_col: number;
//       bottom_row: number;
//     };
//   };
// }
