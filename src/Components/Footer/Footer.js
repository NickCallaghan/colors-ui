import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./FooterStyles";
import "./Footer.scss";

function Footer(props) {
  const { paletteName, emoji, classes } = props;

  return (
    <footer className={classes.Footer}>
      {paletteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}
export default withStyles(styles)(Footer);
