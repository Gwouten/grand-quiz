import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => (
    <div>
        <img className="quiz-logo" src="img/GrandQuizz2018_logo_fr.svg" alt="Grand Quiz 2018" />
        <h1 className="">Êtes-vous le “communication expert“ de 2018 ?</h1>
        <p>Cette année, pour vous présenter nos vœux, nous avons eu envie de vous proposer un petit jeu, histoire de commencer cette nouvelle année sur une note amusante et éducative…</p>
        <p>Mais attention, ce Quizz n’a pas été établi au hasard ! 
Il va déterminer précisément votre niveau de “communication expertise”.  
Les 15 questions ont été scientifiquement élaborées sur base d’algorithmes faisant appel au 
machine learning, au neural network et au big data. Couvrant des sujets très variés, le Grand 
Quizz 2018 peut donc se targuer d’un très haut niveau prédictif.</p>
        <p>Parés à relever le défi ? Concerto vous souhaite bonne chance... 
 et quel que soit votre score, une excellente année 2018 !</p>
        <Link to="/Quiz">Jouer !</Link>
    </div>
);

export default Start