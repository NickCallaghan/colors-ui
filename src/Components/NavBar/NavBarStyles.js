export default {
  NavBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "6vh"
  },
  logo: {
    fontFamily: "Roboto",
    fontSize: "1.2em",
    backgroundColor: "#eceff1",
    height: "100%",
    padding: "0 1em",
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
      color: "black"
    }
  },
  slider: {
    width: "340px",
    margin: "0 30px",
    display: "flex",
    "& .rc-slider-rail ": {
      height: "8px"
    },
    "& .slider-label": {
      marginRight: 20
    },
    "& .rc-slider": {
      width: "70%"
    },
    "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover": {
      backgroundColor: "green",
      outline: "none",
      border: "2px solid green",
      height: 15,
      width: 15,
      marginLeft: "-7px",
      marginTop: "-3px"
    },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
      outline: "none"
    }
  },
  formatPicker: {
    marginLeft: "auto",
    marginRight: "12px"
  }
};
