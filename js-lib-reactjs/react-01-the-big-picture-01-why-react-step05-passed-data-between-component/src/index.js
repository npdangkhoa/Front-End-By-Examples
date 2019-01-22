import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    };

    handleClick = () => {
        this.setState((preState)=> {
            console.log(preState);
            return {
                counter: preState.counter + 1
            };
        });
        console.log("counter : " +this.state.counter);
    };

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

const Result = () => {
    return (
        <div>.....</div>
    );
}

class App extends React.Component{
    render(){
        return (
            <div>
                 <Button></Button>
                 <Result></Result>
            </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
