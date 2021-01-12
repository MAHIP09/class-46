function preload(){
groundImage=loadImage("groundImage.jpg")
smallEnemyImage=loadImage("enemy.png")
player1=loadAnimation("boy.png"," boy2.png","boy3.png")
bulletImage=loadImage("bullet.png")
}
function setup(){
createCanvas(1200,400)
ground=createSprite(600,390,1200,20)
ground.addImage(groundImage)
ground.scale=2.5
ground.velocityX=-3

player=createSprite(50,200,10,10)
player.shapeColor="red"
player.addAnimation("playerimages",player1)
player.scale=0.9

bulletGroup=new Group()
enemyGroup=new Group()

edges=createEdgeSprites()
}
function draw(){
    background("blue")

    if(ground.x<0){
     ground.x=ground.width/2

    }
if(keyDown(UP_ARROW)){
  player.y=player.y-3

}
if(keyDown(DOWN_ARROW)){
    player.y=player.y+3
  
  }
  if(keyDown(LEFT_ARROW)){
    
    player.x=player.y-3
  
  }
  if(keyDown(RIGHT_ARROW)){
    player.x=player.y+3
  
  }
    if(keyDown("SPACE")){
       bullet=createSprite(player.x,player.y)
       bullet.velocityX=4
       bullet.scale=0.1
      bulletGroup.add(bullet)
      bullet.addImage(bulletImage)

    }
    if(bulletGroup.isTouching(enemyGroup)){
      enemyGroup.destroyEach()
    }
    player.bounce(edges)

  enemy()
drawSprites()
}
  function enemy(){
  if(frameCount%200===0){
     smallEnemy=createSprite(1200,200,30,30)
     smallEnemy.velocityX=-7
//     smallEnemy.y=Math.round(random(50,350))
     
     smallEnemy.addImage(smallEnemyImage)
      smallEnemy.scale=0.3
     enemyGroup.add(smallEnemy)
    }




}