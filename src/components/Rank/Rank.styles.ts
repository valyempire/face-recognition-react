/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the TitleContainer
 */
export const TitleContainer = styled("div")(({ theme }) => {
  return {
    fontSize: 22,
    [theme.breakpoints.down("md")]: {
      fontSize: 25,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 12,
    },
  };
});
/**
 * Styles the Counter
 */
export const Counter = styled("div")(({ theme }) => {
  return {
    fontSize: 32,
    marginTop: 6,
    [theme.breakpoints.down("md")]: {
      fontSize: 40,
      marginTop: 8,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 23,
      marginTop: 8,
    },
  };
});
