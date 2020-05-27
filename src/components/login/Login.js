import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";
import logo from "../../assets/react-redux.jpg";
import './Login.css';

class Login extends Component {
  state = {
    authedUser: ""
  };

  changeUser = event => {
    this.setState({ authedUser: event.target.value });
  };

  authorizeUser = () => {
    this.props.dispatch(setAuthedUser(this.state.authedUser));

    let prevRouterPath =
      this.props.location.state !== undefined
        ? this.props.location.state.previous.pathname
        : null;
    prevRouterPath
      ? this.props.history.push(prevRouterPath)
      : this.props.history.push("/");
  };

  render() {
    const { users } = this.props;
    return (
        <div className="login">
              <h2 className='login-header'>Welcome to would you rather app!</h2>
              <p className='login-p'>Please Login to continue</p>
              <div>
                <img className="login-img" alt="Would You Rather" src={logo}/>
              </div>
              <form className="login-form">
                <div>
                  <div className="login-div"> Login </div>
                    <select className="login-select" value={this.state.authedUser} onChange={this.changeUser}>
                      <option default disabled defaultValue value="">Select User</option>
                      {users.map(user => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  <button className='login-button' onClick={this.authorizeUser}> Login </button>
                </div>
              </form>
        </div>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    users: Object.values(users),
    authedUser: authedUser
  };
}

export default withRouter(connect(mapStateToProps)(Login));