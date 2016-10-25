import React from 'react';
import {browserHistory, Router} from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

let history = browserHistory;

ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
