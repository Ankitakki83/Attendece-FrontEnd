import React from "react";
import "./css/Button.css";
export default class Button extends React.Component {
  render() {
    return (
      <div className={"buttonBase"} onClick={this.props.onClick}>
        {this.props.label}
      </div>
    );
  }
}
Button.defaultProps = {
  label: "Submit"
};
