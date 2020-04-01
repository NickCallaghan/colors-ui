import React, { useState } from "react";
import { Picker } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

import PaletteNameForm from "../PaletteNameForm/PaletteNameForm";

export default function PaletteMetaForm(props) {
  const [paletteNameOpen, setPaletteNameOpen] = useState(true);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  const toggle = (state, setState) => {
    setState(!state);
  };

  return (
    <div>
      <PaletteNameForm
        open={paletteNameOpen}
        toggle={() => toggle(paletteNameOpen, setPaletteNameOpen)}
        palettes={props.palettes}
        savePalette={props.savePalette}
        hideForm={props.hideForm}
      />
      <Picker />
    </div>
  );
}
