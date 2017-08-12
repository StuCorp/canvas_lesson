var TimelineView = function(){

this.init();
}

TimelineView.prototype = {

  init: function(){
    console.log("made it");
    var canvas = document.getElementById('second-canvas');
    
    window.requestAnimationFrame(this.draw); 
  },

 draw: function(){
   var canvas = document.getElementById('second-canvas');
   var context = canvas.getContext('2d');

   // context.clearRect(0,0, canvas.width,canvas.height);
   context.fillStyle = 'deeppink';
     context.fillRect(0,0, canvas.width/2,canvas.height/3);

 } 
}

  module.exports = TimelineView;
