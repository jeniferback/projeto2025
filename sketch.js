function setup () {
  // creates a canvas 600 pixels wiide
  //and 400 pixels hight 
  createCanvas(600, 400);
}

function draw () {
  //sky blue background
  background(135, 206, 235);
}

function setup() {
  //Creates a canvas 600 pixels wide
  //and 400 pixels hight
  createCanvas (600, 400);
}

function draw () {
  // shy blue background
  background(135, 206, 235);
  //sun in tpo right
  fill("rgb(255,255,152)"); // light yellow
  
  stroke("orange"); // lange outline
  
  strokeWeight(30); // lange outline
  
  circle (520, 40, 100);
}

function setup() {
  //creates a canvas 600 pixels wide
  //and 500 pixels hight
  createCanvas(600, 400);
}
function draw() {
  //sky blue background
  background(135, 207, 235); 
  // sun in top right
  fill ("rgb(248,248,130)"); // light yellow
  
  stroke("rgb(243,197,114)"); //orange outlire
  
  strokeWeight(20); // lange outline
  
  circle(550, 50, 100);
  //grass on bottom outlene
  
  stroke(0); //black outlene 
  
  strokeWeight(1); // outline thickness
  
  fill("rgb(87,149,87)");
  
  rect(0, 200, 600, 200);
  
  fill("black");
  rect(0, 250, 990, 50); 
  fill("whinte");
  rect(0, 270, 990, 5);
  //Clink and drag the mouse to view the scene from different angles.
  
}

