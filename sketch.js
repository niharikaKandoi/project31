  
const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 var world,engine;

 var particles = [];
 var plinkos = [];
 var divisions =[];
 var divisionHeight=300;
 var score =0;
function setup() {
  createCanvas(900,900);
  engine = Engine.create();
  world = engine.world;
 ground = new Ground(width/2,height,width,20);

  for(var i=0;i<=800; i=i+100){
    divisions.push(new Divisions(i,height-divisionHeight/2,10,divisionHeight))
  }
  for(var i=75;i<=width; i=i+50){
    plinkos.push(new Plinko(i,50))
  }
  for(var i=25;i<=width-50; i=i+50){
    plinkos.push(new Plinko(i,150))
  }
  for(var i=75;i<=width; i=i+50){
    plinkos.push(new Plinko(i,250))
  }
  for(var i=25;i<=width-50; i=i+50){
    plinkos.push(new Plinko(i,350))
  }
}

function draw() {
  Engine.update(engine);
  background("black");  

for (var k = 0; k < divisions.length; k++) {
     
  divisions[k].display();
}

if(frameCount%60===0){
 
  particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  score++;
}
for (var j = 0; j < particles.length; j++) {
   
  particles[j].display();
}
for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}

ground.display();
}