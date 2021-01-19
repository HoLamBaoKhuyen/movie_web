import { Redirect } from "react-router-dom";
import { bookingService } from "../../services";
import {
  CHOOSE_SEAT,
  GET_BOOKING_LIST,
  GET_CINEMA_INFO,
  GET_CINEMA_TIME,
  SET_DATE,
} from "./actionType";

export const getBookingList = (id) => {
  return (dispatch) => {
      //console.log(id);
    bookingService
      .fetchBooking(id)
      .then((res) => {
        dispatch({ type: GET_BOOKING_LIST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const chooseSeat = (seat) => {
  return (dispatch) => {
    dispatch({ type: CHOOSE_SEAT, payload: seat });
  };
};

export const bookTicket = (data, token) => {
  return (dispatch) => {
    //console.log( data);
    bookingService
      .bookTicket(data, token)
      .then((res) => {
        alert("Đặt vé thành công");
       // console.log(res.maLichChieu);
        getBookingList(res.maLichChieu)
        //reload về home
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
