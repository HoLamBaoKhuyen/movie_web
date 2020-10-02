import { Box, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import style from "./styleCinema";
import { withStyles } from "@material-ui/core";
import Cinema from "./Cinema";
import CinemaDetail from "./CinemaDetail";
import { connect } from "react-redux";

class CinemaComponent extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Box my={5} mx={2}>
        <Typography className={classes.title2} component="h4" variant="h4">
          Cinema
        </Typography>
        <Grid className={classes.cinema} container>
          <Grid item xs={1}>
            <Cinema />
          </Grid>
          <Grid item xs={4}>
            <CinemaDetail />
          </Grid>
          <Grid item xs={7} className={classes.detail}>
            <Typography>Info</Typography>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cinema: state.cinema,
    cinemaDetail: state.cinemaDetail,
  };
};

export default connect(mapStateToProps)(withStyles(style)(CinemaComponent));
