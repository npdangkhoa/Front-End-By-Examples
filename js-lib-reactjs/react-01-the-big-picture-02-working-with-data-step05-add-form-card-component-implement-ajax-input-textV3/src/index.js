
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';

// Get resource example by ID
//https://api.github.com/users/2016 

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
    return (
        <div>
            {props.cards.map(card => <Card {...card}/>)}
        </div>
    );
}

class FormCard extends React.Component{

    state = {
        userName: ''
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log("handle Submit: " + this.state.userName);
        axios.get("https://api.github.com/users/"+ this.state.userName)
        .then((resp)=> {
            console.log(JSON.stringify(resp));
        })
    }


    render(){
        return (
            <form onSubmit= {this.handleSubmit}>
                <input type="text" name="userName" value={this.state.userName}
                onChange = {(event)=> {this.setState({userName: event.target.value})}}
                placeholder="Github user"></input>
                <button type="Submit">Add Card</button>
            </form>
        );
    }
}

class App extends React.Component {

    //the common data. the data is shared between componentes
    state = {
        cards: [{
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
            }
        ]
    };

    render() {
        return (
            <div>
                <FormCard/>
                <ListCards cards= {this.state.cards}></ListCards>
            </div>
        );
    }
}






ReactDOM.render(<App />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
