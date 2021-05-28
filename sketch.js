const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1200, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 400, 1200, 20);

  hero = new Hero(200,3,200,150);
  rope = new Rope(hero.body, { x: 100, y:465 });
  monster = new Monster(600,200,150,150);

  box1 = new Box(280, 350, 30, 40);
  box2 = new Box(310, 350, 30, 40);
  box3 = new Box(340, 350, 30, 40);
  box4 = new Box(370, 350, 30, 40);
  box5 = new Box(400, 350, 30, 40);
  box6 = new Box(430, 350, 30, 40);
  box7 = new Box(460, 350, 30, 40);
  box8 = new Box(490, 350, 30, 40);
  box9 = new Box(310, 315, 30, 40);
  box10 = new Box(340, 315, 30, 40);
  box11 = new Box(370, 315, 30, 40);
  box12 = new Box(400, 315, 30, 40);
  box13 = new Box(430, 315, 30, 40);
  box14 = new Box(460, 315, 30, 40);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope.fly();
}