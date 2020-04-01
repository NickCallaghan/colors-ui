import React, { useState, useEffect, useContext } from "react";
import EmojiForm from "../EmojiForm/EmojiForm";

import PaletteNameForm from "../PaletteNameForm/PaletteNameForm";
import { NewPaletteContext } from "../../contexts/newPaletteContext";

export default function PaletteMetaForm(props) {
  const [paletteNameOpen, setPaletteNameOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const { paletteName, emoji } = useContext(NewPaletteContext);

  const toggle = (state, setState) => {
    setState(!state);
  };

  useEffect(() => {
    if (!paletteName) setPaletteNameOpen(true);
    if (paletteName && !emoji) setEmojiPickerOpen(true);
  }, [emojiPickerOpen, paletteNameOpen, paletteName, emoji]);

  return (
    <div>
      <PaletteNameForm
        open={paletteNameOpen}
        toggle={() => toggle(paletteNameOpen, setPaletteNameOpen)}
        palettes={props.palettes}
        savePalette={props.savePalette}
        hideForm={props.hideForm}
      />
      {emojiPickerOpen && <EmojiForm hideForm={props.hideForm} />}
    </div>
  );
}
