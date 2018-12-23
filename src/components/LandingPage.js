import React from "react";
import "./css/LandingPage.css";
import Button from "./Button";
import Input from "./Input";
import { SUCCESS } from "../action/config";
export default class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      errorMsg: "",
      attendanceMsg: ""
    };
  }
  componentDidMount() {
    if (!this.props.users || !this.props.users.length) {
      this.props.getUsers();
    }
  }
  onAddUser = () => {
    const findUser = this.props.users.find(user => {
      return user.email === this.state.email;
    });
    if (findUser) {
      this.setState({ errorMsg: "User Already registered" });
      return;
    }
    const reqObj = Object.assign(
      {},
      {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age
      }
    );
    this.props.addUser(reqObj);
    this.setState({ name: "", email: "", age: "", errorMsg: "" });
  };
  onAddPresent = async (e, userId) => {
    const date = e.target.value;
    this.setState({ presentDate: date });
    if (!date) {
      return;
    }
    const userObj = Object.assign(
      {},
      {
        date,
        userId,
        attendanceType: "PRESENT"
      }
    );
    const attendanceResponse = await this.props.addUserAttendance(userObj);

    if (attendanceResponse && attendanceResponse.status === SUCCESS) {
      this.setState({ attendanceMsg: "Add Successfully", presentDate: "" });
    } else {
      this.setState({
        attendanceMsg: "Error in adding Attendance",
        presentDate: ""
      });
    }
    this.resetError();
  };
  onAddAbsent = async (e, userId) => {
    const date = e.target.value;
    this.setState({ absentDate: date });
    if (!date) {
      return;
    }
    const userObj = Object.assign(
      {},
      {
        date,
        userId,
        attendanceType: "ABSENT"
      }
    );
    const attendanceResponse = await this.props.addUserAttendance(userObj);

    if (attendanceResponse && attendanceResponse.status === SUCCESS) {
      this.setState({ attendanceMsg: "Add Successfully", absentDate: "" });
    } else {
      this.setState({
        attendanceMsg: "Error in adding Attendance",
        absentDate: ""
      });
    }
    this.resetError();
  };
  onNavigateUser = userId => {
    this.props.history.push(`/user/${userId}`);
  };
  resetError = () => {
    setTimeout(() => {
      this.setState({ attendanceMsg: "" });
    }, 2000);
  };
  render() {
    return (
      <div className="landingBase">
        <div className="landingAdd">
          {this.state.errorMsg && (
            <div className="deduplicateMsg">{this.state.errorMsg}</div>
          )}
          <div className="landingAddRow">
            <div className="landingAddLabel">Name</div>
            <div className="landingAddValue">
              <Input
                value={this.state.name}
                onChange={name => this.setState({ name })}
              />
            </div>
          </div>
          <div className="landingAddRow">
            <div className="landingAddLabel">Email</div>
            <div className="landingAddValue">
              <Input
                value={this.state.email}
                onChange={email => this.setState({ email })}
              />
            </div>
          </div>
          <div className="landingAddRow">
            <div className="landingAddLabel">Age</div>
            <div className="landingAddValue">
              <Input
                type={"number"}
                value={this.state.age}
                onChange={age => this.setState({ age })}
              />
            </div>
          </div>
          <div className={"ButtonWrapper"}>
            <Button onClick={() => this.onAddUser()} />
          </div>
        </div>
        <div className="landingList">
          {this.state.attendanceMsg ? (
            this.state.attendanceMsg === "Add Successfully" ? (
              <div className="attendanceMsg">{this.state.attendanceMsg}</div>
            ) : (
              <div className="attendanceMsg-alreadyPresent">
                {this.state.attendanceMsg}
              </div>
            )
          ) : (
            <div>&nbsp;</div>
          )}
          {this.props.users && this.props.users.length > 0 ? (
            <div className={"listWrapper"}>
              <div className="userItemHeader">
                <div className={"userIdHeader"}>#</div>
                <div className={"userNameHeader"}>Name</div>
                <div className="userEmailHeader">Email</div>
                <div className={"userAddPresentHeader"}>Add Preset</div>
                <div className="userAbsentHeader">Add Absent</div>
              </div>
              {this.props.users.map((user, idx) => {
                return (
                  <div
                    className="userItem"
                    key={idx}
                    onClick={() => this.onNavigateUser(user.userId)}
                  >
                    <div className={"userId"}>{idx + 1}</div>
                    <div className={"userName"}>{user.name}</div>
                    <div className="userEmail">{user.email}</div>
                    <div
                      className={"userAddPresent"}
                      onClick={e => e.stopPropagation()}
                    >
                      <input
                        type="date"
                        onChange={e => this.onAddPresent(e, user.userId)}
                        value={this.state.presentDate}
                      />
                    </div>
                    <div
                      className="userAbsent"
                      onClick={e => e.stopPropagation()}
                    >
                      <input
                        type="date"
                        onChange={e => this.onAddAbsent(e, user.userId)}
                        value={this.state.absentDate}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            "No users Yet"
          )}
        </div>
      </div>
    );
  }
}
