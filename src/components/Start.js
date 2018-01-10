import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLanguage } from '../actions/language';

class Start extends React.Component {

    componentWillMount() {
        console.log(window.location.host);
        if (window.location.host === 'localhost:3000') {
            console.log('Host')
            this.props.setLanguage('fr');
        } else {
            this.props.setLanguage('nl');
        }
    }


    render(){
    return (
        <div className="wrapper start">
            <img className="concerto-logo concerto-logo--start" src="img/concerto.svg" alt="Grand Quiz 2018" />
            <img className="quiz-logo quiz-logo--start" src="img/GrandQuizz2018_logo_fr.svg" alt="Grand Quiz 2018" />
            <h1 className="question__content header__text">Êtes-vous le “communication expert“ de 2018 ?</h1>
            <p>Cette année, pour vous présenter nos vœux, nous avons eu envie de vous proposer un petit jeu, histoire de commencer cette nouvelle année sur une note amusante et éducative&hellip;</p>
            <p>Mais attention, ce Quizz n’a pas été établi au hasard&thinsp;! Il va déterminer précisément votre niveau de “communication expertise”. Les 15 questions ont été scientifiquement élaborées sur base d’algorithmes faisant appel au machine learning, au neural network et au big data. Couvrant des sujets très variés, le Grand Quizz 2018 peut donc se targuer d’un très haut niveau prédictif.</p>
            <p>Parés à relever le défi ? Concerto vous souhaite bonne chance&hellip; et quel que soit votre score, une excellente année 2018&thinsp;!</p>
            <Link className="btn" to="/Quiz">Jouer !</Link>
        </div>
    )
}
}

const mapStateToProps = (state) => ({
    language: state.lang 
})

const mapDispatchToProps = (dispatch) => ({
    setLanguage: (lang) => dispatch(setLanguage(lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Start)