import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { Box, Button, Container } from "@material-ui/core";
import CinemaDescription from "../CinemaDescription";
import useStyles from "./style";

const CinemaBannerDetail = ({ cinema }) => {
  const styles = useStyles();
  const cinemaDetail = useSelector((state) => state.cinemas);
  const cinemaSystem = useSelector((state) => state.cinemaSystems);
  cinema = cinemaDetail.list.find(
    (item) => cinemaDetail.selected === item.maCumRap
  );

  // useEffect(() => {
  //   cinema = cinemaDetail.list.find(
  //     (item) => cinemaDetail.selected === item.maCumRap
  //   );
  // }, [cinemaDetail]);

  return (
    <>
      <Container maxWidth="lg">
        <Box className={styles.root}>
          <img
            src={cinemaSystem.selectedLogo}
            alt="img"
            className={styles.image}
          />
          <Box className={styles.descWrapper}>
            <CinemaDescription {...cinema} />
            <Button
              variant="contained"
              color="secondary"
              fullWidth
              className={styles.button}
            >
              MUA VÉ
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

CinemaBannerDetail.propTypes = {
  cinema: PropTypes.object,
};

CinemaBannerDetail.defaultProps = {
  cinema: {
    id: "bhd-star-cineplex-3-2",
    logo: "http://movie0706.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png",
    name: "BHD Star Cineplex - 3/2",
    address: "L5-Vincom 3/2, 3C Đường 3/2, Q.10",
  },
};

export default CinemaBannerDetail;
