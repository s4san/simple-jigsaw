import React from 'react';
import {browserHistory, Router} from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
// This one is pure service module. It injects our markup into the page, shouldn't be changed

let history = browserHistory;

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
