
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {_, shuffle, sample} from 'underscore';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

class Tonggle extends React.Component {
    constructor(props){
        super(props);
        this.state = {isTonggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClickByFunc = this.handleClickByFunc.bind(this);
    };
    handleClick = (e) => {
        this.setState({isTonggleOn: !this.state.isTonggleOn})
    }

    handleClickByFunc(){
        this.setState((state)=> ({isTonggleOn: !state.isTonggleOn}));
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClickByFunc}>Tonggle is {this.state.isTonggleOn? 'ON': 'OFF'}</button>
            </div>
        );
    }

}

ReactDOM.render(<Tonggle/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
