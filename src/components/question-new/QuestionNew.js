import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { handleAddQuestion } from "../../actions/shared";
import Nav from '../nav/Nav';
import './QuestionNew.css';


class QuestionNew extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    redirect: false
  };

  handleSubmit = e => {
    e.preventDefault();

    const { optionOneText, optionTwoText } = this.state;
    const { addQuestion } = this.props;

    addQuestion(optionOneText, optionTwoText);

    this.setState({ redirect: true });
  };

  render() {
    const { optionOneText, optionTwoText, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/" />;
    }

    return (
            <>
             <Nav />
             <div className="new">
                <h2 className='new-h2'>Create a new Question</h2>
              <div>
                <p>Complete the question</p>
                <h3>Would you rather...</h3>
                <form onSubmit={this.handleSubmit}>
                    <input className='new-input' name="example-text-input" placeholder="Option one..." onChange={e =>this.setState({ optionOneText: e.target.value })}/>
                    <h4> or </h4>
                    <input className='new-input s' name="example-text-input" placeholder="Option two..." onChange={e =>this.setState({ optionTwoText: e.target.value })}/>
                  <button className='new-btn' disabled={optionOneText === "" || optionTwoText === ""}>Ask Question</button>
                </form>
              </div>
            </div>
          </>
    );
  }
}

const mapStateToProps = ({ authedUser, users }) => ({
  authedUserName: users[authedUser].name,
  avatarURL: users[authedUser].avatarURL
});
const mapDispatchToProps = dispatch => ({
  addQuestion: (one, two) => dispatch(handleAddQuestion(one, two))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionNew);