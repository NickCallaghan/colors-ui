// 3rd Party components ---------------------------------------//
import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import arrayMove from "array-move";

// Custom components & Hooks ----------------------------------//
import {
  NewPaletteContext,
  DispatchContext
} from "../../contexts/newPaletteContext";
import useStyles from "./newPaletteStyles";
import DraggableGrid from "../DraggableGrid/DraggableGrid";
import ColorDrawer from "../ColorDrawer/ColorDrawer";

export default function NewPalettePage(props) {
  const classes = useStyles();

  // Form State
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);

  //State for this palette
  const [newPaletteName, setNewPaletteName] = useState("");
  const newPaletteColors = useContext(NewPaletteContext);
  const dispatch = useContext(DispatchContext);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleSavePalette = () => {
    if (newPaletteName) {
      const addPalette = props.addPalette;
      const newPalette = {
        paletteName: newPaletteName,
        id: newPaletteName.toLocaleLowerCase().replace(/ /g, "-"),
        emoji: "👩‍🦳",
        colors: [...newPaletteColors]
      };
      addPalette(newPalette);
      dispatch({ type: "CLEAR" });
      props.history.push("/");
    }
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    const newOrder = arrayMove(newPaletteColors, oldIndex, newIndex);
    dispatch({ type: "SORT", newOrder });
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: drawerOpen
        })}
        color="default"
      >
        <Toolbar>
          <Fab
            color="secondary"
            size="small"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, drawerOpen && classes.hide)}
          >
            <AddIcon />
          </Fab>

          <Typography variant="h6" className={classes.sidebarHeading} noWrap>
            Create a new palette
          </Typography>

          <ValidatorForm onSubmit={handleSavePalette}>
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
              <Button variant="contained" color="primary" type="submit">
                Save Palette
              </Button>
            </div>
          </ValidatorForm>
        </Toolbar>
      </AppBar>

      <ColorDrawer open={drawerOpen} toggle={setDrawerOpen} />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen
        })}
      >
        <div className={classes.drawerHeader} />

        <DraggableGrid onSortEnd={handleSortEnd} axis="xy" />
      </main>
    </div>
  );
}
