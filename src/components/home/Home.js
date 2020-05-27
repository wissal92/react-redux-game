import React, { Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import { connect } from "react-redux";
import Nav from "../nav/Nav";
import './Home.css';

const RESULTS = "results";
const POLL = "poll";
const UNANSWERED = "unanswered";
const ANSWERED = "answered";


class Home extends Component {
  state = {
    questionList: UNANSWERED
  };

  changeQuestionList = e => {
    if (!e.target.textContent.toLowerCase().includes(UNANSWERED)) {
      this.setState({ questionList: ANSWERED });
    } else {
      this.setState({ questionList: UNANSWERED });
    }
  };

  render() {
    const { questions, users, authedUser, answered, unanswered } = this.props;

    // Redirect to login Page if not logged in
    if (!authedUser) {
      return <Redirect to="/login" />;
    }

    return (
          <>
            <Nav />
            <div className='home'>
              <h1 className='home-h1'>Would u Rather?</h1>
              <div className='home-btn-div'>
              <button className="home-btn" onClick={this.changeQuestionList}> Unanswered Questions </button>
              <button className="home-btn second" onClick={this.changeQuestionList}> Answered Questions </button>
              </div>
            {(this.state.questionList === UNANSWERED ? unanswered: answered).map(answer => (
                 <div key={questions[answer].id} className='home-cart'>
                    <h3 className='home-user'> {users[questions[answer].author].name} asks:</h3>
                    <img alt="profile-avatar" className="home-img" src={users[questions[answer].author].avatarURL}/>
                    <h3 className="home-h3">Would you rather</h3>

                    <p className="home-p">...{questions[answer].optionOne.text}...</p>
                      <div>
                        <Link
                          to={{pathname: `/question/${questions[answer].id}`, 
                            state: {type: this.state.questionList === UNANSWERED ? POLL : RESULTS}
                          }}
                        >
                          <button className='home-poll'> View Poll </button>
                        </Link>
                      </div>
                  </div>
            ))}
        </div>
      </>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  let answered, unanswered;
  const sort = (a, b) => {
    return (
      new Date(questions[b].timestamp).getTime() -
      new Date(questions[a].timestamp).getTime()
    );
  };
  if (authedUser) {
    answered = Object.keys(users[authedUser].answers).sort(sort);
    unanswered = Object.keys(Object.assign({}, questions)).sort(sort);
    answered.map(
      answer =>
        (unanswered = unanswered.filter(unanswered => answer !== unanswered))
    );
  }
  return {
    authedUser,
    users,
    questions,
    answered,
    unanswered
  };
}
export default withRouter(connect(mapStateToProps)(Home));