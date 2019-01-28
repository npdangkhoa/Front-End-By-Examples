
import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';

import * as serviceWorker from './serviceWorker';

function ClickyButton ({numberButton})  {
    const makeButton = v => <button id={v} key={v}>{v}</button>;
    return (
        <div>
            {_.range(1, numberButton + 1).map(makeButton)}
        </div>
    );
}



ReactDOM.render(<ClickyButton numberButton={99} />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
