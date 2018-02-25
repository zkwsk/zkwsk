import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'sanitize.css';
import './style/fonts.css'
import './style/global.css'
import './index.css';
import Main from './containers/Main';
import CaseDR from './containers/CaseDR';
import CaseTigerspring from './containers/CaseTigerspring';
import Cv from './containers/CV'
import NoMatch from './components/404/404';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  (
    <Router>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/cases/dr" component={CaseDR}/>
        <Route exact path="/cases/tigerspring" component={CaseTigerspring}/>
        <Route exact path="/cv" component={Cv}/>
        <Route component={NoMatch}/>
      </Switch>
    </Router>
  ), document.getElementById('root')
);
registerServiceWorker();
