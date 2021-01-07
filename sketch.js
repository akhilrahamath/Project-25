
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var dp1,dp2,dp3;
var dustbinImg;

function preload() {
	
	dustbinImg = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world; 
  
  paper = new Paper(50,460,150,300);
  dp3 = new Dustbin(1100,570,150,150);
  ground = new Ground(400,670,1900,20);
 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);

  background("lightgrey");

  ground.display();
  dp3.display();
  paper.display();
  image(dustbinImg,865,480,250,200);
}


function keyPressed(){
 if(keyCode === UP_ARROW){ 
   Body.applyForce(paper.body,paper.body.position,{x:1800,y:-1834});	 
 }	
}