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

  const handleSavePalette = useCallback(() => {
    if (
      newPalette.paletteName &&
      newPalette.emoji &&
      newPalette.colors.length > 0
    ) {
      props.addPalette(newPalette);
      props.history.push("/");
      dispatch({ type: "RESET" });
    }
  }, [newPalette, props, dispatch]);

  const goBack = () => {
    dispatch({ type: "RESET" });
    props.history.push("/");
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    const newOrder = arrayMove(colors, oldIndex, newIndex);
    dispatch({ type: "SORT", newOrder });
  };

  const handleHideForm = () => {
    setShowMetaForm(false);
  };

  useEffect(() => {
    if (
      newPalette.name !== null &&
      newPalette.colors.length > 0 &&
      newPalette.emoji
    ) {
      handleSavePalette();
      dispatch({ type: "RESET" });
    }
  }, [newPalette, handleSavePalette, dispatch]);

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
              onClick={() => goBack()}
            >
              Go Back
            </Button>
          </div>

          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowMetaForm(true)}
            disabled={colors.length < 2 ? true : false}
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
            hideForm={handleHideForm}
          />
        )}
        <DraggableGrid onSortEnd={handleSortEnd} axis="xy" distance={1} />
      </main>
    </div>
  );
}
