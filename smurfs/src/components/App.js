import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/App.css";
function App() {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>Smurf Village</p>
    </div>
  );
}

export default App;
