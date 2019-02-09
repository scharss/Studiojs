

function setup() {
  var canvas = createCanvas(420, 400);
  background(0);
 
  
  canvas.parent('sketch-holder');

  background(255, 0, 200);

  angleMode(DEGREES);


  




}



function draw() {

  
  background(220);
  
  arc(90, 60, 80, 80, 0, 90);
  arc(190, 60, 80, 80, 0, 270);
  arc(290, 60, 80, 80, 180, 450);
  arc(390, 60, 80, 80, 45, 225);
}

