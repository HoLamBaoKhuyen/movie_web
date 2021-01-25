import Axios from "axios";
import { Redirect } from "react-router-dom";
import { userService } from "../../services";
import {
  FETCH_CREDENTIALS,
  GET_ACCOUNT_INFO,
  REMOVE_CREDENTIALS,
} from "./actionType";

export const login = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: FETCH_CREDENTIALS,
          payload: res.data,
        });
        localStorage.setItem("userLogin", JSON.stringify(res.data));
      })
      .catch((err) => {
        alert("Đăng nhập thất bại");
        console.log(err);
      });
  };
};

export const getAccountInfo = (user, data) => {
  return (dispatch) => {
    userService
      .fetchAccountInfo(user.accessToken, data)
      .then((res) => {
        // alert("Go here");
        dispatch({
          type: GET_ACCOUNT_INFO,
          payload: res.data,
        });
      })
      .catch((err) => {
        alert("!!!");
        console.log(err);
      });
  };
};
