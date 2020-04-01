// 3rd Party components ---------------------------------------//
import React, { useContext, useState } from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Picker from "emoji-picker-react";
import arrayMove from "array-move";

// Custom components & Hooks ----------------------------------//
import {
  NewPaletteContext,
  DispatchContext
} from "../../contexts/newPaletteContext";
import useStyles from "./newPaletteStyles";
import DraggableGrid from "../DraggableGrid/DraggableGrid";
import ColorDrawer from "../ColorDrawer/ColorDrawer";
import SaveDialog from "../SaveDialog/SaveDialog";

export default function NewPalettePage(props) {
  const classes = useStyles();

  // Form State
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [emojiPickerOpen, setEmojiPickerOpen] = useState(false);
  const { palettes } = props;

  //State for this palette
  const newPaletteColors = useContext(NewPaletteContext);

  const dispatch = useContext(DispatchContext);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleSavePalette = () => {
    setDialogOpen(true);
    // if (newPaletteName) {
    //   const addPalette = props.addPalette;
    //   const newPalette = {
    //     paletteName: newPaletteName,
    //     id: newPaletteName.toLocaleLowerCase().replace(/ /g, "-"),
    //     emoji: "👩‍🦳",
    //     colors: [...newPaletteColors]
    //   };
    //   addPalette(newPalette);
    //   dispatch({ type: "CLEAR" });
    //   props.history.push("/");
    // }
  };

  const handleSortEnd = ({ oldIndex, newIndex }) => {
    const newOrder = arrayMove(newPaletteColors, oldIndex, newIndex);
    dispatch({ type: "SORT", newOrder });
  };

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
            onClick={handleSavePalette}
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
        <SaveDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          showEmojiPicker={setEmojiPickerOpen}
          palettes={props.palettes}
        />

        <DraggableGrid onSortEnd={handleSortEnd} axis="xy" distance={1} />
      </main>
    </div>
  );
}
