import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReactHtmlParser from 'react-html-parser';
import { setScore } from '../actions/score';
import { nextQuestion } from '../actions/questions';
import { setAnswered, setStatus } from '../actions/quizFr';

class Question extends React.Component{
    
    setScore = (e) => {
        let selectedAnswer = 0;
        if (e.target.matches('img')) {
            selectedAnswer = parseInt(e.target.parentNode.value, 10);
        } else {
            selectedAnswer = parseInt(e.target.value, 10);
        }
        const correctAnswer = this.props.answer;
        if (selectedAnswer === correctAnswer) {
            this.props.setScore();
            this.props.setStatus(this.props.number);
        }
        this.props.setAnswered(this.props.number);
        window.scrollTo(0, 0);
    }

    nextQuestion = () => {
        this.props.nextQuestion();
        window.scrollTo(0, 0);
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
                        <p className="question__comment">{ReactHtmlParser(props.comment)}</p>
                        {props.number === 15 ?
                        <Link className="btn" to="/Result">Résultat</Link>
                        : 
                        <button className="btn" onClick={this.nextQuestion}>Question suivante</button>
                        }
                    </div>)
                    :
                    (<div className="question__unanswered">
                        <h2 className="question__content">{ReactHtmlParser(props.content)}</h2>
                        <button
                            className={
                            `btn question__btn ${props.option1.includes('img') && 'question__btn--large'}`
                            }
                            value="1"
                            onClick={this.setScore}>
                                {ReactHtmlParser(props.option1)}
                            </button>
                        <button
                        className={
                            `btn question__btn ${props.option2.includes('img') && 'question__btn--large'}`
                            }
                            value="2"
                            onClick={this.setScore}>
                                {ReactHtmlParser(props.option2)}
                        </button>
                        <button
                        className={
                            `btn question__btn ${props.option3.includes('img') && 'question__btn--large'}`
                            }
                            value="3"
                            onClick={this.setScore}>
                                {ReactHtmlParser(props.option3)}
                        </button>
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