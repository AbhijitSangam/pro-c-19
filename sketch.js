var boy,boyrunning
var background2, backImg
var obstacle, obsImg , obsgroup
var invisibleground
var gameState = "play"

function preload(){
boyrunning= loadImage("boy-running.png")
backImg = loadImage("background.png")

obsImg = loadImage("obstacles.png")
}

function setup() {
  
background2 = createSprite(200,200)
background2.addImage(backImg) 
background2.velocityX = -2

 boy= createSprite(130,390,20,20)
 boy.addImage( "boy",boyrunning)
 boy.scale=0.08
 
 
 
obsgroup= new Group()
 

 invisibleground = createSprite(200,400,400,1)

}

function draw() {
if (gameState==="play") {
   


    background("black")
    
    if (background2.x < 0){
      background2.x = 300
    }

  if (keyDown("Space")) {
     boy.velocityY= -5 
  }

boy.velocityY+= 0.8
 boy.collide(invisibleground)

 if(obsgroup.isTouching(boy)){
   boy.destroy()
   gameState="end"
   }


 spawnObstacles()
 drawSprites()
}
if(gameState==="end"){
   text("GAME OVER",230,250,100,100)

   }
}

function spawnObstacles(){
if (frameCount%150===0) {

   obstacle= createSprite(300,370,20,50)
 obstacle.addImage(obsImg)
 obstacle.scale=0.05
 obstacle.velocityX=-4
 obsgroup.add(obstacle)

  boy.depth=obsgroup.depth
  boy.depth +=1
   
  obsgroup.lifetime=800
}


}