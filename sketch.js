
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var  paper1,paper2,paper3,paper4,paper5,ch1,ch2,ch3,ch4,ch5,line;

function preload()
{
	
}

function setup() {
	 createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper1 = new Paper(200,50,60);
    paper2 = new Paper(300, 50,60);

    paper3= new Paper(400,50,60);
    paper4 = new Paper(500,50,60);
    paper5 = new Paper(600, 50,60);

ground=new Ground(400,50,800,20);
ch1=new Ch (paper1.body,line.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  



ch1.display()
  paper1.display();
  paper2.display();
  paper3.display();
  paper4.display();
  paper5.display();
  ground.display()
  drawSprites();


}



