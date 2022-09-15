const db = require('../SQLDataFile');


const workoutController = {};

//add middleware to the controller obj;

//get workout data
workoutController.getWorkout = (req, res, next) => {
  const queryString = 'SELECT * FROM workout_table';
  db
    .query(queryString)
    .then((results) => results)
    .then((results) => {
      res.locals.getWorkout = results.rows;
      return next();
    })  
    .catch(err =>
      next({
        log: 'workoutController.getWorkout',
        message: 'error has occured in getWorkout controller'
      }))
}


//create new workout

// workoutController.createWorkout = (req, res, next) => {
  
// }

module.exports = workoutController;