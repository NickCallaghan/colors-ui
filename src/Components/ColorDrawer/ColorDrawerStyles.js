import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 350;

const useStyles = makeStyles(theme => ({
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
  headerTitle: {
    marginTop: "0.5em"
  },
  buttonRow: {
    margin: "1em 0 1em 0 "
  },
  addButton: {
    marginTop: "1em"
  }
}));

export default useStyles;
