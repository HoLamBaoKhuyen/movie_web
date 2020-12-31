import { fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  head: {
    left: 0,
    zIndex: 1,
    height: 60,
    width: "100vw",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: theme.shadows[22],
    opacity: 0.95,

    [theme.breakpoints.up("xs")]: {
      padding: theme.spacing(1.5, 1),
      position: "relative",
    },
    [theme.breakpoints.up("xsm")]: {
      padding: theme.spacing(1.5, 2),
    },
    [theme.breakpoints.up("md")]: {
      position: "fixed",
    },
  },

  iconButton: {
    outlineStyle: "none!important",
    padding: 0,
  },

  logo: {
    color: theme.palette.secondary.main,
    cursor: "pointer",
    margin: theme.spacing(1.5),
  },

  links: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },

  link: {
    padding: theme.spacing(0, 1),
    color: theme.palette.text.primary,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.text.secondary,
      transition: "all 0.3s",
    },
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
  },

  right: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.breakpoints.up("xs")]: {
      width: "70%",
    },
    [theme.breakpoints.up("xsm")]: {
      width: "70%",
    },
    [theme.breakpoints.up("md")]: {
      width: "auto",
    },
  },

  signInUp: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.grey.main,
    marginLeft: theme.spacing(2),
    "&:hover": {
      cursor: "Pointer",
    },

    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },

  search: {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: theme.palette.grey.main,
    border: "solid 1px",
    borderColor: theme.palette.grey.main,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.grey.dark, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.grey.dark, 0.25),
    },

    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(0),
      width: "100%",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(2),
      width: "auto",
    },
    [theme.breakpoints.up("xl")]: {
      marginRight: theme.spacing(1.5),
    },
  },
  searchIcon: {
    padding: theme.spacing(0.5),
    height: "100%",
    pointerEvents: "none",
    color: theme.palette.secondary.main,
  },

  inputInput: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.subtitle2.fontSize,
    padding: theme.spacing(1),
  },

  menu: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default useStyles;