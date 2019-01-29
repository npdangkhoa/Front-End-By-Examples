
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {_, shuffle, sample} from 'underscore';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

const ActionButton = () =>{
    const activateLasers = (e)=>{
        e.preventDefault();

        console.log('activateLasers');
        return false;
    }

    const handleClick =(e)=>{
        console.log('handle link with return false');
        //return false;
    }

    const handleClickPreventDefault =(e)=>{
        e.preventDefault();
        console.log('handle link with preventDefault');
    }
    return (
        <div>
            <button onClick={activateLasers}>
                Activate Lasers
            </button>
            <br/>
            <a href="#" onClick={handleClick}>handle link with return false</a>
            <br/>

            <a href="#" onClick={handleClickPreventDefault}>handle link with preventDefault</a>
            <br/>

            <input type='checkbox' onClick={e=> {e.preventDefault()}}/>
        </div>
    );
}

ReactDOM.render(<ActionButton/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
