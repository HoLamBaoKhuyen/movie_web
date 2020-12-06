import React from "react";
import PropTypes from "prop-types";
import { Button, Typography } from "@material-ui/core";
import { getTime } from "../../helpers/time-manager";
import useStyles from "./style";

const StartTime = ({ start, duration }) => {
  const styles = useStyles();
  return (
    <Button className={styles.root}>
      <Typography variant="h6" component="span" className={styles.startTime}>
        {getTime(start)}
      </Typography>
      <Typography
        variant="subtitle1"
        component="span"
        className={styles.endTime}
      >
        ~{getTime(start, duration)}
      </Typography>
    </Button>
  );
};

StartTime.propTypes = {
  start: PropTypes.string,
  duration: PropTypes.number,
};

StartTime.defaultProps = {
  start: "2019-01-09T00:00:00",
  duration: 0,
};

export default StartTime;
