/**
 * Imports styled
 */
import { styled } from "@mui/system";

/**
 * Imports the Tilt component from 'react-parallax-tilt' library
 */
import Tilt from "react-parallax-tilt";

/**
 * Styles the Tilt Container
 */
export const TiltContainer = styled(Tilt)(({ theme }) => {
  return {
    height: 150,
    width: 150,
    marginTop: -90,
    background: "linear-gradient(89deg, #2ebffd 0%, #0020ed 100%)",
  };
});

/**
 * Styles the Img Brain
 */
export const ImgBrain = styled("img")(({ theme }) => {
  return {
    height: 106,
    width: 95,
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      height: 99,
      width: 93,
      padding: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      height: 97,
      width: 93,
      padding: 11,
    },
  };
});
