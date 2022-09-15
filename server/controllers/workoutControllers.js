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
        log: 'workoutController.getWorkout: ',
        message: 'error has occured in getWorkout controller'
      }))
}


//create new workout

workoutController.createWorkout = async (req, res, next) => {
  try {
    // console.log('this is req.body:', req.body)
    const {
      workoutname,
      set1,
      set2,
      set3,
      set4,
      set5,
    } = req.body;

    const text = `
    INSERT INTO workout_table (workoutName, set1, set2, set3, set4, set5)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING *
    `
    // console.log('this is text: ', text)
    const params = [
      workoutname,
      set1,
      set2,
      set3,
      set4,
      set5,
    ];
    // console.log('this is params:', params)
    const result = await db.query(text, params);
    console.log('this is result:', result)
    res.locals.madeNewWorkout = result.rows;
    console.log('this is res.locals: ', result.rows);
    return next();
  }
  catch (err) {
    next({
      log: 'workoutController.createWorkout: ',
      message: 'error occured in createWorkout controller'
    })
  }
  
}

module.exports = workoutController;