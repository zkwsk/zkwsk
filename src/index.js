import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Main from './containers/Main';
import LogoPage from './components/LogoPage';
import NoMatch from './components/404';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/logo" component={LogoPage}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  ), document.getElementById('root')
);
registerServiceWorker();
