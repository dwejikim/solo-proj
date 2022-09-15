import React, { Component } from 'react';
import "../stylesheets/MainContainer.scss";
import MainContainer from "./CreateWorkout.jsx"
import WorkoutHistory from "./WorkoutHistory.jsx"


class App extends Component {
  render() {
    return (
      <div>
        <h1>Workout Log</h1>
        <MainContainer/>
      </div>
    )
  }
}

export default App;