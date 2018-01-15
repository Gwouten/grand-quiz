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
        } else if(e.target.matches('div')){
            selectedAnswer = parseInt(e.target.children[0].value, 10);
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
        const lang = this.props.lang === 'fr';
        return (
            <div className={`question__slide ${props.question === props.number && 'question__slide--active'}`}>
                {
                    props.answered
                    ? 
                    (<div>
                        {
                            props.correct
                            ?
                            <h2 className="question__answered question__correct">{lang ? 'Bravo !' : 'Correct!'}</h2>
                            :
                            <h2 className="question__answered question__wrong">{lang ? 'Faux !' : 'Fout!'}</h2>
                        }
                        <p className="question__comment">{ReactHtmlParser(props.comment)}</p>
                        {props.number === 15 ?
                        <Link className="btn btn--next" to="/Result">{lang ? 'Résultat' : 'Resultaat'}</Link>
                        : 
                        <button className="btn btn--next" onClick={this.nextQuestion}>{lang ? 'Question suivante' : 'Volgende vraag'}</button>
                        }
                    </div>)
                    :
                    (<div className="question__unanswered">
                        <h2 className="question__content">{ReactHtmlParser(props.content)}</h2>
                        <div className="question__btn-group">
                            <div className="btn btn__container" onClick={this.setScore}>
                                <button
                                    className={
                                    `question__btn ${(props.option1.includes('img') || props.number === 8 || props.number === 10 || props.number === 11) && 'question__btn--large'}`
                                    }
                                    value="1">
                                        {ReactHtmlParser(props.option1)}
                                </button>
                            </div>
                            <div className="btn btn__container" onClick={this.setScore}>
                                <button
                                className={
                                    `question__btn ${(props.option2.includes('img') || props.number === 8 || props.number === 10 || props.number === 11) && 'question__btn--large'}`
                                    }
                                    value="2">
                                        {ReactHtmlParser(props.option2img)}
                                        {ReactHtmlParser(props.option2)}
                                </button>
                            </div>
                            <div className="btn btn__container" onClick={this.setScore}>
                                <button
                                className={
                                    `question__btn ${(props.option3.includes('img') || props.number === 8 || props.number === 10 || props.number === 11) && 'question__btn--large'}`
                                    }
                                    value="3">
                                        {ReactHtmlParser(props.option3img)}
                                        {ReactHtmlParser(props.option3)}
                                </button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

const mapStateToProps = (state, props) => ({
    correct: state.quizFr[props.number-1].correct,
    question: state.question,
    lang: state.lang
});

const mapDispatchToProps = (dispatch) => ({
    setScore: () => dispatch(setScore()),
    setAnswered: (number) => dispatch(setAnswered(number)),
    setStatus: (number) => dispatch(setStatus(number)),
    nextQuestion: () => dispatch(nextQuestion())
});

export default connect(mapStateToProps, mapDispatchToProps)(Question)