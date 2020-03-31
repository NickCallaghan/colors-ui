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

export default function FormDialog(props) {
  const { dialogOpen, setDialogOpen } = props;
  const newPalette = useContext(NewPaletteContext);
  const dispatch = useContext(DispatchContext);
  const [newPaletteName, setNewPaletteName] = useState(null);

  const handleClose = () => {
    setDialogOpen(false);
  };

  const handleSavePalette = () => {
    // if (newPaletteName) {
    //   const addPalette = props.addPalette;
    //   const newPalette = {
    //     paletteName: newPaletteName,
    //     id: newPaletteName.toLocaleLowerCase().replace(/ /g, "-"),
    //     emoji: "👩‍🦳",
    //     colors: [...newPalette.colors]
    //   };
    //   addPalette(newPalette);
    //   dispatch({ type: "CLEAR" });
    //   props.history.push("/");
    // }

    // Set Pallette Name
    // Close dialog
    setDialogOpen(false);
    // Open emoji picker
    props.showEmojiPicker(true);
  };

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
        open={dialogOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <ValidatorForm onSubmit={handleSavePalette}>
          <DialogTitle id="form-dialog-title">Save New Palette</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter a palette name to save this palette to you collection
            </DialogContentText>
            <div style={{ display: "flex" }}>
              <TextValidator
                label="Palette Name"
                value={newPaletteName}
                onChange={e => setNewPaletteName(e.target.value)}
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
            <Button onClick={handleSavePalette} color="primary">
              Save
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
