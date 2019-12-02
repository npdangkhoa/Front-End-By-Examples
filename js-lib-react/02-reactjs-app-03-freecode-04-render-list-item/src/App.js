import React from "react";
import "./App.css";
import Joke from "./Component/Joke";
import JokeData from "./Component/JokeData.js";
function App() {
  console.log(JokeData);
  const JokeRender = JokeData.map(item => {
    return (
      <Joke key={item.id} question={item.question} punchLine={item.answer} />
    );
  });

  return <div>{JokeRender}</div>;
}

export default App;
