
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(314,396,60);
bob2=new Bob(384,395,61);
bob3=new Bob(453,396,60);
bob4=new Bob(524,395,61);
bob5=new Bob(594,396,60);
roof1=new Roof(455,185,370,50);

String1=new Rope (roof1.body,bob1.body);
String2=new Rope (roof1.body,bob2.body);
String3=new Rope (roof1.body,bob3.body);
String4=new Rope (roof1.body,bob4.body);
String5=new Rope (roof1.body,bob5.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
 String1.display();
 String2.display();
 String3.display();
 String4.display();
 String5.display();

  text("X"+mouseX+"Y"+mouseY,mouseX,mouseY);
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	
			Matter.Body.setStatic(bob1.body, {isStatic:false})
	console.log(bob1.body)
	Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-190,y:90});
	  
		
		
	}}


