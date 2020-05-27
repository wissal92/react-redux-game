import React, { Component } from "react";
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Home from "./home/Home";
import Leaderboard from "./leader-board/LeaderBoard";
import Question from "./question/Question";
import QuestionNew from "./question-new/QuestionNew";
import Login from "./login/Login";
import NotFound from "./not-found/NotFound";

let loggedIn = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => ( <Component {...props} /> )}
  />
);

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    loggedIn = this.props.loggedIn;
    return (
      <Router>
        <>
          {!this.props.loading && (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/add" component={QuestionNew} />
              <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
              <PrivateRoute exact path="/question/:id" component={Question} /> 
              <Route path="*" render={(routeProps => <NotFound {...routeProps}/>)} />
            </Switch>
          )}
        </>
      </Router>
    );
  }
}

const mapStateToProps = ({ questions, authedUser }) => ({
  loading: questions === null,
  loggedIn: authedUser !== null
});

export default connect(mapStateToProps)(App);
