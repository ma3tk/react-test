import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStoreWithMiddleware from "./store/ConfigureStore"
import App from "./components/App"
import Article from "./components/article/index"

const store = createStoreWithMiddleware();

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/">
                <IndexRoute component={App}/>
                <Route path="/article" component={Article}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('container')
);