import React from 'react';
import { Route } from 'react-router-dom';
import Start from './Start';
import Quiz from './Quiz';
import Result from './Result';

const App = () => (
  <div>
    <Route exact path="/" component={Start} />
    <Route path="/Quiz" component={Quiz} />
    <Route path="/Result" component={Result} />
  </div>
)

export default App
