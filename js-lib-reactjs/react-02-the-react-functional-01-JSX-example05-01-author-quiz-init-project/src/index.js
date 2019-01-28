
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'


import * as serviceWorker from './serviceWorker';

class AuthorQuiz extends Component {
    render (){
        return (
            <div class="container-fluid">
                Author Quiz
            </div>
        );
    }
}


ReactDOM.render(<AuthorQuiz/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
