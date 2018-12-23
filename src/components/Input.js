import React from "react";
import "./css/Input.css";
export default class Input extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        onChange={e => this.props.onChange(e.target.value)}
        value={this.props.value}
        className={"inputBase"}
      />
    );
  }
}
Input.defaultProps = {
  type: "text"
};
