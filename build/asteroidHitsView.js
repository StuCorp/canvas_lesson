
var earth = new Image(); 
var moon = new Image();
var asteroidImage = new Image();
var earthY;
var earthX;  
var asteroidY;
var asteroidX;
var count;
var date;
var asteroidsArray;
 var asteroidsToDraw;


var AsteroidHitsView = function(asteroids) {
  this.asteroids = asteroids;
  console.log("Hi from asteroidview constructor")
  console.log(this.asteroids)
  init(asteroids);

}

var init = function(asteroids){
  console.log("Hi from init")

  earth.src = "./images/Earth.png"; 
  asteroidImage.src = "./images/Asteroid.png"; 
  var canvas = document.getElementById('main-canvas');


  asteroidsArray = asteroids;
  asteroidsToDraw = [];
  earthY = canvas.height/3;
  earthX = canvas.width/6;
  asteroidX = canvas.width;
  asteroidY =  130;

  count = 0;
  date = 0;


  window.requestAnimationFrame(draw); 
}


var draw = function(){ 
 var canvas = document.getElementById('main-canvas');
 var context = canvas.getContext('2d');
 context.clearRect(0,0, canvas.width,canvas.height);
 context.fillStyle = 'black';

 context.fillRect(0,0, canvas.width,canvas.height);

 drawDate(context, canvas);
 count++;
 console.log(count);
 if(count> 500){
   date++;
   count=0;
 }
 drawEarth(context, canvas);
 // drawAsteroid(context, canvas);
     // debugger;
     // asteroids.forEach(function(asteroid){
     //  asteroid.x -= asteroid.speed; 
     // });
     asteroidX-= 5;

     asteroidsArray.forEach(function(asteroid){
      if(asteroid.arrival_date === date && asteroid.arrived === false){
        asteroid.xPos = canvas.width;
        asteroid.yPos = earthY + ((canvas.height/ 20) * asteroid.miss_distance);
        asteroid.image = new Image();
        asteroid.image.src = "./images/Asteroid.png"; 
        asteroid.arrived = true;
        asteroidsToDraw.push(asteroid);
      }
    });


if(asteroidsToDraw.length> 0) {
// debugger;
     asteroidsToDraw.forEach(function(asteroid){
      asteroid.xPos -= asteroid.speed;
     });
   };

     drawAsteroids(context, canvas, asteroidsToDraw);


    // console.log(count);
    // console.log(date);


    drawStars(context);

//mouse click on canvas
canvas.addEventListener('mouseenter', function(event) {
  if (event.x > asteroidX && event.x < asteroidX+50){
    console.log('clicked', event);
    console.log('location', event.x, event.y);
  }
});
window.requestAnimationFrame(draw); 

}

var drawEarth = function(context, canvas){
  // if (earthX> 600){
  //   earthX = -50;
  // }
  var earthDimension = canvas.height/4;
  context.drawImage(earth,  earthX, earthY, earthDimension, earthDimension);
};

var drawAsteroid = function(context, canvas){
  if (asteroidX< 0){
    asteroidX = canvas.width;
  }
  context.drawImage(asteroidImage,  asteroidX, asteroidY, 50, 50);
};


var drawAsteroids = function(context, canvas, asteroidsToDraw){
 if(asteroidsToDraw.length > 0){
  asteroidsToDraw.forEach(function(asteroid){
    // debugger;
    context.drawImage(asteroidImage,  asteroid.xPos, asteroid.yPos, asteroid.size, asteroid.size);
  });
  // debugger; 
};


   // if (asteroidX< 0){
   //   asteroidX = canvas.width;
   // }
   // context.drawImage(asteroid,  asteroidX, asteroidY, 50, 50);
 };


 var drawStars = function(context){
   var canvas = document.getElementById('main-canvas');

   var starX = Math.random() * (canvas.width - 0) + 0;
   var starY = Math.random() * (canvas - 0) + 0;

   context.fillStyle = 'white';
   context.fillRect(starX, starY, 2, 2);
 };

 var drawDate = function(context, canvas){
  context.fillStyle = 'deeppink';
  context.font = '48px serif';
  context.fillText("Day " + date, 10, 50);
}

module.exports = AsteroidHitsView;