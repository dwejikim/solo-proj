import React, { useState } from "react";
import "../stylesheets/MainContainer.scss";
import CreateWorkout from "./CreateWorkout.jsx";
import WorkoutHistory from "./WorkoutHistory.jsx";

function MainContainer() {
    return (
        <div>
            {/* <h2>Workout Log</h2> */}
            <CreateWorkout />
            {/* <WorkoutHistory /> */}
        </div>
    )
}

export default MainContainer;