import { GET_ALL_CINEMA_SHOW_TIME, RESET_STATE } from "../actions/actionType";

let initialState = [];

const showTimes = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_CINEMA_SHOW_TIME: {
      state = action.payload;
      return [...state];
    }
    case RESET_STATE: {
      state = initialState;
      return [...state];
    }
    default:
      return state;
  }
};

export default showTimes;
