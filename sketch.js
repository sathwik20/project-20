var car
var wall
var speed
var weight
var Deformation=0.5*weight*speed*speed/22500

function setup() {
  createCanvas(800,800);
 car=createSprite(50,200,50,50);
 wall=createSprite(600,700,40,1500);
wall.shapeColour="black"

speed=random(53,90)
weight=random(400,1500)

car.velocityX=speed

}

function draw() {
  background(255,255,255);  

if(wall.x-car.x<(car.width+wall.width)/2)
{

car.velocityX=0;
var Deformation=0.5*weight*speed*speed/22500
if(Deformation>180)
{
car.shapeColour="red";
}

if(Deformation<180 && Deformation>100)
{
car.shapeColour="yellow"
}

if(Deformation<100)
{
car.shapeColour="green"
}
}

  drawSprites();
}