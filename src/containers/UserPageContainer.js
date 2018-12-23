import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import UserPage from "../components/UserPage";
import { getUserAttendance } from "../action";

const mapDispatchToProps = dispatch => {
  return {
    getUserAttendance: userId => {
      dispatch(getUserAttendance(userId));
    }
  };
};
const mapStateToProps = state => {
  return {
    userAttendance: state.users.userAttendance
  };
};

const UserPageContainer = withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(UserPage)
);
export default UserPageContainer;
