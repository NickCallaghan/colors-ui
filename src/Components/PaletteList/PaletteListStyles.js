import { backgroundImage } from "./backgroundImage";

export default {
  root: {
    backgroundColor: "#131b70",

    // backgroundImage: backgroundImage,
    padding: "2em 0 4em"
    // backgroundAttachment: "fixed",
    // display: "flex",
    // alignItems: "flex-start",
    // justifyContent: "center",
    // minWidth: "550px",
    // height: "auto"
  },
  container: {
    //center the whole page
    maxWidth: "60%",
    margin: "0 auto"
  },
  nav: {
    display: "flex",
    width: "100%",
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    "& a": {
      color: "#fff",
      marginLeft: "auto"
    }
  },
  palettes: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(150px, 1fr))",
    gridTemplateRows: "repeat(auto-fit, minmax(200px, 1fr))",

    gridGap: "5%"
  },
  links: {
    textDecoration: "none"
  }
};
