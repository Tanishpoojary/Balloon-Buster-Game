var backGround,backGroundImage;
var redballoon,redballoonImage;
var greenballoon,greenballoonImage;
var blueballoon,blueballoonImage;
var pinkballoon,pinkballoonImage;
var bow,bowImage;
var arrow,arrowImage;
var score =0;
var redB; 
var greenB;
var blueB;
var pinkB;
var arrow;

function preload(){
backGroundImage =loadImage("background0.png")
red_BalloonImage =loadImage("red_balloon0.png") 
green_BalloonImage =loadImage("green_balloon0.png")  
blue_BalloonImage =loadImage("blue_balloon0.png")
pink_BalloonImage =loadImage("pink_balloon0.png")
bowImage =loadImage("bow0.png")
arrowImage =loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
 backGround=createSprite(600,600) 
 backGround.addImage(backGroundImage) 
 backGround.scale=3.5;
  
 redB =new Group();
 greenB =new Group();
 blueB =new Group();
 pinkB =new Group();
 arrowGroup =new Group();
  

  
 
  
  bow=createSprite( 550,300)
  bow.addImage(bowImage)
  bow.scale=1.1;  
  
 

  }

function draw() {
  
backGround.velocityX =-3;
  
bow.y=World.mouseY;  
  
if(backGround.x<0){
  backGround.x=300;
} 

 
  if(arrowGroup.isTouching(redB)){
   redB.destroyEach();
   arrowGroup.destroyEach();
   score=score+4;
 }
  
  if(arrowGroup.isTouching(greenB)){
   greenB.destroyEach();
   arrowGroup.destroyEach();
   score=score+3;
 }
  
  if(arrowGroup.isTouching(blueB)){
   blueB.destroyEach();
   arrowGroup.destroyEach();
   score=score+2;
 }
  
  if(arrowGroup.isTouching(pinkB)){
   pinkB.destroyEach();
   arrowGroup.destroyEach();
   score=score+1;
 }
   if(keyDown("space")){
  createArrow();
}
  
 var select_balloon  =Math.round(random(1,4))
  console.log (select_balloon)
 if (frameCount % 80 === 0) {  
   if(select_balloon == 1){
     redBalloon();
   }else if(select_balloon == 2){
     greenBalloon();
   }else if(select_balloon == 3){
     blueBalloon();
   } else {
     pinkBalloon();
 }
 }
  
  
  
  
drawSprites();
   text("score :" + score,450,30);
  
}

function createArrow(){ 
arrow =createSprite(550,106,5,10);
arrow.addImage(arrowImage);
arrow.velocityX =-6;
arrow.scale =0.3;
arrow.y=bow.y
arrowGroup.add(arrow);

}

 


 function redBalloon(){
  var red =createSprite(0,Math.round(random(20,370)),10,
    10);
  red.addImage(red_BalloonImage)
   red.velocityX =3;
   red.lifetime =200;
   red.scale =0.1
   redB.add(red);
 } 

function greenBalloon(){
  var green =createSprite(0,Math.round(random(20,370)),10,
    10);
  green.addImage(green_BalloonImage)
   green.velocityX =3;
   green.lifetime =200;
   green.scale =0.1
  greenB.add(green)
 } 

function blueBalloon(){
  var blue =createSprite(0,Math.round(random(20,370)),10,
    10);
  blue.addImage(blue_BalloonImage)
   blue.velocityX =3;
   blue.lifetime =200;
   blue.scale =0.1
  blueB.add(blue)
 } 

function pinkBalloon(){
  var pink =createSprite(0,Math.round(random(20,370)),10,
    10);
  pink.addImage(pink_BalloonImage)
   pink.velocityX =3;
   pink.lifetime =200;
   pink.scale =1
  pinkB.add(pink)
 } 


































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































