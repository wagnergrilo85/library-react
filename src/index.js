import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/style.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

import Book from './screens/book/Book';
import Author from './screens/Author';
import Dashoboard from './screens/Dashoboard';
import Category from './screens/Category';

ReactDOM.render(
    (
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={Dashoboard}/>
                    <Route path="/book" component={Book}/>
                    <Route path="/author" component={Author}/>
                    <Route path="/category" component={Category}/>
                </Switch>
            </App>
        </Router>
    ),
    document.getElementById('root')
);

registerServiceWorker();
