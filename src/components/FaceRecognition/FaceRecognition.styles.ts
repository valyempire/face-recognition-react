/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Styles the Bounding Box
 */
export const BoundingBox = styled("div")(() => {
  return {
    position: "absolute",
    boxShadow: "0 0 0 3px #fe0000  inset",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    cursor: "pointer",
  };
});

/**
 * Styles the Image
 */
export const Image = styled("img")(({ theme }) => {
  return {
    maxWidth: "100%",
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("md")]: {
      // width: "90%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  };
});
