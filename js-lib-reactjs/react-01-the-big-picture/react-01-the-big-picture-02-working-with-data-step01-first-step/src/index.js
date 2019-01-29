import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const Card = (props) => {
    return (
        <div>
            <img width='90' src="https://assets.entrepreneur.com/content/3x2/2000/20170130170703-GettyImages-539953664.jpeg" />
            <div>
                <div>Name...</div>
                <div>Company Name ...</div>
            </div>

        </div>
    );
}

const ListCards = (props) => {
    return (
        <div>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
    );
}

class App extends React.Component {

    render() {
        return (
            <div>
                <ListCards></ListCards>
            </div>
        );
    }
}






ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
