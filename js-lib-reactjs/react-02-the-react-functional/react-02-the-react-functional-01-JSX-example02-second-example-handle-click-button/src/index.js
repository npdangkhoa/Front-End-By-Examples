
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

function Clicker ({handleClick})  {
    console.log(JSON.stringify(handleClick));

    const click = (e)=> {handleClick('A')};

    return (
       <div>
           
           <button onClick={click}>A</button>
           <button onClick={(e)=> {handleClick('B')}}>B</button>
           <button onClick={(e)=> {handleClick('C')}}>C</button>
       </div>
    );
}

const handleClick = (label)=>{
    console.log(`${label} clicked`);
}

ReactDOM.render(<Clicker handleClick={handleClick}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
