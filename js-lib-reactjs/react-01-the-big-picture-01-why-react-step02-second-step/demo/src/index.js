import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const Button = function(props){
    return (
        <button>{props.title}</button>
    );
}


ReactDOM.render(<Button  title = 'Go reader'/>, document.getElementById('root'));












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
