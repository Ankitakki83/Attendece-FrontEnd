import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import { getUsers, addUser, addUserAttendance } from "../action";
const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    addUser: userObj => {
      dispatch(addUser(userObj));
    },
    addUserAttendance: userObj => {
      return dispatch(addUserAttendance(userObj));
    }
  };
};
const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const LandingPageContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LandingPage)
);
export default LandingPageContainer;
