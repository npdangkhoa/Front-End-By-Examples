
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'


import * as serviceWorker from './serviceWorker';

// define the header of website
const Herro = () => {
    return (
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
        </div>
    );
}

const Turn = () => {
    return (
        <div>Turn</div>
    );
}
const Continue = () => {
    return (
        <div>Continue</div>
    );
}
class AuthorQuiz extends Component {
    render() {
        return (
            <div class="container-fluid">
                <Herro></Herro>
                <Turn></Turn>
                <Continue></Continue>
            </div>
        );
    }
}


ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
