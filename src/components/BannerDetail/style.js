import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  item: {
    textAlign: "center",
    position: "relative",
    background: "url(./imgs/bg-body.png)",
    paddingBottom: theme.spacing(5),
    "& .img": {
      position: "relative",
      marginTop: 50,
      borderRadius: 5,
      width: "100%",
      overflow: "hidden",
      "&:hover": {
        cursor: "pointer",
      },
      "&__overlay": {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        //opacity: 0,
        transition: "all 0.2s",
        "& button": {
          position: "relative",
          top: "50%",
          transform: "translateY(-50%)",
          color: theme.palette.white,
          "&:hover": {
            color: theme.palette.secondary.main,
            transition: "all 0.2s",
          },
          "& svg": {
            fontSize: 60,
            "@media screen and (max-width: 768px)": {
              "&": {
                fontSize: 40,
              },
            },
          },
        },
      },
    },
    "& .title": {
      position: "relative",
      top: "50%",
      transform: "translateY(-50%)",
      color: theme.palette.white,
      marginTop: 10,
      textAlign: "left",
      padding:'0 30px',
      "& p": {
        texAlign: "left",
        margin: 0,
        "& span": {
          display: "inline-block",
          backgroundColor: "#000",
          borderRadius: 5,
          width: 35,
          textAlign: "center",
          marginRight: 10,
          "&.tag-p": {
            background: "#000",
          },
        },
      },
      "& .titleMovie": {
          color:theme.palette.white,
          paddingBottom:theme.spacing(3),
          fontSize:30
      },
      "& .descMovie":{
        paddingBottom:theme.spacing(2),
      },
      "& .dateMovie":{
        paddingBottom:theme.spacing(2),
      },
      "& button": {
        width: "130px",
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.white,
        "&:hover": {
          backgroundColor: theme.palette.secondary.dark,
        },
      },
    },
    "& .score": {
      color: theme.palette.secondary.main,
      padding: 4,
      transform: "scale(1.5) translateX(-50%)",
      backgroundColor: "#000",
      opacity: 0.8,
      border: `3px solid ${theme.palette.secondary.main}`,
      height:70,
      width:70,
      borderRadius:70,
      textAlign: "center",
      margin:'auto',
      marginBottom:30,
      paddingTop:15,
      "& .point": {
        margin: 0,
        color: theme.palette.white,
        fontSize: 17,
        lineHeight: 1,
      },
    },
  },
}));

export default useStyle;
