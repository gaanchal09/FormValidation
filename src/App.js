import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormComponent from './FormComponent';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={FormComponent} />
        
      </Switch>
    </Router>
  );
};

export default App;

