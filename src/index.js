import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Hash , Route,Switch} from 'react-router-dom';
import Form1 from './Form_Handle_One';

ReactDOM.render(
  <Hash>
    <Switch>
        <Route exact path="/" component={Form1} />
        <Route exact path="/Form-Handle-One" component={Form1} />


    </Switch>
  </Hash>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
