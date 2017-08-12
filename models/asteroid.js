var Asteroid = function(options){
  this.name = options.name;
  this.size = options.size;
  this.hazardous = options.hazardous;
  this.arrival_date = options.arrival_date;
  this.speed = options.speed;
  this.miss_distance = options.miss_distance;
  this.xPos = 0;
  this.yPos = 0;
  this.arrived = false;
}

module.exports = Asteroid;