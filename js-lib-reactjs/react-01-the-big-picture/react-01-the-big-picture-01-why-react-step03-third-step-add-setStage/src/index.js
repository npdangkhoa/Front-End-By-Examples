import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';


class Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = {counter: 0};
    };

    handleClick = () => {
        // setState is … synchronous
        //After all the above calls are processed this.state.value will be 1, 
        // not 3 like we would expect! To get around that …
        this.setState({counter: this.state.counter + 1});
        this.setState({counter: this.state.counter + 1});
        this.setState({counter: this.state.counter + 1});

        console.log("counter : " + this.state.counter);
    };

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}

ReactDOM.render(<Button  title = 'Go +1'/>, document.getElementById('root'));












// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
