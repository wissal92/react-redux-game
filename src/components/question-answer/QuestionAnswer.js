import React, { Component } from "react";
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from "../../actions/shared";
import './QuestionAnswer.css';

class QuestionAnswer extends Component {
  state = {
    option: "none",
    showAlert: false
  };

  handleChange(e) {
    this.setState({
      option: e.target.value,
      showAlert: false
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { option } = this.state;
    const { dispatch, question } = this.props;

    this.state.option === "none"
      ? this.setState({ showAlert: true })
      : dispatch(handleSaveQuestionAnswer(question.id, option));
  }

  render() {
    const { question } = this.props;

    return (
      <form
        onChange={e => this.handleChange(e)}
        onSubmit={e => this.handleSubmit(e)}
      >
        <>
          {this.state.showAlert && (
            <h3>Please select one option</h3>
          )}
          <div className='question-answer-div'>
            <input name="choice" type="radio" value="optionOne" id='choice1'/>
            <label htmlFor='choice1'>{question.optionOne.text}</label>
            <br />
            <input name="choice" type="radio" value="optionTwo" id='choice2'/>
            <label htmlFor='choice2'>{question.optionTwo.text}</label>
          </div>
        </>
        <button className='question-answer-btn'> Submit Answer </button>
      </form>
    );
  }
}

export default connect()(QuestionAnswer);