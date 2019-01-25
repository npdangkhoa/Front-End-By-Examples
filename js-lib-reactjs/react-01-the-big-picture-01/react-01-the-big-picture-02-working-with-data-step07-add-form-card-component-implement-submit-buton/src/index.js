
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
            {props.cards.map(card => <Card key={card.id} {...card}/>)}
        </div>
    );
}

class FormCard extends React.Component{

    state = {userName: ""}

    handleSubmit = (event)=>{
        event.preventDefault();
        console.log("handle Submit: " + this.state.userName);
        axios.get(`https://api.github.com/users/${this.state.userName}`)
        .then((resp)=> {
            console.log("handle submit: response data: " + JSON.stringify(resp));
            this.props.onSubmit(resp.data);
            this.setState({userName : ''})
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
        cards: [ ]
    };

    //TODO: need to verify this structure "preState => ({ cards:preState.cards.concat(newCard)   }) "
    //TODO: need to verify this Error structure "preState => { cards:preState.cards.concat(newCard)   } "

    addNewCard = (newCard) => {
        this.setState(preState => ({
            cards:preState.cards.concat(newCard)
        }));
    };

    render() {
        return (
            <div>
                <FormCard onSubmit= {this.addNewCard}/>
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
