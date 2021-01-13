import React from "react";
import { Box } from "@material-ui/core";
import CinemaBannerDetail from "../../components/CinemaBannerDetail";
import ScheduleCinemaDetail from "../../components/ScheduleCinemaDetail";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
const CinemaDetail = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <CinemaBannerDetail />
      <ScheduleCinemaDetail />
    </Box>
  );
};

export default wrapper(CinemaDetail);
