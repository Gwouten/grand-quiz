import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import quizFrReducer from './reducers/quizFrReducer';
import scoreReducer from './reducers/scoreReducer';
import questionReducer from './reducers/questionReducer';
import languageReducer from './reducers/languageReducer';

export const history = createHistory();

const enhancers = []
const initialState = {}
const middleware = [
  thunk,
  routerMiddleware(history)
]

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  combineReducers({
    quizFr: quizFrReducer,
    score: scoreReducer,
    question: questionReducer,
    lang: languageReducer
  }),
  initialState,
  composedEnhancers
)

export default store
