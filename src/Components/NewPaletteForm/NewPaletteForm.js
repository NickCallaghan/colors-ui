// 3rd Party Components ---------------------------------------//
import React, { useContext } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
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

const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  headerTitle: {
    marginTop: "0.5em"
  },
  buttonRow: {
    margin: "1em 0 1em 0 "
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = React.useState(true);
  const [pickerColor, setPickerColor] = React.useState("#CC25E0");
  const [colorName, setColorName, resetColorName] = useInputState();
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
    dispatch({ type: "ADD", hex: color.hex, name: color.name });
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
              validators={["required"]}
              errorMessages={["this field is required"]}
              fullWidth
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleAddColor}
              style={{ backgroundColor: pickerColor }}
              disabled={newPaletteColors.length < 20 ? false : true}
              fullWidth
            >
              Add
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
              color={color.hex}
              name={color.name}
              key={color.hex}
            />
          );
        })}
      </main>
    </div>
  );
}
