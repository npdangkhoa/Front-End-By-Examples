
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

var data = [{
        "key": 2013,
        "avatar_url": "https://avatars1.githubusercontent.com/u/2013?v=4",
        "name": "Jeff Smith",
        "company": null,
        "blog": "http://jeffsmith.me",
        "location": "Amherst, Nova Scotia",
    },
    {
        "key": 2015,
        "avatar_url": "https://avatars1.githubusercontent.com/u/2015?v=4",
        "name": "Shawn Roske",
        "company": "space150",
        "blog": "http://www.space150.com",
        "location": "Los Angeles, CA",
    },
    {
        "key": 2016,
        "avatar_url": "https://avatars1.githubusercontent.com/u/2016?v=4",
        "name": "Tammer Saleh",
        "company": "@superorbital ",
        "blog": "http://superorbit.al",
        "location": "California, USA",
    }
];

const Card = (props) => {
    return (
        <div style={{margin: '1em'}} key={prompt.key}>
            <img width='90' src={props.avatar_url} />
            <div style={{display:'inline-block', marginLeft: 10}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold' }}>{props.name}</div>
                <div>{props.location}</div>
            </div>

        </div>
    );
}



const ListCards = (props) => {
    console.log(props.cards);
    return (
        <div>
            {props.cards.map(card => <Card {...card}/>)}
        </div>
    );
}

class FormCard extends React.Component{

    render(){
        return (
            <div>
            Form card
            </div>
        );
    }
}

class App extends React.Component {

    render() {
        return (
            <div>
                <FormCard/>
                <ListCards cards= {data}></ListCards>
            </div>
        );
    }
}






ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
