// 3rd Party Components ---------------------------------------//
import React, { useContext, useEffect, useState } from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import AddIcon from "@material-ui/icons/Add";

// Custom Components & Hooks ----------------------------------//
import Wrapper from "../Wrapper/Wrapper";
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";
import useInputState from "../../hooks/useInputState";
import {
  NewPaletteContext,
  DispatchContext
} from "../../contexts/newPaletteContext";
import { randomColor } from "../../helpers/colorHelpers";
import useStyles from "./newPaletteStyles";

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);
  const [pickerColor, setPickerColor] = React.useState("#CC25E0");
  const [colorName, setColorName, resetColorName] = useInputState();
  const [newPaletteName, setNewPaletteName] = useState("");
  const newPaletteColors = useContext(NewPaletteContext);
  const dispatch = useContext(DispatchContext);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleAddColor = () => {
    if (colorName) {
      dispatch({ type: "ADD", hex: pickerColor, name: colorName });
      resetColorName();
    }
  };

  const handleClearPalette = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleRandomColor = () => {
    const color = randomColor();
    console.log(color);
    dispatch({ type: "ADD", color: color.color, name: color.name });
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

  useEffect(() => {
    //Add a validator rule to check color name is unique
    ValidatorForm.addValidationRule("isUniqueColorName", value => {
      let isValid;
      isValid = newPaletteColors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
      return isValid;
    });
    // Add validator rule to ensure the color is unique
    ValidatorForm.addValidationRule("isUniqueColor", () => {
      let isValid;
      isValid = newPaletteColors.every(({ hex }) => hex !== pickerColor);
      return isValid;
    });
  }, [newPaletteColors]);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
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
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <AddIcon />
          </Fab>

          <Typography variant="h6" className={classes.sidebarHeading} noWrap>
            Create a new palette
          </Typography>

          <ValidatorForm onSubmit={handleSavePalette}>
            <TextValidator
              label="Palette Name"
              value={newPaletteName}
              onChange={e => setNewPaletteName(e.target.value)}
              validators={["required"]}
              errorMessages={["this field is required"]}
              fullWidth
            />
            <Button variant="contained" color="primary" type="submit">
              Save Palette
            </Button>
          </ValidatorForm>
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
        <Wrapper>
          <Typography variant="h4" className={classes.headerTitle}>
            Design your palette
          </Typography>
          <div className={classes.buttonRow}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleClearPalette}
              style={{ marginRight: ".5em" }}
            >
              Clear Pallette
            </Button>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleRandomColor}
              disabled={newPaletteColors.length < 20 ? false : true}
            >
              Random Color
            </Button>
          </div>
          <ChromePicker
            color={pickerColor}
            onChange={e => setPickerColor(e.hex)}
            width="100%"
            style={{ margin: "0 auto" }}
          />
          <ValidatorForm onSubmit={handleAddColor}>
            <TextValidator
              label="Color Name"
              value={colorName}
              onChange={e => setColorName(e.target.value)}
              validators={["required", "isUniqueColorName", "isUniqueColor"]}
              errorMessages={[
                "this field is required",
                "Color name must be unique",
                "Color already in palette"
              ]}
              fullWidth
            />
            <Button
              className={classes.addButton}
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleAddColor}
              style={{ backgroundColor: pickerColor }}
              disabled={newPaletteColors.length < 20 ? false : true}
              fullWidth
            >
              {newPaletteColors.length < 20 ? "Add To Palette" : "Palette Full"}
            </Button>
          </ValidatorForm>
        </Wrapper>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {newPaletteColors.map(color => {
          return (
            <DraggableColorBox
              color={color.color}
              name={color.name}
              key={color.color}
            />
          );
        })}
      </main>
    </div>
  );
}
