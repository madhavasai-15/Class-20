var moving, fixed;

function setup() {
  createCanvas(1200,600);
  moving = createSprite(400, 200, 50, 80);
  moving.debug = true;
  moving.velocityX = 7;

  fixed = createSprite(600, 200, 80, 50);
  fixed.debug = true;
  fixed.velocityX = -5;
}

function draw() {
  background(0);  

  //moving.y = mouseY;
  //moving.x = mouseX;

  //DETECTING COLLISION
  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2
    && fixed.y - moving.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2 ){ 
      moving.shapeColor = "red";
      fixed.shapeColor = "red";
  }
  else{
      moving.shapeColor = "green";
      fixed.shapeColor = "green";
  }

  //BOUNCING TWO OBJECTS
  if(fixed.x - moving.x <= moving.width/2 + fixed.width/2
    && moving.x - fixed.x <= moving.width/2 + fixed.width/2){
      fixed.velocityX = fixed.velocityX * (-1);
      moving.velocityX = moving.velocityX * (-1);
  }
  if(fixed.y - moving.y <= moving.height/2 + fixed.height/2
    && moving.y - fixed.y <= moving.height/2 + fixed.height/2){
      fixed.velocityY = fixed.velocityY * (-1);
      moving.velocityY = moving.velocityY * (-1);
  }

  drawSprites();
}

/*
Algorithms : Logic to solve a problem

Coding algorithm: set of instructions to solve a problem

Pre-defined Algorithms:
1. isTouching()
2. bounce()
*/