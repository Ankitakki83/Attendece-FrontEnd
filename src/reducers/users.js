import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  GET_USER_ATTENDANCE_REQUEST,
  GET_USER_ATTENDANCE_SUCCESS,
  GET_USER_ATTENDANCE_FAILURE
} from "../action/config";
import cloneDeep from "lodash.clonedeep";
const users = (
  state = {
    users: [],
    userAttendance: [],
    status: "",
    loading: false,
    error: "",
    loadingForAddUser: false
  },
  action
) => {
  let currentUsers;
  switch (action.type) {
    case GET_USERS_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case GET_USERS_SUCCESS:
      return Object.assign({}, state, {
        users: action.users,
        loading: false
      });
    case GET_USERS_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    case ADD_USER_REQUEST:
      return Object.assign({}, state, {
        loadingForAddUser: true
      });
    case ADD_USER_SUCCESS:
      currentUsers = cloneDeep(state.users);
      currentUsers.push(action.user);
      return Object.assign({}, state, {
        users: currentUsers,
        loadingForAddUser: false
      });
    case ADD_USER_FAILURE:
      return Object.assign({}, state, {
        error: action.error
      });
    case GET_USER_ATTENDANCE_REQUEST:
      return Object.assign({}, state, {
        loading: true
      });
    case GET_USER_ATTENDANCE_SUCCESS:
      return Object.assign({}, state, {
        userAttendance: action.userAttendance,
        loading: false
      });
    case GET_USER_ATTENDANCE_FAILURE:
      return Object.assign({}, state, {
        error: action.error,
        loading: false
      });
    default:
      return state;
  }
};

export default users;
