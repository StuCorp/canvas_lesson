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
  // var asteroid1 = new Asteroid({name: "sturoid", size: 100, hazardous: true, arrival_date: 1, speed: 1, miss_distance: 3});
  // var asteroid2 = new Asteroid({name: "baby", size: 20, hazardous: true, arrival_date: 2, speed: 2, miss_distance: 1});
  // var asteroid3 = new Asteroid({name: "pappi day3", size: 50, hazardous: true, arrival_date: 3, speed: 3, miss_distance: 5});
  // var asteroid4 = new Asteroid({name: "gary", size: 70, hazardous: true, arrival_date: 4, speed: 4, miss_distance: 2});
  // var asteroid5 = new Asteroid({name: "mr last comer", size: 80, hazardous: true, arrival_date: 5, speed: 5, miss_distance: 10});
  // var asteroid6 = new Asteroid({name: "mr last comer", size: 80, hazardous: true, arrival_date: 1, speed: 5, miss_distance: 10});

  var asteroid1 = new Asteroid({
  name: "(2006 SM198)", 
  sizeM: 127.2198785394, 
  hazardous: true, 
  arrivalDateString: "2017-08-15", 
  speedKS: "11.9744199394", 
  missDistanceKm: "43331116"
  });

  var asteroid2 = new Asteroid({
  name: "(2006 SM198)", 
  sizeM: 127.2198785394, 
  hazardous: false, 
  arrivalDateString: "2017-08-16", 
  speedKS: "11.9744199394", 
  missDistanceKm: "43331116"
  });

  asteroids.push(asteroid1);
  asteroids.push(asteroid2);
  // asteroids.push(asteroid2);
  // asteroids.push(asteroid3);
  // asteroids.push(asteroid4);
  // asteroids.push(asteroid5);
  // asteroids.push(asteroid6);

  // debugger;

  UI.prototype.renderAsteroidHits(asteroids);
  console.log("arrived at index's init function");

 UI.prototype.renderTimeline();
 console.log("arrived at index's init function");

  
}



window.addEventListener('load', init);

