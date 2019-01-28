
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'


import * as serviceWorker from './serviceWorker';


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

// define the header of website
const Header = () => {
    return (
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
        </div>
    );
}

//define footer of website
const Footer = () => {
    return (
        <div className="row" id="Footer">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
                </p>
            </div>
        </div>
    );
}

class AuthorQuiz extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Turn></Turn>
                <Continue></Continue>
                <Footer></Footer>
            </div>
        );
    }
}


ReactDOM.render(<AuthorQuiz />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
