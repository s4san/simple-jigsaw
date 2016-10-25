import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Invite from './components/Invite';

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/play" component={Home} />
    <Route path="/play/:id" component={Home} />
    <Route path="/invite" component={Invite} />
    <Route path="/about" component={About} />
    <Route path="*" component={Home} />
  </Route>
);
