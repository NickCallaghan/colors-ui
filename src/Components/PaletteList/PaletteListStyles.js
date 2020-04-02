import { backgroundImage } from "./backgroundImage";

export default {
  root: {
    backgroundColor: "#131b70",
    minHeight: "100vh",
    backgroundImage: backgroundImage,
    backgroundAttachment: "fixed"
  },
  container: {
    //center the whole page
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0 3em"
  },
  nav: {
    display: "flex",
    width: "100%",
    color: "white",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1em",
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
    gridGap: "20px"
  },
  links: {
    textDecoration: "none"
  }
};
