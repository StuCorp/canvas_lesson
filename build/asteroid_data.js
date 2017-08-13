
name: 
estimated_diameter > meters > estimated_diameter_min: 5 - 4023
is_potentially_hazardous_asteroid: 
close_approach_data > close_approach_date:
close_approach_data > relative_velocity > kilometers_per_second: 3- 39
close_approach_data > miss_distance > kilometers: (changed from miles)


var Asteroid = function(options){
  this.name = options.name;
  this.sizeM = options.sizeM;
  this.hazardous = options.hazardous;
  this.arrivalDateString = options.arrival_date;
  this.speedKS = options.speedKS;
  this.missDistanceKm = options.missDistanceKm;

  
  this.size = this.calculateSize(sizeM);
  this.arrivalDate = new Date(this.arrivalDateString);
  this.speed = this.speedKS;
  this.missDistance = this.missDistanceKm/10000000;

  this.xPos = 0;
  this.yPos = 0;
  this.arrived = false;
}


UI.prototype = {

calculateSize: function(sizeInM){
  if(sizeM< 100){
    return 10 + (sizeM/10);
  };
  if(sizeM<200){
    return 20 + ((sizeM-100)/10);
  };
  if(sizeM<300){
    return 30 + ((sizeM-200)/10);
  };
  if(sizeM<400){
    return 40 + ((sizeM-300)/10);
  };
  if(sizeM<500){
    return 50 + ((sizeM-400)/10);
  };
  if(sizeM<600){
    return 60 + ((sizeM-500)/10);
  };
  if(sizeM<700){
    return 70 + ((sizeM-600)/10);
  };
  if(sizeM<800){
    return 80 + ((sizeM-700)/10);
  };
  if(sizeM<900){
    return 90 + ((sizeM-800)/10);
  };  
  if(sizeM>900){
    return 100 + (sizeM/100);
  };

}

}

var asteroid1 = new Asteroid({
name: "(2006 SM198)", 
sizeM: 127.2198785394, 
hazardous: false, 
arrivalDate: "2017-08-15", 
speedKS: "11.9744199394", 
missDistanceKm: "43331116"

});

var asteroid2 = new Asteroid({
name: "(2017 FE3)", 
size: 58.3116024846, 
hazardous: false, 
arrival_date: "2017-08-15", 
speed: "5.3888992256", 
miss_distance: "55427880"
            

});

var asteroid3 = new Asteroid({
name: "(2017 FM101)", 
size: 12.4324000554, 
hazardous: false, 
arrival_date: "2017-08-15", 
speed: "3.5971081689", 
miss_distance: "63454296"

});


var asteroid4 = new Asteroid({
name: "414990 (2011 EM51)", 
size: 110.8038821264, 
hazardous: true, 
arrival_date: "2017-08-15", 
speed: "6.9539995826", 
miss_distance: "63454296"

});

var asteroid4 = new Asteroid({
name: "(2007 PV27)", 
size: 242.4124811008, 
hazardous: true, 
arrival_date: "2017-08-15", 
speed: "12.794353052", 
miss_distance: "72655360"

});


var asteroid1 = new Asteroid({
name: "sturoid", 
size: 100, 
hazardous: true, 
arrival_date: 1, 
speed: 1, 
miss_distance: 3

});
