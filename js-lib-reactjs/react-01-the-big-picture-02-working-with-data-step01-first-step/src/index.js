import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const Card = (props) => {
    return(
        <div>card</div>
    );
}

const ListCards = (props) => {
    return(
        <div>
            <Card></Card>
            <div>List Card</div>
        </div>
    );
}

class App extends React.Component{

    render(){
        return (
            <div>
                <ListCards></ListCards>
            </div>
        );
    }
}






ReactDOM.render(<App/>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
