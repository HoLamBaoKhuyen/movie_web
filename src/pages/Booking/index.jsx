import { Box, Container, Grid } from "@material-ui/core";
import React, { Component } from "react";
import HeaderBooking from "../../components/HeaderBooking";
import PriceTable from "../../components/PriceTable";
import useStyles from "./style";
import SeatTable from "../../components/SeatTable";

const Booking = (props) => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={9}>
          <div className={classes.headerBooking}>
            <HeaderBooking />
          </div>
          <SeatTable />
        </Grid>
        <Grid item xs={12} md={3}>
          <PriceTable />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Booking;
