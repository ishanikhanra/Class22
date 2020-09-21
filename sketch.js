var en,w,obj,ground;

function setup() {

  createCanvas(800,400);
  
  en=Matter.Engine.create();

  w=en.world;

  obj=Matter.Bodies.rectangle(200,200,50,50);
  Matter.World.add(w,obj);

  ground=Matter.Bodeis.rectangle(200,380,400,50);
  Matter.World.add(w,ground);
  
  
}

function draw() {

  background(0);  
  Matter.Engine.update(en);
  rectMode(CENTER);
  rect(obj.position.x,obj.position.y,50,50);
  rect(ground.position.x,ground.position.y,400,50);
}