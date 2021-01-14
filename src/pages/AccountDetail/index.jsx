import React from "react";
import { Box } from "@material-ui/core";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
import { useEffect } from "react";

const Home = (props) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCurrentWebPage(props.match.url))
  },[]);

  if (userLogin) {
    return (
      <Box className={styles.root}>
        <PersonalInfo />
        <BookingInfo />
      </Box>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default wrapper(Home);
