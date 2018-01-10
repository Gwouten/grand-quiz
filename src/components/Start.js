import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLanguage } from '../actions/language';

class Start extends React.Component {

    componentWillMount() {
        if (window.location.host === 'concours.concerto.space') {
            this.props.setLanguage('fr');
        } else {
            this.props.setLanguage('nl');
        }
    }


    render(){
    const introFr = (
        <div className="wrapper start">
            <img className="concerto-logo concerto-logo--start" src="img/concerto.svg" alt="Grand Quiz 2018" />
            <img className="quiz-logo quiz-logo--start" src="img/GrandQuizz2018_logo_fr.svg" alt="Grand Quiz 2018" />
            <h1 className="question__content header__text">Êtes-vous le “communication expert“ de 2018 ?</h1>
            <p>Cette année, pour vous présenter nos vœux, nous avons eu envie de vous proposer un petit jeu, histoire de commencer cette nouvelle année sur une note amusante et éducative&hellip;</p>
            <p>Mais attention, ce Quizz n’a pas été établi au hasard&thinsp;! Il va déterminer précisément votre niveau de “communication expertise”. Les 15 questions ont été scientifiquement élaborées sur base d’algorithmes faisant appel au machine learning, au neural network et au big data. Couvrant des sujets très variés, le Grand Quizz 2018 peut donc se targuer d’un très haut niveau prédictif.</p>
            <p>Parés à relever le défi ? Concerto vous souhaite bonne chance&hellip; et quel que soit votre score, une excellente année 2018&thinsp;!</p>
            <Link className="btn" to="/Quiz">Jouer !</Link>
        </div>
    );

    const introNl = (
        <div className="wrapper start">
        <img className="concerto-logo concerto-logo--start" src="img/concerto.svg" alt="Grote Quiz 2018" />
        <img className="quiz-logo quiz-logo--start" src="img/GrandQuizz2018_logo_nl.svg" alt="Grote Quiz 2018" />
        <h1 className="question__content header__text">Bent u de ‘communicatiespecialist’ van 2018?</h1>
        <p>Om u onze wensen over te maken, bieden wij u dit jaar graag een spelletje aan, kwestie van het nieuwe jaar op een leuke en leerrijke manier te starten&hellip;</p>
        <p>Maar opgelet, deze quiz werd niet zomaar opgesteld! Hij zal precies het niveau kunnen bepalen van uw ‘communicatie-expertise’. De 15 vragen werden wetenschappelijk uitgewerkt op basis van algoritmen waarbij een beroep wordt gedaan op machine learning, neural network en big data. De grote quiz 2018 gaat over heel uiteenlopende onderwerpen, en heeft dus een heel hoge voorspellende waarde.</p>
        <p>Klaar om de uitdaging aan te gaan? Concerto wenst u veel geluk… en welke uw score ook moge zijn, een fantastisch 2018 toegewenst!</p>
        <Link className="btn" to="/Quiz">Speel!</Link>
    </div>
    );

    return (
        <div>
            {this.props.language === 'fr' ? introFr : introNl}
        </div>
    );
}
}

const mapStateToProps = (state) => ({
    language: state.lang 
})

const mapDispatchToProps = (dispatch) => ({
    setLanguage: (lang) => dispatch(setLanguage(lang))
})

export default connect(mapStateToProps, mapDispatchToProps)(Start)