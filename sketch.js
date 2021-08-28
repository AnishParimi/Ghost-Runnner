var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

  ghost=createSprite(300,300)
  ghost.addImage("ghostimg",ghostImg)
  ghost.scale=0.5;
  
  doorsGroup=createGroup();
  climbersGroup=createGroup();

  
  
  
}

function draw() {
  background(200);
  drawSprites()

  text

  if(tower.y > 400){
      tower.y = 300
    }

    if (keyDown("space")){
      ghost.velocityY=-5;
    }
    ghost.velocityY=ghost.velocityY+0.1;

    if(keyDown("RIGHT_ARROW")){
      ghost.x=ghost.x+5;
    }
    if (keyDown("LEFT_ARROW")){
      ghost.x=ghost.x-5;
    }
    
      
    

    spawnDoors()
 

    if  (ghost.isTouching(climbersGroup)||ghost.y>600){
    background(0)
    textSize(30);
    text("GAME OVER",200,300);
     
     ghost.destroyEach()
     
     
     

     


      

    }
    
}


function spawnDoors() {
if (frameCount%80==0){
  door=createSprite(Math.round(random(100,500)),20)
  climber=createSprite(door.x,door.y+50)
  climber.addImage("climberimg",climberImg)
  climber.velocityY=4;
  door.addImage("doorimg",doorImg);
 door.velocityY=4;
 door.lifetime=150;
 climber.lifetime=150;
 doorsGroup.add(door)
 climbersGroup.add(climber)
 
 

}
      
}
