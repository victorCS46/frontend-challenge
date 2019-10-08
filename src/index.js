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
<<<<<<< HEAD
      <div>
        <ul className="App-routing">
            <span>
             <Link className="vcs-route" to="/">Home</Link>
=======
      <div className="App-routing">
        <ul>
            <span>
             <Link to="/">Home</Link>
>>>>>>> 6cf13f836a230ab26dc5b9c27969f7bc1c75524e
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
