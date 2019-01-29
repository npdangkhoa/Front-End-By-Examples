import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


class Button extends React.Component{

    handleClick =() =>{
        this.props.onClickFunction(this.props.increaseVal);
    };
    render(){
        return (
            <button onClick={this.handleClick}>
                    +{this.props.increaseVal}
            </button>
        );
    }
}

const Result = (props) => {
    console.log(props);
    return (        
        <div>Counter is: {props.text}</div>
    );
};

class App extends React.Component{

    state = {counter: 0};

    handleClick = (increaseVal) => {
        this.setState((preState)=> {
            console.log(preState);
            console.log("increaseVal: "+ increaseVal);

            return {
                counter: preState.counter + increaseVal
            };
        });
       // console.log("counter : " +this.state.counter);
    };

    //TODO: 
        //STEP01: move "state" valiable into global valible
        //STEP02: caculate "state" valiable by <Button> tab.
        //STEP03: pass "state.counter" valiable into <Result> tab.
        //STEP04: get "state.counter" throw "props" paramter.
        
    render(){
        return (
            <div>
                 <Button increaseVal={1}   onClickFunction={this.handleClick}></Button>
                 <Button increaseVal={5}   onClickFunction={this.handleClick}></Button>
                 <Button increaseVal={10}  onClickFunction={this.handleClick}></Button>
                 <Button increaseVal={100} onClickFunction={this.handleClick}></Button>
                 <Result text={this.state.counter}></Result>
            </div>
        );
    }
}






ReactDOM.render(<App/>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
