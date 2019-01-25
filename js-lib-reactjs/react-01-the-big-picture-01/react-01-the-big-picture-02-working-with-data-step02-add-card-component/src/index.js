
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width='90' src={props.avatar_url} />
            <div style={{display:'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.company}</div>
            </div>

        </div>
    );
}

const ListCards = (props) => {
    return (
        <div>
            <Card name="Name..." 
                  company="Company Name ..." 
                  avatar_url="https://assets.entrepreneur.com/content/3x2/2000/20170130170703-GettyImages-539953664.jpeg" >
            
            </Card>
            <Card name="Name..." 
                  company="Company Name ..." 
                  avatar_url="https://assets.entrepreneur.com/content/3x2/2000/20170130170703-GettyImages-539953664.jpeg" >
            
            </Card>

            <Card name="Name..." 
                  company="Company Name ..." 
                  avatar_url="https://assets.entrepreneur.com/content/3x2/2000/20170130170703-GettyImages-539953664.jpeg" >
            
            </Card>
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
