import React from "react";
import { Container } from "@material-ui/core";
import PersonalInfo from "../../components/PersonalInfo";
import BookingInfo from "../../components/BookingInfo";
import BackToTop from "../../components/BackToTop";
import useStyles from "./style";
import wrapper from "../../HOCs/Wrapper";
import { Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentWebPage } from "../../redux/actions/pageAction";
// import { getAccountInfo } from "../../redux/actions/userAction";
import { useEffect } from "react";

const Home = (props) => {
  const styles = useStyles();
  const userLogin = useSelector((state) => state.userLogin);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentWebPage(props.match.url));
  }, [dispatch, props.match.url]);

  // useEffect(() => {
  //   dispatch(getAccountInfo());
  // }, [dispatch]);

  if (userLogin) {
    return (
      <Container maxWidth="lg" className={styles.root}>
        <PersonalInfo />
        <BookingInfo />
        <BackToTop showBelow={300} />
      </Container>
    );
  } else {
    return <Redirect to="/signin" />;
  }
};

export default wrapper(Home);
