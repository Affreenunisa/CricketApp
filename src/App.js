import React, { useState } from "react";
import ListOfPlayers from "./components/ListOfPlayers";
import IndianPlayers from "./components/IndianPlayers";
import "./App.css";

const App = () => {
  // Flag state to toggle components - professional usage with state and toggle button
  const [showListOfPlayers, setShowListOfPlayers] = useState(true);

  const handleToggle = () => {
    setShowListOfPlayers((prev) => !prev);
  };

  return (
    <div className="app-container">
      <h1>Cricket App</h1>
      <button onClick={handleToggle} className="toggle-btn">
        {showListOfPlayers ? "Show Indian Players" : "Show List of Players"}
      </button>

      <main>
        {showListOfPlayers ? <ListOfPlayers /> : <IndianPlayers />}
      </main>
    </div>
  );
};

export default App;
