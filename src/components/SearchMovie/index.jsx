import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Grid, Box } from "@material-ui/core";
import useStyle from "./style";
import DropDown from "../DropDown";
import { getShowTimeDetail } from "../../redux/actions/movieAction";
import {
  GET_SEARCH_MOVIE,
  GET_SEARCH_CINEMA,
  GET_SEARCH_DATE,
  GET_SEARCH_SHOW_TIME,
  RESET_STATE,
} from "../../redux/actions/actionType";
import {
  getMovieId,
  getCinemas,
  getShowTimeDates,
  getShowTimes,
  getSelectedShowTimeId,
} from "../../helpers/search-manager";

const SearchMovie = (props) => {
  const styles = useStyle();
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const movieNames = useSelector((state) => state.movies).map(
    (movie) => movie.tenPhim
  );
  const result = useSelector(
    (state) => state.searchMovie.advancedSearch.result
  );
  const selectedMovie = useSelector(
    (state) => state.searchMovie.advancedSearch.movie
  );
  const selectedCinema = useSelector(
    (state) => state.searchMovie.advancedSearch.cinema
  );
  const selectedDate = useSelector(
    (state) => state.searchMovie.advancedSearch.date
  );
  const selectedTime = useSelector(
    (state) => state.searchMovie.advancedSearch.showTime
  );

  useEffect(() => {
    dispatch(getShowTimeDetail(getMovieId(movies, selectedMovie)));
  }, [dispatch, selectedMovie, movies]);

  const handleGo = () => {
    window.open(
      `/booking/${getSelectedShowTimeId(
        result,
        selectedCinema,
        selectedDate,
        selectedTime
      )}`,
      "_blank"
    );
    dispatch({
      type: RESET_STATE,
    });
  };

  return (
    <Container maxWidth="lg">
      <Box className={styles.root}>
        <Grid container spacing={1}>
          <Grid item xs={12} lg={4}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Phim"
                list={movieNames}
                state={selectedMovie}
                dispatchType={GET_SEARCH_MOVIE}
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Rạp"
                state={selectedCinema}
                list={getCinemas(result)}
                dispatchType={GET_SEARCH_CINEMA}
                placeHolder="Vui lòng chọn phim"
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Ngày xem"
                state={selectedDate}
                list={getShowTimeDates(result, selectedCinema)}
                dispatchType={GET_SEARCH_DATE}
                placeHolder="Vui lòng chọn phim và rạp"
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Box className={styles.dropDown}>
              <DropDown
                label="Suất chiếu"
                state={selectedTime}
                list={getShowTimes(result, selectedCinema, selectedDate)}
                dispatchType={GET_SEARCH_SHOW_TIME}
                placeHolder={
                  selectedCinema
                    ? "Vui lòng chọn ngày xem"
                    : "Vui lòng chọn phim, rạp và ngày xem"
                }
              />
            </Box>
          </Grid>

          <Grid item xs={12} lg={2}>
            <Button
              disabled={!selectedTime}
              variant="contained"
              color="secondary"
              classes={{ root: styles.button }}
              onClick={() => handleGo()}
            >
              MUA VÉ NGAY
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SearchMovie;
