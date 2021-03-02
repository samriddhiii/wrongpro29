const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var ground1,stand;
var block1;
var launcher;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26;
var box27,box28,box29,box30,box31,box32,box33,box34,box35,box36;

function setup(){
    createCanvas(1200,600);
    engine =  Engine.create();
    world = engine.world;
 
    ground1 = new Ground(600,590,1200,20);
    stand = new Ground(800,450,400,20);
    block1 = new Block(200,500,50,50);
    launcher = new slingshot(block1.body,{x: 240,y: 420})

     box1 = new Box(625,400,50,40)
     box2 = new Box(675,400,50,40)
     box3 = new Box(725,400,50,40)
     box4 = new Box(775,400,50,40)
     box5 = new Box(825,400,50,40)
     box6 = new Box(875,400,50,40)
     box7 = new Box(925,400,50,40)
     box8 = new Box(975,400,50,40)
     box9 = new Box(645,360,50,40)
     box10 = new Box(695,360,50,40)
     box11 = new Box(745,360,50,40)
     box12 = new Box(795,360,50,40)
     box13 = new Box(845,360,50,40)
     box14 = new Box(895,360,50,40)
     box15 = new Box(945,360,50,40)
     box16 = new Box(665,320,50,40)
     box17 = new Box(715,320,50,40)
     box18 = new Box(765,320,50,40)
     box19 = new Box(815,320,50,40)
     box20 = new Box(865,320,50,40)
     box21 = new Box(915,320,50,40)
     box22 = new Box(685,280,50,40)
     box23 = new Box(735,280,50,40)
     box24 = new Box(785,280,50,40)
     box25 = new Box(835,280,50,40)
     box26 = new Box(885,280,50,40)
     box27 = new Box(705,240,50,40)
     box28 = new Box(755,240,50,40)
     box29 = new Box(805,240,50,40)
     box30 = new Box(855,240,50,40)
     box31 = new Box(725,200,50,40)
     box32 = new Box(775,200,50,40)
     box33 = new Box(825,200,50,40)
     box34 = new Box(745,160,50,40)
     box35 = new Box(795,160,50,40)
     box36 = new Box(765,120,50,40)
 
    Engine.run(engine);
 

}

function draw(){
    background("black");
  
    launcher.display();
    block1.display();
    ground1.display();
    stand.display();
  
    push()
    fill("white")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    pop()
  
    push()
    fill("green")
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    pop()
  
    push()
    fill("purple")
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    pop()
    
    push()
    fill("red")
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    pop()
    
    push()
    fill("orange")
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    pop()
  
    push()
    fill("cyan")
    box31.display();
    box32.display();
    box33.display();
    pop()
  
    push()
    fill("darkblue")
    box34.display();
    box35.display();
    pop()
  
    push()
    fill("lightgreen")
    box36.display();
    pop()
}
 
function mouseDragged(){
    Matter.Body.setPosition(block1.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if (keyCode === 32)
    {
      Matter.Body.setPosition(block1.body, {x: 235, y: 420})
      launcher.attach(block1.body)
    }
}
