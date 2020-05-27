import React from "react";
import { connect } from "react-redux";
import Nav from "../nav/Nav";
import './LeaderBoard.css';


const LeaderBoard = props => {
  let { users } = props;

  return (
    <>  
        <Nav />
        <div>
          <h1 className='leaderBoard-h1'>Leaderboard</h1>
            {users.map(user => (
              <div key={user.id} className='leaderBoard'>
                <div className='leaderBoard-avatar'>
                  <img src={user.avatarURL} alt='user' className='leaderBoard-img'/>
                </div>
                <div className='leaderBoard-body'>
                  <h1>{user.name}</h1>
                  <div className='leaderBoard-div'>
                    <p>Answerd Questions:</p> <span className='leaderBoard-span'>{Object.keys(user.answers).length}</span>
                  </div>
                  <div className='leaderBoard-div'>
                    <p>Created Questions:</p> <span className='leaderBoard-span-2'>{user.questions.length}</span>
                  </div>   
              </div>
              <div className='leaderBoard-score'><p className='leaderBoard-score-p'>Score</p><p className='leaderBoard-score-num'>{user.score}</p></div>
            </div>
            ))}
        </div>
    </>
  );
};

function mapStateToProps({ users, authedUser }) {
  // Make a new user object so that users doesn't get overwritten.
  let userObj = Object.assign({}, users);
  Object.values(users).map(
    user =>
      (userObj[user.id]["score"] =
        Object.keys(user.answers).length + user.questions.length)
  );
  return {
    // Create an array of users, sorted by score
    users: Object.values(userObj).sort((a, b) => (b.score - a.score)),
    authedUser
  };
}

export default connect(mapStateToProps)(LeaderBoard);
