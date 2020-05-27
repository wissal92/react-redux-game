import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { setAuthedUser } from "../../actions/authedUser";
import './Nav.css';

class Nav extends Component {
    logout = () => {
        this.props.dispatch(setAuthedUser(null));
        // When user is logged out, return to the signin page
        this.props.history.push("/");
    };

    render(){
        console.log(this.props)
        const { authedUser, users} = this.props;

        return(
            <div className='nav'>
                <ul className='nav-ul-2'>
                    <NavLink exact activeClassName='nav-active' className='nav-link' to='/'>Home</NavLink>
                    <NavLink exact activeClassName='nav-active' className='nav-link' to='/add'>New Question</NavLink>
                    <NavLink exact activeClassName='nav-active' className='nav-link' to='/leaderboard'>Leader Board</NavLink>
                </ul>
                <ul className='nav-ul-1'>
                    <li className='nav-li-img'>
                        <p>Hello {users[authedUser].name}</p>
                        <img className='nav-img' src={users[authedUser].avatarURL} alt='user' />
                    </li>
                    <li className='nav-li' onClick={this.logout}>Logout</li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser, users}) =>{
    return {
      authedUser: authedUser,
      users: users
    };
  }

export default withRouter(connect(mapStateToProps)(Nav));