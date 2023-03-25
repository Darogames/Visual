
var trex ,trex_running;
var ground,ivisibleGround,groundImage;
var cloud, cloudImg;
var obstacules,obstacule1,obstacule2,obstacule3,obstacule4,obstacule5,obstacule6,rand;
function preload(){
  groundImage = loadImage("ground2.png");
  trex_running  = loadAnimation("trex1.png","trex3.png","trex4.png");
  cloudImg = loadImage("cloud.png");
  obstacle1 = loadImage("obstacle1");
  obstacle2 = loadImage("obstacle2");
  obstacle3 = loadImage("obstacle3");
  obstacle4 = loadImage("obstacle4");
  obstacle5 = loadImage("obstacle5");
  obstacle6 = loadImage("obstacle6");

}

function setup(){
  createCanvas(600,200)
  
  //crear sprite de Trex
 trex = createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale = 0.5;
 trex.x = 50;

 ground = createSprite(200,180,400,20);
 ground.addImage("ground", groundImage);
 ground.x = ground.width/2;
 ground.velocityX = -8;
 console.log(ground.X);
 //suelo invisible
 invisibleGround = createSprite(200,190,400,10);
 invisibleGround.visible = false;
 
}

function draw(){
  background("white")
  
  if(keyDown("space") && trex.y >= 100 ) {

     trex.velocityY = -10;

  }

  if(ground.x < 0) { 
    
    ground.x = ground.width/2 
  
  }

  trex.velocityY = trex.velocityY + 1;
  console.log(ground.X);
   
  trex.collide(invisibleGround);

  spawnClouds();
  spawnObstacules();

  drawSprites();
}


function spawnClouds(){
  if(frameCount % 60 == 0){

    cloud = createSprite(600, 100, 40, 10);
    cloud.addImage(cloudImg);
    cloud.velocityX = -3; 
    cloud.scale = 0.5;
    cloud.y = Math.round(random(10,100));
    cloud.depth = trex.depth; 
    trex.depth = trex.depth + 1;
  } 
}

function spawnObstacules(){

  if(frameCount % 60 == 0){
     obstacules = createSprite(600,165,10,40);
     obstacules.velocityX = -6;
     rand = Math.round(random(1, 6));


     switch(rand){

        case 1:
           obstacule1.addImage(obstacule1)
           break;
        case 2:
           obstacule2.addImage(obstacule2)
           break;
        case 3:
           obstacule3.addImage(obstacule3)
           break;
        case 4:
            obstacule4.addImage(obstacul41)
            break;
        case 5:
           obstacule5.addImage(obstacule5)
           break;
        case 6:
           obstacule6.addImage(obstacule6)
           break;  
     }
  }

}