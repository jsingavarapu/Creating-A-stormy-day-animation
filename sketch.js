const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var maxDrops=100
var man1,man2,thunder1,thunder2,thunder3,thunder4,thunder,engine,world,w1,w2,w3,w4,w5,w6,w7,w8;
var drops=[]


function preload(){
 thunder1=loadImage("images/thunderbolt/1.png");
 thunder2=loadImage("images/thunderbolt/2.png");
 thunder3=loadImage("images/thunderbolt/3.png");
 thunder4=loadImage("images/thunderbolt/4.png");
 w1 = loadImage("images/walkingFrame/walking_1.png"); 
 w2 = loadImage("images/walkingFrame/walking_2.png");
 w3 = loadImage("images/walkingFrame/walking_3.png");
 w4 = loadImage("images/walkingFrame/walking_4.png");
 w5 = loadImage("images/walkingFrame/walking_5.png");
 w6 = loadImage("images/walkingFrame/walking_6.png");
 w7 = loadImage("images/walkingFrame/walking_7.png");
 w8 = loadImage("images/walkingFrame/walking_8.png");
}

function setup(){
createCanvas(400,700); 
engine = Engine.create();
  world = engine.world;
if(frameCount %100===0 ){  
  for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(0,400), random(0,400)));   
   } 
  }
// reminder that you don't need to add a image in setup() beacause it is loaded in umbrella.js
 man2=new Umbrella(150,575); 

}
function draw(){
  background("black");
Engine.update(engine);
 man2.display() 
 for(var i=0; i<maxDrops; i++){
  drops[i].display()
  drops[i].updateY() 
 }
rand = Math.round(random(1,4));
 if (frameCount %150===0){
  thunder=createSprite(random(10,370),random(10,370),10,10);
  
  switch(rand){
case 1: thunder.addImage(thunder1)
          break;
case 2: thunder.addImage(thunder2) 
          break;
case 3: thunder.addImage(thunder3)                
          break;
 case 4: thunder.addImage(thunder4)         
           break;
      defalt: break;    

  } 
 }
 if (frameCount %152===0){
 thunder.visible = false;
}
 drawSprites();

}


  




  

