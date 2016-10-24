import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import Home from './components/Home';

// React-router will handle routing by itself. So you are, basically, not switching pages, it just looks like so

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
  </Route>
);
