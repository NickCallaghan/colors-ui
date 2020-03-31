import React, { useContext, useEffect } from "react";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import { ChromePicker } from "react-color";
import Wrapper from "../Wrapper/Wrapper";
import { useTheme } from "@material-ui/core/styles";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import useInputState from "../../hooks/useInputState";
import { randomColor } from "../../helpers/colorHelpers";
import { NewPaletteContext } from "../../contexts/newPaletteContext";
import { DispatchContext } from "../../contexts/newPaletteContext";
import useStyles from "./ColorDrawerStyles";

export default function ColorDrawer(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [pickerColor, setPickerColor] = React.useState("#CC25E0");
  const [colorName, setColorName, resetColorName] = useInputState();
  const newPaletteColors = useContext(NewPaletteContext);
  const dispatch = useContext(DispatchContext);
  const { open, toggle } = props;

  const handleDrawerClose = () => {
    toggle(false);
  };

  const handleAddColor = () => {
    if (colorName) {
      dispatch({ type: "ADD", color: pickerColor, name: colorName });
      resetColorName();
    }
  };

  const handleClearPalette = () => {
    dispatch({ type: "CLEAR" });
  };

  const handleRandomColor = () => {
    const color = randomColor();
    dispatch({ type: "ADD", color: color.color, name: color.name });
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
  }, [newPaletteColors, pickerColor]);

  return (
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
            disabled={newPaletteColors.length < 20 ? false : true}
            fullWidth
          >
            {newPaletteColors.length < 20 ? "Add To Palette" : "Palette Full"}
          </Button>
        </ValidatorForm>
      </Wrapper>
    </Drawer>
  );
}
