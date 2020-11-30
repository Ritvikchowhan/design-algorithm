var moving,fixed;

function setup() {
  createCanvas(800,400);
  moving=createSprite(400, 200, 50, 50);
  fixed=createSprite(400,150,100,50);
}

function draw() {
  background(255,255,255);  
moving.x=mouseX;
moving.y=mouseY;
if(moving.x-fixed.x < moving.width/2 + fixed.width/2 &&
   fixed.x-moving.x < moving.width/2 + fixed.width/2 &&
   moving.y-fixed.y < moving.height/2 + fixed.height/2 &&
   fixed.y-moving.y < moving.height/2 + fixed.height/2 ){
  fixed.shapeColor="blue";
  moving.shapeColor="red";
}else{
  fixed.shapeColor="yellow";
  moving.shapeColor="green";
}



  drawSprites();
}