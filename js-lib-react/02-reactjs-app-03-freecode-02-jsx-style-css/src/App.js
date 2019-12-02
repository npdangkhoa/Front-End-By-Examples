import React from "react";
import "./App.css";
import Footer from "./Component/Footer";
import MainContent from "./Component/MainContent";
import Header from "./Component/Header";

function App() {
  const style = {
    color: "#FF8C00",
    backgroudColor: "#FF2D00"
  };

  const date = new Date(2019, 11, 11, 5);
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "Morning";
    style.color = "green";
  } else if (hours >= 12 && hours <= 17) {
    timeOfDay = "Afternoon";
    style.color = "yellow";
  } else {
    timeOfDay = "Night";
    style.color = "blue";
  }

  return <h1 style={style}>Good {timeOfDay}</h1>;
}

export default App;
