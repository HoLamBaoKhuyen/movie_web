/* eslint-disable no-lone-blocks */
import {
  GET_CINEMA_LIST,
  GET_MOVIE_LIST,
  GET_ADDRESS_CINEMA,
  GET_MOVIE_DETAIL,
  GET_MOVIE_DETAIL_SCHEDULE,
  GET_MOVIE_SHOW_TIME,
  GET_ALL_MOVIE,
  GET_ALL_CINEMA_SHOW_TIMES,
} from "./actionType";
import Axios from "axios";
import { movieService } from "../../services";

export const getMovieList = (pageNumber = 1, itemsPerPage = 12) => {
  return (dispatch) => {
    {
      //call api
      // connector({
      Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP00&soTrang=${pageNumber}&soPhanTuTrenTrang=${itemsPerPage}`,
        method: "GET",
        data: null,
      })
        .then(function thanhCong(res) {
          dispatch({
            type: GET_MOVIE_LIST,
            payload: res.data,
          });
        })
        .catch(function thatBai(err) {
          console.log(err);
        });
    }
  };
};

export const getCinemaList = () => {
  return (dispatch) => {
    {
      //call api
      // connector({
      Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
        method: "GET",
        data: null,
      })
        .then(function thanhCong(res) {
          dispatch({
            type: GET_CINEMA_LIST,
            payload: res.data,
          });
        })
        .catch(function thatBai(err) {
          console.log(err);
        });
    }
  };
};

//get info of smaller cinemas
export const getCinemaDetailList = (idCinema) => {
  //console.log(idCinema);
  return (dispatch) => {
    {
      //call api
      // connector({
      Axios({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${idCinema}`,
        method: "GET",
      })
        .then(function thanhCong(res) {
          // console.log(res.data);

          //console.log(dispatch);
          dispatch({
            type: GET_ADDRESS_CINEMA,
            payload: res.data,
          });
        })
        .catch(function thatBai(err) {
          console.log(err);
        });
    }
  };
};

export const getMovieDetail = (movieId) => {
  //console.log(idCinema);
  return (dispatch) => {
    movieService
      .getMovieDetail(movieId)
      .then((res) => {
        //console.log('movieaction',res);
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: res.data,
        });
      })
      .catch((err) => console.log("error", err));
  };
};

export const getMovieDetailSchedule = (movieId) => {
  //console.log(idCinema);
  return (dispatch) => {
    movieService
      .getMovieDetailSchedule(movieId)
      .then((res) => {
        //console.log(res);
        dispatch({
          type: GET_MOVIE_DETAIL_SCHEDULE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getAllMovie = () => {
  //console.log(idCinema);
  return (dispatch) => {
    movieService
      .fetchAllMovie()
      .then((res) => {
        // console.log(res);
        dispatch({
          type: GET_ALL_MOVIE,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const getShowTimeDetail = (movieId) => {
  return (dispatch) => {
    movieService
      .fetchMovieShowTimes(movieId)
      .then((res) => {
        // console.log(res);
        dispatch({
          type: GET_MOVIE_SHOW_TIME,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
