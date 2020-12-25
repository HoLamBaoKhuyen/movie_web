import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 1),
    border: `1.5px solid ${theme.palette.grey.light}`,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderBottomLeftRadius: theme.shape.borderRadius,
    background: theme.palette.white,
    minHeight: 700,

    "&:hover": {
      cursor: "pointer",
    },
  },

  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    background: "none!important",
    padding: theme.spacing(1.5, 0),
    opacity: 0.5,

    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },
  },

  selected: {
    opacity: 1.0,
  },
}));

export default useStyles;
