const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var ground,block1,block2,block3,block4,block5,block6,block7,block8,block9;
var block10,block11,block12;
var monster,hero,fly;



function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  engine.Create.engine();
  world = engine.world;
  
  ground = new ground(2000,700,3000,30);
  block1=new Block(1000,200,20,20);
  block2=new Block(1100,200,20,20);
  block3= new Block(1000,300,20,20);
  block4=new Block(1100,300,20,20);
  block5= new Block(1000,400,20,20);
  block6=new Block(1100,400,20,20);
  block7= new Block(1000,500,20,20);
  block8=new Block(1100,500,20,20);
  block9= new Block(1000,600,20,20);
  block10=new Block(1100,600,20,20);
  block11= new Block(1000,700,20,20);
  block12=new Block(1100,700,20,20);

  

}

function draw() {
  background(0);
  Engine.Update(engine);
  ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fly.display();
    hero.display();


   
}

function mouseDragged(){
  Matter.Body.setPosition(hero.body ,{x: mouseX,y:mouseY})
}

