import React from "react";
import { Box } from "@material-ui/core";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import useStyles from "./style";

const Home = () => {
  const styles = useStyles();

  return (
    <Box className={styles.root}>
      <PersonalInfo />
      <BookingInfo />
    </Box>
  );
};

export default Home;
