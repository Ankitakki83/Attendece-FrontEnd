import React from "react";
import "./css/UserPage.css";
export default class UserPage extends React.Component {
  componentDidMount() {
    this.props.getUserAttendance(this.props.match.params.userId);
  }
  render() {
    return (
      <div className="userPageBase">
        {this.props.userAttendance && this.props.userAttendance.length > 0 ? (
          <div>
            <div className="ItemHeader">
              <div className="itemId">#</div>

              <div className="date">date</div>
              <div className="type">Type</div>
            </div>
            {this.props.userAttendance.map((userAt, idx) => {
              return (
                <div className="Item" key={idx}>
                  <div className="itemId">{idx + 1}</div>
                  <div className="date">{userAt.date}</div>
                  <div className="type">{userAt.attendanceType}</div>
                </div>
              );
            })}
          </div>
        ) : (
          " No Data"
        )}
      </div>
    );
  }
}
