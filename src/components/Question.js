import React from 'react';
import { connect } from 'react-redux';
import { setScore } from '../actions/score';
import { nextQuestion } from '../actions/questions';
import { setAnswered, setStatus } from '../actions/quizFr';

class Question extends React.Component{
    
    setScore = (e) => {
        const selectedAnswer = parseInt(e.target.value, 10);
        const correctAnswer = this.props.answer;
        if (selectedAnswer === correctAnswer) {
            this.props.setScore();
            this.props.setStatus(this.props.number);
        }
        this.props.setAnswered(this.props.number);
    }

    nextQuestion = () => {
        this.props.nextQuestion();
    }

    render(){
        const props = this.props;
        return (
            <div className={`question__slide ${props.question === props.number && 'question__slide--active'}`}>
                {
                    props.answered
                    ? 
                    (<div>
                        {
                            props.correct
                            ?
                            <h2 className="question__answered question__correct">Bravo !</h2>
                            :
                            <h2 className="question__answered question__wrong">Faux !</h2>
                        }
                        <p className="question__comment">{props.comment}</p>
                        <button className="btn" onClick={this.nextQuestion}>Question suivante</button>
                    </div>)
                    :
                    (<div className="question__unanswered">
                        <h2 className="question__content">{props.content}</h2>
                        <button className="btn question__btn" value="1" onClick={this.setScore}>{props.option1}</button>
                        <button className="btn question__btn" value="2" onClick={this.setScore}>{props.option2}</button>
                        <button className="btn question__btn" value="3" onClick={this.setScore}>{props.option3}</button>
                    </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    correct: state.quizFr[props.number-1].correct,
    question: state.question
});

const mapDispatchToProps = (dispatch) => ({
    setScore: () => dispatch(setScore()),
    setAnswered: (number) => dispatch(setAnswered(number)),
    setStatus: (number) => dispatch(setStatus(number)),
    nextQuestion: () => dispatch(nextQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Question)