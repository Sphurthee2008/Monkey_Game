var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime = 0;
var score = 0

function preload(){
  
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}


function setup() {
  monkey = createSprite(50,330,10,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  
  ground = createSprite(55,365,650,10);
  ground.velocityX = -6;
  ground.shapeColor = "black"
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
}



function draw(){
  createCanvas(600,400)
  background("brown")
 
  monkey.collide(ground)
  
  if(ground.x <300){
  ground.x = ground.width/2;
  }
   
  if(frameCount % 300 === 0){
    obstacle = createSprite(650,345,20,20)
    obstacle.velocityX = -4
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1
    obstacle.lifetime = 330
    obstacleGroup.add(obstacle)
    monkey.depth = monkey.depth + 1
  }
  
  if(keyDown("space") && monkey.y >= 329.3){
    monkey.velocityY = -18;
  
     }
  monkey.velocityY = monkey.velocityY + 0.8;

   
  if(frameCount % 150 === 0){
    bannana = createSprite(650,200,10,10)
    bannana.y = Math.round(random(120,200))
    bannana.addImage(bananaImage)
    bannana.scale = 0.1
    bannana.velocityX = -4
    bannana.lifetime = 350;
    FoodGroup.add(bannana);
  }
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
  }
  
  
  drawSprites();

  textSize(20);
  fill("brown");
  text("Score: "+ score, 500,50)
  
  
  textSize(20);
  fill("white");
  survivalTime=Math.round(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 230,50);
  
  
  
  
}





