
var _ = require('lodash');

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
var today; 
var stableToday;
var bigImpactDate; 
var dateTextSize;
var impactTextSize;
var starTimer; 
var infoBoxClicked;
var infoBoxPosX;
var infoBoxPosY;
var infoBoxWidth;
var infoBoxHeight;
var infoOBoxOriginalHeight;
var earthDimension;
var dayLength;
var paused;
var pausedText;
var detailTextSize;


var earthShadowIterator;
var i; 




var MainCanvasView = function(asteroids) {
  this.asteroids = asteroids;
  console.log("Hi from asteroidview constructor")
  console.log(this.asteroids)
  init(asteroids);

}

var init = function(asteroids){
  console.log("Hi from init")

  earth.src = "./images/Earth.png"; 
  asteroidImage.src = "./images/Asteroid.png"; 
  moon.src = "./images/Moon.png";
  var canvas = document.getElementById('main-canvas');
   var context = canvas.getContext('2d');


  asteroidsArray = asteroids;
  asteroidsToDraw = [];
  earthY = canvas.height/3;
  earthX = canvas.width/6;
  asteroidX = canvas.width;
  asteroidY =  130;
  count = 0;
  date = 0;
  bigImpactDate = new Date(2880, 03, 16, 12, 30, 0);
  stableToday = new Date();
  dateTextSize = canvas.height/12;
  impactTextSize = canvas.height/20;
  detailTextSize = canvas.height/28;
  starTimer =0;
  earthShadowIterator = 0; 
  earthDimension = canvas.height/4;
  dayLength =500;
  paused = false;
  pausedText = canvas.width/10  ;
  
  i =0;

  infoBoxPosX = canvas.width - (canvas.width/3);
  infoBoxPosY = 0; 
  infoBoxWidth = canvas.width/3;
  infoBoxHeight = canvas.height/5;
  infoOBoxOriginalHeight = infoBoxHeight;
  infoBoxClicked = false; 


  canvas.addEventListener('click', function(event){

    if(event.x> infoBoxPosX && event.x < infoBoxPosX + infoBoxWidth && event.y > infoBoxPosY && event.y < infoBoxPosY + infoBoxHeight){
      // debugger;
      if (infoBoxClicked===false){ 
        infoBoxClicked = true;
      } else{
        infoBoxClicked = false; 
      }
    }
  });

  // canvas.addEventListener( "keydown", doKeyDown, true);

  window.addEventListener('keydown', function(event){
    if(event.code === "Space"){
      // debugger;
      if (paused===false){ 
        paused = true;
      } else{
        paused = false; 
      }
      console.log(paused);
    }

  });


  canvas.addEventListener('keydown', function(event){
    console.log(event);
    console.log("mouse in the house");
    console.log(event.x);
 
  });

  canvas.addEventListener('click', function(event){

    asteroidsToDraw.forEach(function(asteroid){
      // debugger;
      if(event.layerX > asteroid.xPos && event.layerX < (asteroid.xPos + asteroid.size) && event.layerY > asteroid.yPos && event.layerY < (asteroid.yPos + asteroid.size)){
        console.log("touching it!");
        populateInfoBox(context, canvas, asteroid);
      }
    });
      
    });


  window.requestAnimationFrame(draw); 
}


var draw = function(){ 

  if(!paused){

   var canvas = document.getElementById('main-canvas');
   var context = canvas.getContext('2d');
   context.clearRect(0,0, canvas.width,canvas.height);
   context.fillStyle = 'black';
   context.fillRect(0,0, canvas.width,canvas.height);
   today = new Date(); 


   drawDate(context, canvas);
   drawDoomsdayClock(context, canvas);

   count++;
 // console.log(count);

 if(count> dayLength){
   date++;
   stableToday.setDate(stableToday.getDate() + 1);

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
      if(asteroid.arrivalDate.getFullYear() === stableToday.getFullYear() && 
        asteroid.arrivalDate.getMonth() === stableToday.getMonth() && 
        asteroid.arrivalDate.getDate() === stableToday.getDate() && asteroid.arrived === false){
        asteroid.xPos = canvas.width;
      var aboveOrBelowEarth = _.random(0,1) === 0 ? -1 : 1;
      asteroid.yPos = (earthY + earthDimension/2) + ((canvas.height/ 20) * asteroid.missDistance * aboveOrBelowEarth);
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

    //info box

    context.strokeStyle = 'hotpink';
    context.strokeRect(infoBoxPosX, infoBoxPosY, infoBoxWidth, infoBoxHeight);

    // debugger;
    if(infoBoxClicked === true && infoBoxHeight < (canvas.height-1)){
      infoBoxHeight+= 2;
    };

    if(infoBoxClicked === false && infoBoxHeight > canvas.height/5){
      infoBoxHeight-= 2;
    };



    // Moon
    context.save()           
        // set origin to earth center
        context.translate(earthX + (earthDimension/2), earthY + (earthDimension/2));
        // rotate + move along x
        context.rotate(i / (dayLength/7));
        context.translate(earthDimension/1.5, 0);
        // draw planet
        context.drawImage(moon, 0, 0, 10, 10);
        context.restore();
        i++;

     //
     // var time = new Date();
     // context.rotate(((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
     // context.translate(105, 0);
     // context.fillRect(0, -12, 50, 24); // Shadow
     // context.drawImage(asteroidImage, -12, -12);
     // context.restore();


//end of paused if statement
}

if(paused){
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext('2d');
  drawPaused(context, canvas);


}

window.requestAnimationFrame(draw); 


} 

var drawEarth = function(context, canvas){
  // if (earthX> 600){
  //   earthX = -50;
  // }
  var earthShadow = 18; 
  if(earthShadowIterator> 60) {
    earthShadowIterator =0;
    earthShadow = 16; 
  }

  context.shadowOffsetX = 0;
  context.shadowColor = 'white';
  context.shadowBlur = earthShadow;
  context.drawImage(earth,  earthX, earthY, earthDimension, earthDimension);
  context.shadowColor = 'rgba(0,0,0,0)';

  earthShadowIterator++; 


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
    // context.save();
    // context.translate(asteroid.xPos + (asteroid.size/2), asteroid.yPos + (asteroid.size/2));
      // context.rotate(Math.PI/180);
      // context.translate((asteroid.xPos + (asteroid.size/2)) * -1, (asteroid.yPos + (asteroid.size/2)) * -1);
      // context.shadowColor = 'white';
      if(asteroid.hazardous === true){
        context.shadowColor = 'red'
        context.shadowBlur = 60;
        context.shadowOffsetX = 0;
      } else{
       context.shadowColor = 'rgb(' + _.random(0, 255) + ',' + _.random(0, 255) + ', ' + _.random(0, 255) + ')'; 
       context.shadowBlur = 10;
       context.shadowOffsetX = 5;
     }
     context.drawImage(asteroidImage,  asteroid.xPos, asteroid.yPos, asteroid.size, asteroid.size);
     context.shadowColor = 'rgba(0, 0, 0, 0)'; 
    // context.restore();
    if(asteroid.hazardous===true){
      drawWarning(context);
    }
  });
  // debugger; 
};


   // if (asteroidX< 0){
   //   asteroidX = canvas.width;
   // }
   // context.drawImage(asteroid,  asteroidX, asteroidY, 50, 50);
 };

 var drawWarning = function(context){


 };


 var drawStars = function(context){
   var canvas = document.getElementById('main-canvas');


   var starX = Math.random() * (canvas.width - 0) + 0;
   var starY = Math.random() * (canvas.height - 0) + 0;

   // debugger;

   context.shadowColor = 'gold'
   context.shadowBlur = 60;
   context.shadowOffsetX = 0;
   context.fillRect(starX, starY, 2, 2);
     context.shadowColor = 'rgba(0, 0, 0, 0)'; 

 };

 var drawDate = function(context, canvas){
  context.fillStyle = 'grey';

  context.shadowColor = 'aqua'
  context.shadowBlur = 60;
  context.shadowOffsetX = 0;
  context.font = dateTextSize + 'px Saira Semi Condensed';
  context.fillText("Day " + date + ": " + stableToday.toDateString(), canvas.width/60, canvas.height/5);
     context.shadowColor = 'rgba(0, 0, 0, 0)'; 

  // debugger;
}

var drawDoomsdayClock = function(context, canvas){

  context.fillStyle = 'aqua';
  context.font = impactTextSize + 'px Saira';

  context.fillText("Next extinction-level impact:", infoBoxPosX + 10, 25);
  context.fillText( (bigImpactDate - today)/1000 , infoBoxPosX + 10, 50);
  context.fillText( "seconds left", infoBoxPosX + 200, 50);
  // debugger;
}

var drawPaused = function(context, canvas){
 context.fillStyle = 'rgba(175,4,4,0.1)';
 context.font = pausedText + 'px Saira';
 context.fillText("PAUSED", canvas.width/2 - (pausedText *2), canvas.height/2 + (pausedText/2));
} 

var populateInfoBox = function(context, canvas, asteroid){
  context.fillStyle = 'black';
  context.fillRect(20, canvas.height - (detailTextSize * 7), 300, 300);
  // debugger;

  context.fillStyle = 'white';
  context.font = detailTextSize + 'px Saira';

  context.fillText("Name:  " + asteroid.name, 20, canvas.height - (detailTextSize *6) );
  context.fillText("Size:  " + Math.round(asteroid.sizeM, -2) + '(m)', 20, canvas.height - (detailTextSize * 5));
  context.fillText("Harzardous:  " + asteroid.hazardous, 20, canvas.height - (detailTextSize *4));
  context.fillText("Date of arrival:  " + asteroid.arrivalDateString, 20, canvas.height - (detailTextSize *3));
  context.fillText("Speed:  " + Math.round(asteroid.speedKS) + '(km/s)', 20, canvas.height - (detailTextSize *2));
  context.fillText("Will miss earth by:  " + asteroid.missDistanceKm + '(km)', 20, canvas.height - detailTextSize);
  console.log("success");
};


module.exports = MainCanvasView;