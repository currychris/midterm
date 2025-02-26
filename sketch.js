// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
  //This function get run once at the start of the program
  createCanvas(600, 400);
  background(100, 255, 255, 200);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(15);
}
// draw  everything for the thingy
function draw() {
  background(255,120,0);
 drawgoal();
  drawplayer();
}
// draw the player
function drawplayer(){
fill("maroon");
rect(250,350,50,50)
fill("navajowhite");
ellipse(250, 300, 50, 50);
fill("blue");
rect(290,150,50,50)
fill("navajowhite");
ellipse(290, 100, 50, 50);
}

// make the goal
function drawgoal(){
  background(0,120,0);
  fill(255);
  rect(300, 100, 300, 150);
fill(0,120,0);
  rect(300,110,250,130) ;
  fill('darkgoldenrod');
  ellipse(300,300, 50, 50);
 
}

//make  the player kick the ball