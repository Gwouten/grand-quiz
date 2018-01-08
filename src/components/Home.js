import React from 'react';
// import { push } from 'react-router-redux';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from './Question';

const Home = (props) => (
  <div>
    <img src="" alt="Logo Concerto" />
    <img src="" alt="Logo Concerto" />
    {props.quizFr.map((question) => <Question props={question} />)}
  </div>
)
const mapStateToProps = (state) => ({
  quizFr: state.quizFr
})

export default connect(mapStateToProps, null)(Home)
