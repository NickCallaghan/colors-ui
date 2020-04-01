import React, { useState, useContext } from "react";
import Dialog from "@material-ui/core/Dialog";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import { DispatchContext } from "../../contexts/newPaletteContext";

export default function EmojiForm(props) {
  const [open] = useState(true);
  const dispatch = useContext(DispatchContext);

  const handleClose = () => {
    props.hideForm();
  };

  const setEmoji = (emoji, e) => {
    console.log(emoji);
    dispatch({ type: "SETEMOJI", emoji: emoji.native });
    props.hideForm();
  };

  return (
    <div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <Picker
          title="Pick palette emoji"
          emoji="point_up"
          defaultSkin="2"
          onSelect={(emoji, e) => setEmoji(emoji, e)}
        />
      </Dialog>
    </div>
  );
}
