import React from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { Link } from 'react-router-dom';

const Quiz = (props) => (
  <div className="wrapper">   
    <div className={`question__wrapper question${props.question}`}>
      <div className="logo__wrapper">
        <img className="quiz-logo" src="img/GrandQuizz2018_logo_fr.svg" alt="Grand Quiz 2018" />
        <img className="concerto-logo" src="img/concerto.svg" alt="Grand Quiz 2018" />
      </div>
      <div className="question__slider">
        {
          props.quizFr.map((question) => 
            (<Question
              key={question.questionNumber}
              number={question.questionNumber}
              content={question.questionContent}
              answer={question.questionAnswer}
              option1={question.option1}
              option2={question.option2}
              option3={question.option3}
              answered={question.answered}
              comment={question.comment}
            />)
          )
        }
      </div>
      <div className="score">{props.question} / 15</div>
     </div>
      <Link className="btn btn__result" to="/Result">Result</Link>
  </div>
)
const mapStateToProps = (state) => ({
  quizFr: state.quizFr,
  score: state.score,
  question: state.question
})

export default connect(mapStateToProps, null)(Quiz)
