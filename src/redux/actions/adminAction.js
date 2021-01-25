import { adminService } from "../../services";
import { CHANGE_MOVIE, CHANGE_USER, FETCH_ACCOUNTS } from "./actionType";

export const getAccounts = () => {
  return (dispatch) => {
    adminService
      .fetchAccounts()
      .then((res) => {
        // console.log(res.data);
        dispatch({
          type: FETCH_ACCOUNTS,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (data, token) => {
  return (dispatch) => {
    adminService
      .addUser(data, token)
      .then((res) => {
        alert("Thêm người dùng thành công");
        console.log(res.data);
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err.response.data);
        console.log(err.response);
      });
  };
};

export const deleteUser = (idUser, token) => {
  return (dispatch) => {
    adminService
      .deleteUser(idUser, token)
      .then((res) => {
        alert("Xoá người dùng thành công");
        console.log(res.data);
        window.location.reload(false);
        // dispatch({
        //   type: FETCH_ACCOUNTS,
        //   payload: res.data,
        // });
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  };
};

export const editUser = (data, token) => {
  return (dispatch) => {
    adminService
      .editUser(data, token)
      .then((res) => {
        alert("Chỉnh sửa người dùng thành công");
        window.location.reload(false);
      })
      .catch((err) => alert(err.response.data));
  };
};

//for edit
export const chooseUser = (user) => {
  return (dispatch) => {
    //console.log(user);
    dispatch({
      type: CHANGE_USER,
      payload: user,
    });
  };
};

//-----movie management
export const deleteMovie = (idMovie, token) => {
  return (dispatch) => {
    console.log(idMovie);
    adminService
      .deleteMovie(idMovie, token)
      .then((res) => {
        alert("Xoá phim thành công");
        window.location.reload(false);
        // dispatch({
        //   type: FETCH_ACCOUNTS,
        //   payload: res.data,
        // });
      })
      .catch((err) => {
        console.log(err.response);
        alert(err.response.data);
      });
  };
};

export const chooseMovie = (movie) => {
  return (dispatch) => {
    console.log(movie);
    dispatch({
      type: CHANGE_MOVIE,
      payload: movie,
    });
  };
};

export const addMovie = (data, token) => {
  return (dispatch) => {
    adminService
      .addMovie(data, token)
      .then((res) => {
        alert("Thêm phim thành công");
        console.log(res.data);
        //props.history.replace('/admin')
        window.location.reload(false);
        // dispatch({
        //   type: FETCH_ACCOUNTS,
        //   payload: res.data,
        // });
      })
      .catch((err) => {
        //alert(err.response.data);
        console.log(err.response);
      });
  };
};

export const editMovie = (data, token) => {
  return (dispatch) => {
    adminService
      .editMovie(data, token)
      .then((res) => {
        alert("Chỉnh sửa phim thành công");
        window.location.reload(false);
        //console.log(res.data);
        // dispatch({
        //   type: FETCH_ACCOUNTS,
        //   payload: res.data,
        // });
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data);
      });
  };
};
