import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import {Router, Route, IndexRoute} from 'react-router';
import { browserHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';

import Book from './components/pages/Book';
import Author from './components/pages/Author';
import Dashoboard from './components/pages/Dashoboard';
import Category from './components/pages/Category';

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashoboard} />
                <Route path="/book" component={Book} />
                <Route path="/author" component={Author} />
                <Route path="/category" component={Category} />
            </Route>
        </Router>
    ),
    document.getElementById('root')
);

registerServiceWorker();
