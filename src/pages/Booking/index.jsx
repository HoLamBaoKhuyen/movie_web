import { Box, Grid } from "@material-ui/core";
import React from "react";
import HeaderBooking from "../../components/HeaderBooking";
import PriceTable from "../../components/PriceTable";
import useStyles, { CssContainer } from "./style";
import SeatTable from "../../components/SeatTable";

const Booking = (props) => {
  const classes = useStyles();
  return (
    <CssContainer>
      <Grid container>
        <Grid item xs={12} md={9}>
          <div className={classes.headerBooking}>
            <HeaderBooking />
          </div>
          <Box marginTop="50px">
            <SeatTable />
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box className={classes.priceTable}>
            <PriceTable />
          </Box>
        </Grid>
      </Grid>
    </CssContainer>
  );
};

export default Booking;