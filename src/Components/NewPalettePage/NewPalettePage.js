// 3rd Party components ---------------------------------------//
import React, { useContext, useState, useEffect, useCallback } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

import arrayMove from "array-move";

// Custom components & Hooks ----------------------------------//
import {
  NewPaletteContext,
  DispatchContext
} from "../../contexts/newPaletteContext";
import useStyles from "./newPaletteStyles";
import DraggableGrid from "../DraggableGrid/DraggableGrid";
import PaletteMetaForm from "../PaletteMetaForm/PaletteMetaForm";
import ColorDrawer from "../ColorDrawer/ColorDrawer";

export default function NewPalettePage(props) {
  const classes = useStyles();

  // Form State
  const [drawerOpen, setDrawerOpen] = useState(true);
  const [showMetaForm, setShowMetaForm] = useState(false);

  const { palettes } = props;

  //State for this palette
  const newPalette = useContext(NewPaletteContext);
  const { colors } = newPalette;
  const dispatch = useContext(DispatchContext);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleSavePalette = () => {
    if (
      newPalette.paletteName &&
      newPalette.emoji &&
      newPalette.colors.length > 0
    ) {
      props.addPalette(newPalette);
      props.history.push("/");
      dispatch({ type: "RESET" });
    }
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    const newOrder = arrayMove(colors, oldIndex, newIndex);
    dispatch({ type: "SORT", newOrder });
  };

  // useEffect(() => {
  //   if (newPalette.name !== null && newPalette.colors > 3) {
  //     handleSavePalette();
  //     console.log("Palette Save Ran");
  //   }
  // }, [newPalette, handleSavePalette]);

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
          <div className={classes.AppBarButtons}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => props.history.push("/")}
            >
              Go Back
            </Button>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowMetaForm(true)}
          >
            Save Palette
          </Button>
        </Toolbar>
      </AppBar>

      <ColorDrawer
        open={drawerOpen}
        toggle={setDrawerOpen}
        palettes={palettes}
      />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: drawerOpen
        })}
      >
        <div className={classes.drawerHeader} />
        {showMetaForm && (
          <PaletteMetaForm
            setShowMetaForm={setShowMetaForm}
            palettes={palettes}
            savePalette={handleSavePalette}
          />
        )}
        <DraggableGrid onSortEnd={handleSortEnd} axis="xy" distance={1} />
      </main>
    </div>
  );
}
