import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TextField from "@material-ui/core/TextField";
import { ChromePicker } from "react-color";
import useNewPalette from "../../hooks/useNewPalette";
import useStyles from "./newPaletteStyles";
import MenuIcon from "@material-ui/icons/Menu";
import useInputState from "../../hooks/useInputState";

export default function NewPaletteForm() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [pickerColor, setPickerColor] = React.useState("#CC25E0");
  const [colorName, setColorName, resetColorName] = useInputState();
  const { newPaletteColors, dispatch } = useNewPalette();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddColor = () => {
    dispatch({ type: "ADD", hex: pickerColor, name: colorName });
    resetColorName();
  };

  const handleClearPalette = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <AddCircleOutline />
          </IconButton>
          <Typography variant="h6" noWrap>
            Create New Palette
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <Button
          color="primary"
          variant="contained"
          onClick={handleClearPalette}
        >
          Clear Pallette
        </Button>
        <Button color="secondary" variant="contained">
          Random Color
        </Button>
        <ChromePicker
          color={pickerColor}
          onChange={e => setPickerColor(e.hex)}
        />
        <TextField
          id="color-name"
          label="Color Name"
          variant="filled"
          value={colorName}
          onChange={e => setColorName(e.target.value)}
        />

        <Button variant="contained" color="primary" onClick={handleAddColor}>
          Add To Palette
        </Button>
      </Drawer>
      <Typography variant="h1">Add a new palette</Typography>
    </div>
  );
}
