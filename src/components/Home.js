import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from './Question';

const Home = (props) => (
  <div>
    <img src="" alt="Logo Concerto" />
    <img src="" alt="Logo Concerto" />
    <p>Score: {props.score}</p>
    {props.quizFr.map((question) => <Question
      key={question.questionNumber}
      number={question.questionNumber}
      content={question.questionContent}
      answer={question.questionAnswer}
      option1={question.option1}
      option2={question.option2}
      option3={question.option3}
      answered={question.answered}
      comment={question.comment}
     />)}
  </div>
)
const mapStateToProps = (state) => ({
  quizFr: state.quizFr,
  score: state.score
})

export default connect(mapStateToProps, null)(Home)
