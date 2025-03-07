// Project Title
// Your Name(s)
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let ballX = 300;
let ballY = 350;
let aimX = 300;
let aimY = 150;
let score = 0;
let blockX = 0;
let blockY = 0;
let goalX = 300;
let goalY = 110;
let dX = 0;
let dY = 0;

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
  background(255, 120, 0);
  drawgoal();
  drawplayer();
  drawcrowd();
  drawWall();
  drawball();
  block();
  fill("black")
  text(score, 250, 250);
  // mouseRelease();

  


  fill("navajowhite");
  ellipse(110, 50, 50, 50);
  fill("maroon");
  rect(110, 100, 50, 50)
  fill("navajowhite");
  ellipse(50, 50, 50, 50);
  fill("maroon");
  rect(50, 100, 50, 50)
  fill("navajowhite");
  ellipse(570, 50, 50, 50);
  fill("blue");
  rect(570, 100, 50, 50)
  fill("navajowhite");
  ellipse(500, 50, 50, 50);
  fill("blue");
  rect(500, 100, 50, 50)
  fill("navajowhite");
  ellipse(500, 250, 50, 50);
  fill("clear");
  rect(500, 300, 50, 50)

  

}

// draw the player
function drawplayer() {
  fill("maroon");
  rect(250, 350, 50, 50)
  fill("navajowhite");
  ellipse(250, 300, 50, 50);


}
// draw the ball
function drawball() {
  fill('white');
  ellipse(ballX, ballY, 30, 30);
  aimY = mouseY;
  aimX = mouseX;


  if (aimX <= 450 || aimX >= 150 ||aimY < 190) {
    fill('white')
    circle(aimX, aimY, 30);

    line(aimX - 20, aimY, aimX + 20, aimY,);
    line(aimX, aimY - 20, aimX, aimY + 20,);
  } else {
    // fill('red')
    // circle(aimX, aimY, 30);

    // line(aimX - 20, aimY, aimX + 20, aimY,);
    // line(aimX, aimY - 20, aimX, aimY + 20,);
  }

  //move the ball

  ballX += dX;
  ballY += dY;
 
  if (ballX >= 150 - 30 && ballX <= 425 - 30 && ballY >= 20 - 30 && ballY <= 190 - 30 ) {
    if (blockX === ballX || blockY === ballY) {
      ballX = 300;
      ballY = 350;
    }
    else {
      ballX = 300;
      ballY = 350;
      score += 1;
    }
    dX = 0;
    dY = 0;
  }
  
}




// make the goal
function drawgoal() {
  background(0, 120, 0);
  fill(255);
  rect(300, 100, 300, 150);
  fill(0, 120, 0);
  rect(300, 110, 250, 130);
  fill("blue");
  rect(290, 150, 50, 50)
  fill("navajowhite");
  ellipse(290, 100, 50, 50);

}

//make  the crowd
function drawcrowd() {
  fill("navajowhite");
  ellipse(110, 50, 50, 50);
  fill("maroon");
  rect(110, 100, 50, 50)
  fill("navajowhite");
  ellipse(50, 50, 50, 50);
  fill("maroon");
  rect(50, 100, 50, 50)
  fill("navajowhite");
  ellipse(570, 50, 50, 50);
  fill("blue");
  rect(570, 100, 50, 50)
  fill("navajowhite");
  ellipse(500, 50, 50, 50);
  fill("blue");
  rect(500, 100, 50, 50)
  fill("navajowhite");
  ellipse(500, 250, 50, 50);
  fill("clear");
  rect(500, 300, 50, 50)
}

//make the walls for the crowd
function drawWall() {
  fill('gray');
  rect(20, 140, 260, 50);
  fill('gray');
  rect(580, 140, 260, 50);
}

// make the goalie block the ball
function block() {
  ellipse(random(100, 450), random(0, 200), 25, 25)
  fill('green');
  //only appears in box

}

function mouseClicked() {
  if (aimX <= 450 || aimX >= 150 || aimY < 190) {
    // ballX += aimX;
    // ballY += aimY;
    dX = mouseX;
    dY = mouseY;
    dX = (dX - ballX) / 10;
    dY = (dY - ballY) / 10;
  }

}

