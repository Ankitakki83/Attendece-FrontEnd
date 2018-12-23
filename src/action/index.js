import {
  REQUESTING,
  SUCCESS,
  FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_ATTENDANCE_REQUEST,
  ADD_USER_ATTENDANCE_SUCCESS,
  ADD_USER_ATTENDANCE_FAILURE,
  GET_USER_ATTENDANCE_REQUEST,
  GET_USER_ATTENDANCE_SUCCESS,
  GET_USER_ATTENDANCE_FAILURE
} from "./config.js";

function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST,
    status: REQUESTING
  };
}

function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    status: SUCCESS,
    users: users
  };
}

function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    status: FAILURE,
    error
  };
}

export function getUsers() {
  return async (dispatch, getState, api) => {
    dispatch(getUsersRequest());
    try {
      const result = await api.get("users");
      const resultJson = await result.json();
      dispatch(getUsersSuccess(resultJson.results));
    } catch (e) {
      dispatch(getUsersFailure(e.message));
    }
  };
}

function addUserRequest() {
  return {
    type: ADD_USER_REQUEST,
    status: REQUESTING
  };
}

function addUserSuccess(user) {
  return {
    type: ADD_USER_SUCCESS,
    status: SUCCESS,
    user: user
  };
}

function addUserFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    status: FAILURE,
    error
  };
}

export function addUser(userObj) {
  return async (dispatch, getState, api) => {
    dispatch(addUserRequest());
    try {
      const result = await api.post("user", userObj);
      const resultJson = await result.json();
      dispatch(addUserSuccess(resultJson.results));
    } catch (e) {
      dispatch(addUserFailure(e.message));
    }
  };
}

function addUserAttendanceRequest() {
  return {
    type: ADD_USER_ATTENDANCE_REQUEST,
    status: REQUESTING
  };
}

function addUserAttendanceSuccess(user) {
  return {
    type: ADD_USER_ATTENDANCE_SUCCESS,
    status: SUCCESS,
    user: user
  };
}

function addUserAttendanceFailure(error) {
  return {
    type: ADD_USER_ATTENDANCE_FAILURE,
    status: FAILURE,
    error
  };
}

export function addUserAttendance(userObj) {
  return async (dispatch, getState, api) => {
    dispatch(addUserAttendanceRequest());
    try {
      const result = await api.post("attendance", userObj);
      const resultJson = await result.json();
      console.log("resultJson", resultJson);
      if (resultJson.results.errorMsg === "ATTEN100") {
        throw "Already Attendece Available";
      }
      return dispatch(addUserAttendanceSuccess(resultJson.results));
    } catch (e) {
      return dispatch(addUserAttendanceFailure(e.message));
    }
  };
}
function getUserAttendanceRequest() {
  return {
    type: GET_USER_ATTENDANCE_REQUEST,
    status: REQUESTING
  };
}

function getUserAttendanceSuccess(userAttendance) {
  return {
    type: GET_USER_ATTENDANCE_SUCCESS,
    status: SUCCESS,
    userAttendance: userAttendance
  };
}

function getUserAttendanceFailure(error) {
  return {
    type: GET_USER_ATTENDANCE_FAILURE,
    status: FAILURE,
    error
  };
}

export function getUserAttendance(userId) {
  return async (dispatch, getState, api) => {
    dispatch(getUserAttendanceRequest());
    try {
      const result = await api.get(`attendance/${userId}`);
      const resultJson = await result.json();

      return dispatch(getUserAttendanceSuccess(resultJson.results));
    } catch (e) {
      return dispatch(getUserAttendanceFailure(e.message));
    }
  };
}
