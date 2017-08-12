
   var earth = new Image(); 
   var moon = new Image();
   var asteroid = new Image();
   var earthY;
   var earthX;  
   var asteroidY;
   var asteroidX;
   var count;
   var date;


var AsteroidHitsView = function(asteroids) {
  this.asteroids = asteroids;
  console.log("Hi from asteroidview constructor")
  console.log(this.asteroids)

  init();

}

   var init = function(){
  console.log("Hi from init")


     earth.src = "./images/Earth.png"; 
     asteroid.src = "./images/Asteroid.png"; 
     var canvas = document.getElementById('main-canvas');
     

     console.log(asteroid);
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

     drawEarth(context, canvas);
     drawAsteroid(context);
     asteroidX--;

    drawDate(context, canvas);
    count++;
    if(count> 1000){
      date++;
      count=0;
    }
    console.log(count);
    console.log(date);


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
  if (earthX> 600){
    earthX = -50;
  }
  var earthDimension = canvas.height/4;
  context.drawImage(earth,  earthX, earthY, earthDimension, earthDimension);
};

 var drawAsteroid = function(context){
  if (asteroidX< 0){
    asteroidX = 600;
  }
  context.drawImage(asteroid,  asteroidX, asteroidY, 50, 50);
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
      context.fillText('Hello world', 10, 50);
  }

  module.exports = AsteroidHitsView;