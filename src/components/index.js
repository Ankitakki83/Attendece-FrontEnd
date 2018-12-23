import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import LandingPageContainer from "../containers/LandingPageContainer";
import UserPageContainer from "../containers/UserPageContainer";
export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <Switch>
          <Route exact path="/" component={LandingPageContainer} />
          <Route exact path="/user/:userId" component={UserPageContainer} />
        </Switch>
      </div>
    );
  }
}
