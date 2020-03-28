// 3rd Party Components ---------------------------------------//
import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { ChromePicker } from "react-color";

// Custom Components & Hooks ----------------------------------//
import DraggableColorBox from "../DraggableColorBox/DraggableColorBox";
import useInputState from "../../hooks/useInputState";
import useNewPalette from "../../hooks/useNewPalette";
import { randomColor } from "../../helpers/colorHelpers";

const drawerWidth = 300;

// const state = useContext(NewPaletteContext);
// const dispatch = useContext(DispatchContext);

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      height: 72
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
  }
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const [pickerColor, setPickerColor] = React.useState("#CC25E0");
  const [colorName, setColorName, resetColorName] = useInputState();
  const [newPaletteColors, dispatch] = useNewPalette();

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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
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
        <Typography variant="h4">Design your palette</Typography>
        <div>
          <Button
            color="primary"
            variant="contained"
            onClick={handleClearPalette}
          >
            Clear Pallette
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={handleRandomColor}
          >
            Random Color
          </Button>
        </div>
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

        <Button
          variant="contained"
          color="primary"
          onClick={handleAddColor}
          style={{ backgroundColor: pickerColor }}
        >
          Add To Palette
        </Button>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        {newPaletteColors.map(color => {
          return <DraggableColorBox color={color.hex} />;
        })}
      </main>
    </div>
  );
}
