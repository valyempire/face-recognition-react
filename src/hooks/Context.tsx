import { createContext } from "react";

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
}

/**
 * Defines the default values
 */
export const defautValues: ProviderValues = {
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
};

/**
 * Defines a context where the state is stored and shared
 */
export const context = createContext<ProviderValues>(defautValues);
