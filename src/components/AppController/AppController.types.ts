export interface UserData {
  id: string;
  name: string;
  email: string;
  entries: number;
  joined: string;
}

export interface BoundingBox {
  topRow: number;
  rightCol: number;
  bottomRow: number;
  leftCol: number;
}
