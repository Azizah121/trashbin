
var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine, world

function setup() {
	createCanvas(700, 400);
	engine = Engine.create();
	world = engine.world;
	trashcan= new Trash(600,380);
    ground1= new Ground(700,400,10000,20);
	paper1=new Paper(200,380);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
 
 // background("black");
  Matter.Engine.update(engine);
 paper1.display();
ground1.display();
trashcan.display();
keyPressed();
 
 drawSprites();
}
  function keyPressed(){
 	if(keyDown(UP_ARROW)){
 		paper1.velocityY=5;
	paper1.velocityX=5;
 	}
 }


