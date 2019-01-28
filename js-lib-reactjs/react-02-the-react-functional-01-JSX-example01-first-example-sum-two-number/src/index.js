
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const Sum = (props) => {
    return (
        <h1>{props.a} + {props.b} = {props.a + props.b}</h1>
    );
}



ReactDOM.render(<Sum a={3} b={8}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
