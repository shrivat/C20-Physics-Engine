
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var angle = 45
let engine;
let world;
var ball;
var ground;
var wedge1, wedge2
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  wedge1 = Bodies.rectangle(100, 200, 100, 20, ground_options)
  World.add(world, wedge1)

  wedge2 = Bodies.rectangle(300, 200, 100, 20, ground_options)
  World.add(world, wedge2)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(wedge1, angle)
  push()
  translate(wedge1.position.x, wedge1.position.y)
  rotate(angle)
  rect(0, 0, 100, 20)
  pop()
  angle+=0.1
  rect(wedge2.position.x, wedge2.position.y, 100, 20)
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 
}

