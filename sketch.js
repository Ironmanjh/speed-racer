var player1,player1img
var player2,player2img
var bg
var scene
function preload(){
bg = loadImage("background-boxing-ring.png")
player1img=loadAnimation("Fighter 1-1.png","Fighter 1-2.png","Fighter 1-3.png","Fighter 1-4.png","Fighter 1-5.png")
player2img=loadAnimation("Fighter 2-1.png.png","Fighter 2-2.png.png","Fighter 2-3.png.png",)
}
function setup(){
  createCanvas(600,600)
  scene = createSprite(300,300)
  scene.addImage(bg)
  player1=createSprite(100,300,20,20)
  player1.addAnimation("fighter",player1img)
  player1.scale=0.9
  player2=createSprite(500,354,20,20)
  player2.addAnimation("fighters",player2img)
  player2.scale=0.6

}
function draw(){
  background("black")
  

  





  drawSprites()
}
function keyPressed(){
  if(keyCode == 32){
    player1.velocityX=-3
    console.log("Hey")
  }

}