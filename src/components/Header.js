import React from "react";
import { withRouter } from "react-router-dom";
import "./css/Header.css";
class Header extends React.Component {
  render() {
    return (
      <div className="headerWrapper">
        <div className="headerTitle">Attendance</div>
        <div
          className="headerItem"
          onClick={() => this.props.history.push("/")}
        >
          Home
        </div>
      </div>
    );
  }
}
export default withRouter(Header);
