import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(0),
    borderBottom: `1px solid ${theme.palette.grey.light}`,
    border: (props) => props.noBorder && "none",
    opacity: 0.5,
    background: "none!important",
    transition: "all 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

    "&:hover": {
      cursor: "pointer",
      opacity: 1.0,
    },

    [theme.breakpoints.down("md")]: {
      opacity: 1.0,
    },
  },

  noBorder: {
    border: "none",
  },

  selected: {
    opacity: 1.0,
    background: "none",
  },
}));

export default useStyles;
