
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import * as serviceWorker from './serviceWorker';

function DangerContainer (props)  {
    return (
        <p>{props.dangerous}</p>
    );
}



ReactDOM.render(<DangerContainer dangerous="<strong>HELLO</strong>"/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
