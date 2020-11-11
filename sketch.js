var temp = 0
var gameState = 1;

function preload()
{
char_img = loadImage("rsz_sad_boy_.jpg");
switch_img = loadImage("rsz_switch.png");
}

function setup() {

  createCanvas(1450,680);
  //1st path

  wall1 = createSprite(200,200,500,30);
  wall2 = createSprite(450,140,30,150);
  wall3 = createSprite(520,80,150,30);
  wall4 = createSprite(600,140,30,150);
  wall5 = createSprite(800,200,400,30);
  wall6 = createSprite(990,270,30,170);
  wall7 = createSprite(850,340,300,30);
  
//2nd path
  wall8 = createSprite(1175,85,580,30);
  wall9 = createSprite(900,180,30,180);
  wall10 = createSprite(715,260,400,30);
  wall11 = createSprite(520,320,30,150);
  wall12 = createSprite(605,390,200,30);
  wall13 = createSprite(700,380,30,50);

//3rd path
wall14 = createSprite(1175,550,580,30);
wall15 = createSprite(900,490,30,100);
wall16 = createSprite(625,450,580,30);
wall17 = createSprite(350,385,30,120);
wall18 = createSprite(520,340,330,30);


//4rth path
wall21 = createSprite(200,600,500,30);
wall22 = createSprite(450,565,30,100);
wall23 = createSprite(520,530,150,30);
wall24 = createSprite(600,565,30,100);
wall25 = createSprite(900,600,580,30);
wall26 = createSprite(1200,465,30,300);
wall27 = createSprite(950,300,530,30);
wall28 = createSprite(700,310,30,30);

//create switches
switch1 = createSprite(30,200,50,50);
switch2 = createSprite(1415,85,50,50);
switch3 = createSprite(30,600,50,50);
switch4 = createSprite(1415,550,50,50);
char = createSprite(700,340,30,30);
char.addImage("charachter image",char_img)
char.scale = 0.6
switch1.addImage("switch1 image",switch_img)
switch2.addImage("switch2 image",switch_img)
switch3.addImage("switch3 image",switch_img)
switch4.addImage("switch4 image",switch_img) 
switch1.scale = 0.6
switch2.scale = 0.6
switch3.scale = 0.6
switch4.scale = 0.6

//give switches color
switch1.shapeColor = "teal"
switch2.shapeColor = "teal"
switch3.shapeColor = "teal"
switch4.shapeColor = "teal"




//give colors to 4rth path
wall21.shapeColor = "pink"
wall22.shapeColor = "pink"
wall23.shapeColor = "pink"
wall24.shapeColor = "pink"
wall25.shapeColor = "pink"
wall26.shapeColor = "pink"
wall27.shapeColor = "pink"
wall28.shapeColor = "pink"


//give colors to 3rd path
wall14.shapeColor = "green"
wall15.shapeColor = "green"
wall16.shapeColor = "green"
wall17.shapeColor = "green"
wall18.shapeColor = "green"


//give colors to 2nd path
wall8.shapeColor = "blue"
wall9.shapeColor = "blue"
wall10.shapeColor = "blue"
wall11.shapeColor = "blue"
wall12.shapeColor = "blue"
wall13.shapeColor = "blue"
  
  

//give colors to 1st path
wall1.shapeColor = "yellow"
wall2.shapeColor = "yellow"
wall3.shapeColor = "yellow"
wall4.shapeColor = "yellow"
wall5.shapeColor = "yellow"
wall6.shapeColor = "yellow"
wall7.shapeColor = "yellow"
char.shapeColor = "red"



}


function draw() {
  
if(gameState===1){



  background(0,0,0);

  // find x and y coordinates
  var coor = "X coords: " + mouseX + ", Y coords: " + mouseY; 

  //in console
  console.log(coor) 

  if(keyWentDown(UP_ARROW)) {
    char.velocityX = 0;
    char.velocityY = -2;
  }

  if(keyWentDown(DOWN_ARROW)) {
    char.velocityX = 0;
    char.velocityY = 2;
  }

  if(keyWentDown("left")) {
    char.velocityX = -3;
    char.velocityY = 0;
  }

  if(keyWentDown("right")) {
    char.velocityX = 3;
    char.velocityY = 0;
  }

  if(keyWentUp(UP_ARROW)) {
    char.velocityX = 0;
    char.velocityY = 0;
  }

  if(keyWentUp(DOWN_ARROW)) {
    char.velocityX = 0;
    char.velocityY = 0;
  }

  if(keyWentUp("left")) {
    char.velocityX = 0;
    char.velocityY = 0;
  }

  if(keyWentUp("right")) {
    char.velocityX = 0;
    char.velocityY = 0;
  }

  if(char.isTouching(switch1)){
    fill("white")
    textSize(25)
    text("Anger",100,150);
  }

  if(char.isTouching(switch2)){
    fill("white")
    textSize(25)
    text("Fright",1350,150);
  }

  if(char.isTouching(switch3)){
    
    char.destroy()
    temp = 1;
    textSize(25)
    text("Joy:You win!",150,400);
    background("white")
  }

  if(char.isTouching(switch4)){
    fill("white")
    textSize(25)
    text("Sadness",1270,500);
  }

  if(temp===1){
    fill("red")
    textSize(25)
    background("white")
    gameState = 2
  }
  drawSprites();
}
if (gameState===2){
  background("black");
  fill ("white")
  textSize(30)
  text("Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",60,340)
  text("Joy:You found the correct switch!",150,400);
}
}
 