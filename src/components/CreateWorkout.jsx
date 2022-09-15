import React, { useState, useEffect } from "react";
import "../stylesheets/MainContainer.scss";
import { data } from "../data/data.js";
import axios from 'axios';

function CreateWorkout () {

  //ADD FUNCTIONS HERE LIKE ONCLICK;
  const [workoutLists, setWorkoutLists] = useState(data);
  const [addWorkoutData, setAddWorkoutData] = useState({
    workoutname: '',
    set1: '',
    set2: '',
    set3: '',
    set4: '',
    set5: '',
  })

  useEffect(() => {
    fetch('http://localhost:3000')
    .then((response) => response.json())
    .then(data => setWorkoutLists(data))
  });

  const handleAddWorkoutChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')
    const fieldValue = event.target.value;

    const newWorkoutData = { ...addWorkoutData };
    newWorkoutData[fieldName] = fieldValue;

    setAddWorkoutData(newWorkoutData);
  }

  const handleAddWorkoutSubmit = (event) => {
    event.preventDefault();

    const newWorkout = {
      workoutname: addWorkoutData.workoutname,
      set1: addWorkoutData.set1,
      set2: addWorkoutData.set2,
      set3: addWorkoutData.set3,
      set4: addWorkoutData.set4,
      set5: addWorkoutData.set5,
    }

    const newWorkouts = [...workoutLists, newWorkout];
    setWorkoutLists(newWorkouts);

    //send newWorkout through post request to backend
    //npm i axios
      //axios.post(http:localhost:3000)

      /*
      axios.post('http://localhost:3000', {
        newWorkouts
      })
      .then((resp)=> {console.log(resp)})
      .catch((error)=> {console.log('error in axios.post')})
      */

      //.then(you are sending newWorkouts as body)
      //.then(data => console.log(data))
      //body jsonstringify 
      const data = newWorkout 
      fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((data) => data.json())
      // .then(res => res.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  }

    return (
      <div className="new-workout-container">
        <table>
          <thead className="workout-table-categories">
            <tr>
              <th>Workout Name</th>
              <th>Set 1</th>
              <th>Set 2</th>
              <th>Set 3</th>
              <th>Set 4</th>
              <th>Set 5</th>
            </tr>
          </thead>
          <tbody className="workout-rows">
            {workoutLists.map((data) => {
              return (
                <>
                <tr>
                <td>{data.workoutname}</td>
                <td>{data.set1}</td>
                <td>{data.set2}</td>
                <td>{data.set3}</td>
                <td>{data.set4}</td>
                <td>{data.set5}</td>
                </tr>
                </>
              )
            })}
          </tbody>
        </table>

            <h2 className="addWorkout">Add a workout</h2>
            <form onSubmit={handleAddWorkoutSubmit}>
              <input 
              type="text" 
              name="workoutname"
              required="required"
              placeholder="Enter workout"
              onChange={handleAddWorkoutChange}
              />
              <input 
              type="text" 
              name="set1"
              // required="required"
              placeholder="Enter WeightxReps"
              onChange={handleAddWorkoutChange}
              />
              <input 
              type="text" 
              name="set2"
              // required="required"
              placeholder="Enter WeightxReps"
              onChange={handleAddWorkoutChange}
              />
              <input 
              type="text" 
              name="set3"
              // required="required"
              placeholder="Enter WeightxReps"
              onChange={handleAddWorkoutChange}
              />
              <input 
              type="text" 
              name="set4"
              // required="required"
              placeholder="Enter WeightxReps"
              onChange={handleAddWorkoutChange}
              /><input 
              type="text" 
              name="set5"
              // required="required"
              placeholder="Enter WeightxReps"
              onChange={handleAddWorkoutChange}
              />
              <button type="submit">Add</button>
        </form>
      </div>
  );
} 



/*
    return (
      <div className="new-workout-container">
        <form>
        <table>
          <thead className="workout-table-categories">
            <tr>
              <th>Workout Name</th>
              <th>Set 1</th>
              <th>Set 2</th>
              <th>Set 3</th>
              <th>Set 4</th>
              <th>Set 5</th>
            </tr>
          </thead>
          <tbody className="workout-rows">
            <tr>
              <td>
                <input type="text" placeholder="Enter workout"/>
              </td>
              <td>
                <input type="text" placeholder="Enter WeightxReps"/>
              </td>
              <td>
                <input type="text" placeholder="Enter WeightxReps"/>
              </td>
              <td>
                <input type="text" placeholder="Enter WeightxReps"/>
              </td>
              <td>
                <input type="text" placeholder="Enter WeightxReps"/>
              </td>
              <td>
                <input type="text" placeholder="Enter WeightxReps"/>
              </td>
            </tr>
          </tbody>
          <div className="button">
            <button type="button" onClick={() => setNumberOfRows(numberOfRows + 1)}>Add Row</button>
            <button type="button">Save Workout</button>
          </div>
        </table>
        </form>
      </div>
  );
  */

export default CreateWorkout;