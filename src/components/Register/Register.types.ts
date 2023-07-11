export interface RegisterProps {
  loadUser: (data: any) => void;
  onRouteChange: (route: any) => void;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}
