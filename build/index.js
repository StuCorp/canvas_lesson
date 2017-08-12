   // var _ = require('lodash');
var UI = require('./ui');
var Asteroid = require('../models/asteroid');
var asteroids = []; 


// var Asteroid = function(options){
//   this.name = option.name;
//   this.size = option.size;
//   this.hazardous = option.hazardous;
//   this.arrival_date = option.arrival_date;
//   this.speed = option.speed;
//   this.miss_distance = option.miss_distance;
// }



var init = function(){

  // debugger;
  var asteroid1 = new Asteroid({name: "sturoid", size: "100", hazardous: true, arrival_date: 1, speed: 5, miss_distance: 3});
  var asteroid2 = new Asteroid({name: "baby", size: "20", hazardous: true, arrival_date: 2, speed: 7, miss_distance: 3});
  var asteroid3 = new Asteroid({name: "pappi day3", size: "50", hazardous: true, arrival_date: 3, speed: 10, miss_distance: 3});
  var asteroid4 = new Asteroid({name: "gary", size: "70", hazardous: true, arrival_date: 4, speed: 3, miss_distance: 3});
  var asteroid5 = new Asteroid({name: "mr last comer", size: "80", hazardous: true, arrival_date: 5, speed: 1, miss_distance: 3});

  asteroids.push(asteroid1);
  asteroids.push(asteroid2);
  asteroids.push(asteroid3);
  asteroids.push(asteroid4);
  asteroids.push(asteroid5);

  UI.prototype.renderAsteroidHits(asteroids);
  console.log("arrived at index's init function")
}



window.addEventListener('load', init);

