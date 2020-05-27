import React, { Component } from "react";
import { connect } from "react-redux";
import './QuestionResult.css';

class QuestionResult extends Component {
  render() {
    const { question } = this.props;

    const { optionOne, optionTwo } = question;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
  
    return ( 
      <div className="questionResult">
          <div className="questionResult-vote-1">
              <p className='questionResult-p'>
                {optionOne.votes.length} out of {totalVotes} votes
              </p>
          </div>
          <div className='questionResult-fill'>
             <span className='questionResult-span'>
                  {((optionOne.votes.length / totalVotes) * 100).toFixed(0)}%
              </span>
              <div className='questionResult-color' style={{width: `${((optionOne.votes.length / totalVotes) * 100).toFixed(0)}%`, color:'red'}}/>
          </div>
          <h4 className='questionResult-h4'>{optionOne.text}</h4>
          <div className="questionResult-vote-2">
              <p className='questionResult-p'>
                {optionTwo.votes.length} out of {totalVotes} votes
              </p>
          </div>
          <div className='questionResult-fill'>
             <span className='questionResult-span'>
                  {((optionTwo.votes.length / totalVotes) * 100).toFixed(0)}%
              </span>
              <div className='questionResult-color' style={{width: `${((optionTwo.votes.length / totalVotes) * 100).toFixed(0)}%`, color:'red'}}/>
          </div>
          <h4 className='questionResult-h4'>{optionTwo.text}</h4>
      </div>
    );
  }
}

export default connect()(QuestionResult);
