export default {
  root: {
    backgroundColor: "white",
    borderRadius: "5px",
    padding: "0.5rem",
    postion: "relative",
    overflow: "hidden",
    border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    height: "150px",
    width: "100%"
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "5px"
  },
  emoji: {
    marginLeft: "auto"
  },
  miniColor: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-3.5px"
  }
};
