import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import injectTapEventPlugin from "react-tap-event-plugin";

injectTapEventPlugin();

import TestPage from './components/test_page/index';

ReactDom.render((
  <Router history={browserHistory}>
    <Route path='/' component={TestPage} />
  </Router>
),document.querySelector('#container'));
