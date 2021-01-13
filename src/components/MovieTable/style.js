import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1.5, 0),
    border: `1.0px solid ${theme.palette.grey.dark}`,
    borderRadius: theme.shape.borderRadius,
    maxHeight: 500,
    maxWidth: 1000,
  },

  search: {
    margin: theme.spacing(1, 0),
    width: "48%",
  },

  darkRow: {
    background: theme.palette.grey.dark,
    color: theme.palette.white.main,
    fontWeight: 500,
    padding: theme.spacing(1.5),
    textAlign: "center",
  },

  footer: {
    borderBottom: "none",
  },

  select: {
    "&:focus": {
      background: "none",
    },
  },

  selectIcon: {
    color: theme.palette.white.main,
  },

  cell: {
    padding: theme.spacing(1.5),
    textAlign: "center",
  },

  image: {
    width: 50,
  },

  iconButton: {
    padding: theme.spacing(0.5),
    "&:focus": {
      outline: "none",
    },
  },

  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

export default useStyles;
