import { backgroundImage } from "./backgroundImage";

export default {
  root: {
    backgroundColor: "#131b70",
    backgroundImage: backgroundImage,
    backgroundAttachment: "fixed",
    minHeight: "130vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap"
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
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%"
  },
  links: {
    textDecoration: "none"
  }
};
