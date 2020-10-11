var goalkeeper1;
var ball;
var score = 0 ;
var timer = 10
var start = 0
var play = 1
var gameState = start;
var goalTimer = 0;





function preload(){
  fieldImg = loadImage("sprites/field.jpg");
  ballImage = loadImage("sprites/ball.png");
  tenImg = loadImage("sprites/10Img.png");
  nineImg = loadImage("sprites/9Img.png");
  eightImg = loadImage("sprites/8Img.png");
  sevenImg = loadImage("sprites/7Img.png");
  sixImg = loadImage("sprites/6Img.png");
  fiveImg = loadImage("sprites/5Img.png");
  fourImg = loadImage("sprites/4Img.png");
  threeImg = loadImage("sprites/3Img.png");
  twoImg = loadImage("sprites/2Img.png");
  oneImg = loadImage("sprites/1Img.png");
  zeroImg = loadImage("sprites/0Img.png")
  logo = loadImage("sprites/gameLogo.png");
  playImg = loadImage("sprites/play.png");

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  goalKeeper1 = new Goalkeeper(730,145,30,30);
  goalKeeper1.shapeColor = "red";
  goalKeeper2 = new Goalkeeper(180,475,30,30);
  goalKeeper2.shapeColor = "blue";
  goalKeeper3 = new Goalkeeper(720,745,30,30);
  goalKeeper3.shapeColor = "pink";
  goalKeeper4 = new Goalkeeper(1325,485,30,30);
  goalKeeper4.shapeColor = "black";
  
 

  ball = createSprite(714,480,10,10);
  ball.addImage("ball",ballImage)
  ball.scale = 0.1;

  playButton = createSprite(700,540,10,10);
  playButton.addImage(playImg);
  playButton.visible = false;

  var side1 = createSprite(150,450,5,700)
  side1.shapeColor = "white";
  var side2 = createSprite(750,100,1200,5)
  side2.shapeColor = "white";
  var side3 = createSprite(750,800,1200,5)
  side3.shapeColor = "white";
  var side4 = createSprite(1350,450,5,700)
  side4.shapeColor = "white";
  var side5 = createSprite(250,350,200,5)
  side5.shapeColor = "white";
  var side6 = createSprite(350,500,5,300)
  side6.shapeColor = "white";
  var side7 = createSprite(250,650,200,5)
  side7.shapeColor = "white";
  var side8 = createSprite(200,400,100,5)
  side8.shapeColor = "white";
  var side9 = createSprite(200,600,100,5)
  side9.shapeColor = "white";
  var side10 = createSprite(250,500,5,200)
  side10.shapeColor = "white";
  var side11 = createSprite(120,440,70,5)
  side11.shapeColor = "white";
  var side12 = createSprite(120,550,70,5)
  side12.shapeColor = "white";
  var side13 = createSprite(90,495,5,110)
  side13.shapeColor = "white";
  var side14 = createSprite(1250,350,200,5)
  side14.shapeColor = "white";
  var side15 = createSprite(1150,500,5,300)
  side15.shapeColor = "white";
  var side16 = createSprite(1250,650,200,5)
  side16.shapeColor = "white";
  var side17 = createSprite(1300,400,100,5)
  side17.shapeColor = "white";
  var side18 = createSprite(1300,600,100,5)
  side18.shapeColor = "white";
  var side19 = createSprite(1250,500,5,200)
  side19.shapeColor = "white";
  var side20 = createSprite(1385,440,70,5)
  side20.shapeColor = "white";
  var side21 = createSprite(1385,550,70,5)
  side21.shapeColor = "white";
  var side22 = createSprite(1415,495,5,110)
  side22.shapeColor = "white";
  var side23 = createSprite(570,700,5,200);
  side23.shapeColor = "white";
  var side24 = createSprite(720,600,300,5);
  side24.shapeColor = "white";
  var side25 = createSprite(870,700,5,200);
  side25.shapeColor = "white";
  var side26 = createSprite(620,750,5,100)
  side26.shapeColor = "white";
  var side27 = createSprite(820,750,5,100)
  side27.shapeColor = "white";
  var side28 = createSprite(720,700,210,5)
  side28.shapeColor = "white";
  var side29 = createSprite(670,840,5,80)
  side29.shapeColor = "white";
  var side30 = createSprite(720,880,100,5)
  side30.shapeColor = "white";
  var side31 = createSprite(770,840,5,80)
  side31.shapeColor = "white";
  var side32 = createSprite(570,200,5,200);
  side32.shapeColor = "white";
  var side33 = createSprite(720,300,300,5);
  side33.shapeColor = "white";
  var side34 = createSprite(870,200,5,200);
  side34.shapeColor = "white";
  var side35 = createSprite(620,150,5,100)
  side35.shapeColor = "white";
  var side36 = createSprite(830,150,5,100)
  side36.shapeColor = "white";
  var side37 = createSprite(720,200,220,5)
  side37.shapeColor = "white";
  var side38 = createSprite(670,60,5,80)
  side38.shapeColor = "white";
  var side39 = createSprite(720,20,100,5)
  side39.shapeColor = "white";
  var side40 = createSprite(770,60,5,80)
  side40.shapeColor = "white";
  circle(700,700,20,20);
  

}

function draw() {
  background("green");  
  drawSprites();

  goalKeeper4.consoleDisplay();


  if(gameState === start){
    image(logo,300,300);
    playButton.visible = true;
  }

  if(mousePressedOver(playButton)){
    gameState = play
    playButton.visible = false;
  }

  
  if(gameState === play){

  time();
  getScore();
  caltimer();


    if(frameCount>200 && frameCount<400){
      goalKeeper1.goalKeeperLeftMovement();
      goalKeeper2.goalKeeperDownMovement();
      goalKeeper3.goalKeeperRightMovement();
      goalKeeper4.goalKeeperUpMovement();
    }
    if(frameCount>400 && frameCount<600){
      goalKeeper1.goalKeeperDownMovement();
      goalKeeper2.goalKeeperRightMovement();
      goalKeeper3.goalKeeperUpMovement();
      goalKeeper4.goalKeeperLeftMovement();
    }
    if(frameCount>600 && frameCount<800){
      goalKeeper1.goalKeeperRightMovement();
      goalKeeper2.goalKeeperUpMovement();
      goalKeeper3.goalKeeperLeftMovement();
      goalKeeper4.goalKeeperDownMovement();
    }
    if(frameCount>800 && frameCount<1000){
      goalKeeper1.goalKeeperUpMovement();
      goalKeeper2.goalKeeperLeftMovement();
      goalKeeper3.goalKeeperDownMovement();
      goalKeeper4.goalKeeperRightMovement();
    }
    
    
    
    //goalkeeper1.goalKeeperDownMovement();
    //goalkeeper1.goalKeeperRightMovement();
    //goalkeeper1.goalKeeperUpMovement();
    

    
 
  


  fill("white")
  textFont("comic sans ms")
  textSize(50)
  text(score,300,200)

  if(keyWentDown("UP_ARROW")){
  ball.velocityY = -10
  ball = createSprite(714,480,10,10);
  ball.addImage("ball",ballImage)
  ball.scale = 0.1;
  }

  if(keyWentDown("DOWN_ARROW")){
    ball.velocityY = 10
    ball = createSprite(714,480,10,10);
    ball.addImage("ball",ballImage)
    ball.scale = 0.1;
    }

    if(keyWentDown("RIGHT_ARROW")){
      ball.velocityX = 10
      ball = createSprite(714,480,10,10);
      ball.addImage("ball",ballImage)
      ball.scale = 0.1;
      }

      if(keyWentDown("LEFT_ARROW")){
        ball.velocityX = -10
        ball = createSprite(714,480,10,10);
        ball.addImage("ball",ballImage)
        ball.scale = 0.1;
        } 
}

}

function time(){
  if(frameCount%40 === 0 && timer>0 ){
    timer = timer - 1;
  }


  if(timer === 10){
    image(tenImg,1200,100);
  } 

  if(timer === 9){
    image(nineImg,1200,100);
  } 

  if(timer === 8){
    image(eightImg,1200,100);
  } 

  if(timer === 7){
    image(sevenImg,1200,100);
  } 
  if(timer === 6){
    image(sixImg,1200,100);
  } 

  if(timer === 5){
    image(fiveImg,1200,100);
  } 

  if(timer === 4){
    image(fourImg,1200,100);
  }
  
  if(timer === 3){
    image(threeImg,1200,100);
  }

  if(timer === 2){
    image(twoImg,1200,100);
  }

  if(timer === 1){
    image(oneImg,1200,100);
  }
  if(timer === 0){
    image(zeroImg,1200,100);
  }
}

function getScore(){
  if(ball.x === 190 && ball.y === 440){
    score = score + 1;
  }
  
}



function caltimer(){
  if(frameCount % 60 === 0){
    goalTimer ++;
  }
}


180,475
177,477
717,747
1325,485


