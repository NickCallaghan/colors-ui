import React, { useState } from "react";
import Picker from "emoji-picker-react";
import PaletteNameForm from "../PaletteName/PaletteNameForm";

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
      />
    </div>
  );
}
