import React from 'react';
import {connect} from 'react-redux';

class Header extends React.Component{
    render(){
        return (
            <div className="logo__wrapper">
                <img className="quiz-logo" src={this.props.lang ? 'img/GrandQuizz2018_logo_fr.svg' : 'img/GrandQuizz2018_logo_nl.svg'} alt="Grand Quiz 2018" />
                <a href="http://www.concerto.be/"><img className="concerto-logo" src="img/concerto.svg" alt="Grand Quiz 2018" /></a>
            </div>
        );
    }
}

const mapStateToProps = (state) =>  ({
    lang: state.lang
});

export default connect(mapStateToProps, null)(Header)