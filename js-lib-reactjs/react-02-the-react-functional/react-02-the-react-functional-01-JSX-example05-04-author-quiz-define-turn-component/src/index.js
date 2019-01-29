
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import './index.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'


import * as serviceWorker from './serviceWorker';

// there are 2 way to pass parameter into method
//const Turn = (props) => {
const Turn = ({author, books}) => {
    return (
        <div className="row turn">
            <div className="col-4 offset-1" style={{background:'white'}}>
                <img className= 'authorimage' alt='Author' src={author.imageUrl}></img>
            </div>
            <div className="col-6">
                {books.map((tittle)=> <p>{tittle}</p>)}
            </div>
        </div>
    );
}

const Continue = () => {
    return (
        <div>Continue</div>
    );
}

// define the header of website
const Header = () => {
    return (
        <div className="row">
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
        </div>
    );
}

//define footer of website
const Footer = () => {
    return (
        <div className="row" id="Footer">
            <div className="col-12">
                <p className="text-muted credit">
                    All images are from <a href="http://commons.wikimedia.org/wiki/Main_Page">Wikemedia Commons</a> and are in the public domain
                </p>
            </div>
        </div>
    );
}




class AuthorQuiz extends Component {
    render() {
        console.log("AuthorQuiz props: " + this.props);
        return (
            <div>
                <Header></Header>
                <Turn {...this.props.turnData}></Turn>
                <Continue></Continue>
                <Footer></Footer>
            </div>
        );
    }
}

const authors = [
    { id: 1,
      name: 'Mark Twain',
      imageUrl: 'images/authors/marktwain.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['The Adventures of Huckleberry Finn']

    },
    { id: 2,
      name: 'Joseph Conrad',
      imageUrl: 'images/authors/josephconrad.png',
      imageSource: 'Wikimedia Commons',
      books: ['Heart of Darkness']
    },
    { id: 2,
      name: 'J.K. Rowling',
      imageUrl: 'images/authors/jkrowling.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Daniel Ogren',
      books: ['Harry Potter and the Sorcerers Stone']
    },
    { id: 2,
        name: 'Stephen King',
      imageUrl: 'images/authors/stephenking.jpg',
      imageSource: 'Wikimedia Commons',
      imageAttribution: 'Pinguino',
      books: ['The Shining', 'IT']
    },
    { id: 2,
        name: 'Charles Dickens',
      imageUrl: 'images/authors/charlesdickens.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['David Copperfield', 'A Tale of Two Cities']
    },
    { id: 2,
        name: 'William Shakespeare',
      imageUrl: 'images/authors/williamshakespeare.jpg',
      imageSource: 'Wikimedia Commons',
      books: ['Hamlet', 'Macbeth', 'Romeo and Juliet']
    }
  ];



const state ={
    turnData: {
        author: authors[0],
        books: authors[0].books
    }
};

ReactDOM.render(<AuthorQuiz  {... state}/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
