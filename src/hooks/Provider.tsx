import useLocalStorage from "use-local-storage";
/**
 * Imports the context
 */
import { context, ProviderProps, ProviderValues } from "./Context";

/**
 * Display AuthProvider
 */
export const AuthProvider: React.FC<ProviderProps> = (props) => {
  const { Provider } = context;
  const { children } = props;
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage(
    "isAuthenticated",
    false
  );

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const providerValue: ProviderValues = {
    isAuthenticated,
    login,
    logout,
  };

  return <Provider value={providerValue}>{children}</Provider>;
};
