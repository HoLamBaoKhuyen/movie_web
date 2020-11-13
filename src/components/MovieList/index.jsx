import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Typography, Grid } from "@material-ui/core";
import MovieItem from "../MovieItem";
import useStyles from "./style";
import Paging from "../Paging";
import { getMovieList } from "../../redux/actions/movieAction";

const MovieList = () => {
  const movies = useSelector((state) => state.course);
  const dispatch = useDispatch();
  const style = useStyles();

  useEffect(() => {
    dispatch(getMovieList(1, 8));
  });

  const renderMovie = (movies) => {
    return movies.map((movie, index) => {
      return (
        <Grid item xs={6} sm={4} lg={3}>
          <MovieItem key={index} movie={movie} />
        </Grid>
      );
    });
  };

  return (
    <Container maxWidth="lg" className={style.container}>
      <Typography className={style.title} component="h1" variant="h5">
        Phim đang chiếu
      </Typography>
      <Grid container spacing={3}>
        {renderMovie(movies)}
      </Grid>
      <Paging />
    </Container>
  );
};

export default MovieList;
