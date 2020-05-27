import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import QuestionAnswer from "../question-answer/QuestionAnswer";
import QuestionResult from "../question-result/QuestionResult";
import NotFound from "../not-found/NotFound";
import Nav from "../nav/Nav";
import './Question.css'


class Question extends Component {
  render() {
    const { authedUser, users, question, authed } = this.props;

    if (!question) {
      return <NotFound />;
    }

    const questionAnswered = Object.keys(authed.answers).includes(
      question.id
    );

    return (
        <> 
          <Nav />
          <div className='question'>
            <h3 className='question-user'>{users[question.author].name} Asks:</h3>
            <img className='home-img' alt={"Avatar of " + users[question.author].name} src={users[question.author].avatarURL}/>
            <h3 className='question-h3'>Would you rather...</h3>
              {questionAnswered ? (
                <QuestionResult
                  question={question}
                  author={users[question.author]}
                  authedUser={authedUser}
                />
              ) : (
                <QuestionAnswer question={question} author={users[question.author]}/>
              )}
                {questionAnswered && (
                  <div>
                    <Link to={"/"}>
                      <button className="question-btn-return">Return to Homepage</button>
                    </Link>
                  </div>
                )}
          </div>
        </>
    );
  }
}

const mapStateToProps = ({ authedUser, users, questions }, props) => ({
  authedUser,
  users,
  question: questions[props.match.params.id],
  authed: users[authedUser]
});

export default connect(mapStateToProps)(Question);
