import React, { useContext, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import {
  NewPaletteContext,
  DispatchContext
} from "../../contexts/newPaletteContext";

export default function PaletteNameForm(props) {
  const { open, toggle } = props;
  const newPalette = useContext(NewPaletteContext);
  const { newPaletteName } = newPalette;
  const dispatch = useContext(DispatchContext);
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => {
    props.hideForm();
  };

  const handleSetPaletteName = () => {
    if (inputValue) {
      dispatch({ type: "SETNAME", paletteName: inputValue });
      toggle();
    }
  };

  useEffect(() => {
    if (newPalette.paletteName !== null) {
      props.savePalette();
    }
  }, [newPalette]);

  useEffect(() => {
    //Validators goes here
    const { palettes } = props;

    ValidatorForm.addValidationRule(
      "isPaletteNameUnique",
      value => {
        let isUnique;
        isUnique = palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
        );
        return isUnique;
      },
      [newPaletteName, props]
    );
  });

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <ValidatorForm onSubmit={handleSetPaletteName}>
          <DialogTitle id="form-dialog-title">Save New Palette</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter a palette name to save this palette to you collection
            </DialogContentText>
            <div style={{ display: "flex" }}>
              <TextValidator
                label="Palette Name"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                validators={["required", "isPaletteNameUnique"]}
                errorMessages={[
                  "this field is required",
                  "Palette name already exists"
                ]}
                fullWidth
              />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" type="submit">
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
