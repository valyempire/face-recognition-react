import { createContext } from "react";

import { UserData } from "../components/AppController/AppController.types";

/**
 * Defines the ProviderProps interface
 */
export interface ProviderProps {
  children: React.ReactNode;
}

/**
 * Defines the ProviderValues interface
 */
export interface ProviderValues {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
}

/**
 * Defines the default values
 */
export const defautValues: ProviderValues = {
  isAuthenticated: false,
  user: {
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: "",
  },
  login: () => {},
  logout: () => {},

  setUser: () => {},
};

/**
 * Defines a context where the state is stored and shared
 */
export const context = createContext<ProviderValues>(defautValues);
