// Iteration #1
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drones-dev');
const Drone = require('../models/drone');

const droneData = [{
    name: 'Creeper XL 500',
    propellers: 3,
    maxSpeed: 12
  },
  {
    name: 'Racer 57',
    propellers: 4,
    maxSpeed: 20
  },
  {
    name: 'Courier 3000i',
    propellers: 6,
    maxSpeed: 18
  }
];

Drone.create(droneData, function (err, user) {
  if (err) console.log('An error happened:', err);
  else droneData.forEach(function (element) {
    console.log(`${element.name}`);
  });
  mongoose.disconnect();
});