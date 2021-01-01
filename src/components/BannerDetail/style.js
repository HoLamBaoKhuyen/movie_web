import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  detail: {
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("lg")]: {
      display: "block",
    },
  },

  trailer: {
    [theme.breakpoints.up("xs")]: {
      display: "block",
    },
    [theme.breakpoints.up("lg")]: {
      display: "none",
    },
  },
}));

export default useStyles;
