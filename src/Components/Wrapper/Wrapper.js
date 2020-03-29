import React from "react";

export default function Wrapper(props) {
  //   const [width] = props;
  const styles = {
    width: "90%",
    margin: "0 auto",
    textAlign: "center"
  };
  return <div style={styles}>{props.children}</div>;
}
