import { Box, Typography, Button, ButtonGroup } from "@material-ui/core";
import React, { Component } from "react";
import useStyles from "./style";

const cinemaList = [
  {
    maHeThongRap: "BHDStar",
    tenHeThongRap: "BHD Star Cineplex",
    biDanh: "bhd-star-cineplex",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
  },
  {
    maHeThongRap: "CGV",
    tenHeThongRap: "cgv",
    biDanh: "cgv",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cgv.png",
  },
  {
    maHeThongRap: "CineStar",
    tenHeThongRap: "CineStar",
    biDanh: "cinestar",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/cinestar.png",
  },
  {
    maHeThongRap: "Galaxy",
    tenHeThongRap: "Galaxy Cinema",
    biDanh: "galaxy-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/galaxy-cinema.png",
  },
  {
    maHeThongRap: "LotteCinima",
    tenHeThongRap: "Lotte Cinema",
    biDanh: "lotte-cinema",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/lotte-cinema.png",
  },
  {
    maHeThongRap: "MegaGS",
    tenHeThongRap: "MegaGS",
    biDanh: "megags",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/megags.png",
  },
];

const CinemaLogo = (cinemaList) => {
  const styles = useStyles();
  return (
    <ButtonGroup
      orientation="vertical"
      color="secondary"
      aria-label="vertical outlined primary button group"
      variant="text"
    >
      {cinemaList.map((item, index) => (
        <Button className={styles.logo} key={index}>
          <img className="img" src={item.logo} />
        </Button>
      ))}
    </ButtonGroup>
  );
};

const MovieLogoList = (props) => {
  const styles = useStyles();
  return (
    <Box className={styles.container} my={5} mx={2} border="1px solid grey">
      {CinemaLogo(cinemaList)}
    </Box>
  );
};

export default MovieLogoList;
