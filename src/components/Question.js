import React from 'react';
import { connect } from 'react-redux';
import { setScore } from '../actions/score';
import { setAnswered } from '../actions/quizFr';

class Question extends React.Component{
    
    setScore = (e) => {
        const selectedAnswer = e.target.value;
        const correctAnswer = this.props.answer;
        if (selectedAnswer == correctAnswer) {
            this.props.setScore();
        }
        this.props.setAnswered(this.props.number);
    }

    render(){
        const props = this.props;
        return (
            <div>
                {
                    props.answered
                    ? 
                    (<div>
                        <p>{props.comment}</p>
                    </div>)
                    :
                    (<div>
                        <h2>{props.content}</h2>
                        <button value="1" onClick={this.setScore}>{props.option1}</button>
                        <button value="2" onClick={this.setScore}>{props.option2}</button>
                        <button value="3" onClick={this.setScore}>{props.option3}</button>
                    </div>)
                }
                
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setScore: () => dispatch(setScore()),
    setAnswered: (number) => dispatch(setAnswered(number))
});

export default connect(null, mapDispatchToProps)(Question)