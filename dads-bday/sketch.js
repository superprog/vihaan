const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var bg;
var engine, world,platform;
var box1, pig1;
var check=0
function preload(){
bg=loadImage("sprites/bg.png");

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,100);

}

function draw(){
    background(bg);
    Engine.update(engine);
   console.log(log3.body.speed);
    //console.log(log4.body.speed);
    //console.log(log5.body.speed);
    
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    if(log3.body.speed>5|| log4.body.speed >5
       || log5.body.speed >5|| log1.body.speed >5){
         check=1
        
    };
    if(check==1){
      textSize(30)
      text("Happy Birthday Dad",400,200);
    }
        
    platform.display();
    bird.display();

    
}
function keyPressed() {
    if (keyCode === UP_ARROW) {
      
       Matter.Body.applyForce(bird.body,bird.body.position,{x:250,y:-300});
       console.log("Hello")
     }
   }