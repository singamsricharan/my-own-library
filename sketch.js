var movingRect,fixedRect,gameobject1,gameobject2,gameobject3,gameobject4;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  gameobject1=createSprite(100,100,50,50);
  gameobject2=createSprite(200,100,50,50);
  gameobject3=createSprite(300,100,50,50);
  gameobject4=createSprite(400,100,50,50);
  gameobject1.shapeColor="green";
  movingRect.velocityY=-5;
  gameobject1.velocityY=+5;
  gameobject2.shapeColor="green";
  gameobject3.shapeColor="green";
  gameobject4.shapeColor="green";
}

function draw() {
  background("lightblue"); 
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  if(isTouching(movingRect,gameobject1)){
  movingRect.shapeColor="blue";
  gameobject1.shapeColor="blue";
  }
  else{
    movingRect.shapeColor="green";
      gameobject1.shapeColor="green";
  }
  bounceOff(movingRect,gameobject1);
  drawSprites();
}