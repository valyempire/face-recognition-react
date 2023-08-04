/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Container
 */
export const Container = styled("div")(({ theme }) => {
  return {
    width: 700,
    background: "linear-gradient(89deg, #2ebffd 0%, #0020ed 100%)",
    [theme.breakpoints.down("md")]: {
      width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "92%",
      padding: 11,
    },
  };
});

/**
 * Styles the Paragraph
 */
export const Paragraph = styled("p")(({ theme }) => {
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
 * Styles the Button
 */
export const Button = styled("button")(({ theme }) => {
  return {
    width: "21%",
    marginLeft: 10,
    [theme.breakpoints.down("md")]: {
      width: "18%",
      fontSize: 21,
    },
    [theme.breakpoints.down("sm")]: {
      width: "38%",
      padding: 2,
      fontSize: 12,
    },
  };
});

/**
 * Styles the Input
 */
export const Input = styled("input")(({ theme }) => {
  return {
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "80%",
      fontSize: 21,
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      fontSize: 12,
    },
  };
});
