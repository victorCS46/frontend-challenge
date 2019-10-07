import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
//import Buscar from './components/search';
import Contributors from './components/ConCard';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div className="App-routing">
        <ul>
            <span>
             <Link to="/">Home</Link>
            </span>
        </ul>
        <Route exact path="/" component={App} />
        <Route path="/components/contributors" component={Contributors} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
