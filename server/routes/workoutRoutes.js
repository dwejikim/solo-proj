const express = require('express')
const workoutController = require('../controllers/workoutControllers');
const router = express.Router();

router.get('/', workoutController.getWorkout, (req, res) => {
    res.status(200).json(res.locals.getWorkout);
})

router.post('/', workoutController.createWorkout, (req, res) => {
    res.status(200).json(res.locals.madeNewWorkout);
})

// router.delete('.', workoutController.deleteWorkout, (req, res) => {

//     res.status(200).json()
// });


module.exports = router;