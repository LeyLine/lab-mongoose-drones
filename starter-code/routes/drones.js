const express = require('express');

// require the Drone model here

const router = express.Router();


router.get('/drones', (req, res, next) => {
  // Iteration #2
  drones.find({}).toArray(function (err, docs) {
    if (err) {
      return next(err);
    }
    res.render('drones/index', {
      drones: docs
    });

  });
});


router.get('/drones/new', (req, res, next) => {
  // Iteration #3
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;