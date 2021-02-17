var introLogo, INTROpng;

var start, startA;
//image variables
var guide, guideA;

var menuIMG, menuA;
//Sprites variables

var menuBG, menuBGA;
//gameState
var gameState = "intro";

function preload() {

  INTROpng = loadAnimation("Untitled-1.png");
  startA = loadAnimation("J,.png");
  guideA = loadAnimation("FGNH.png");
  menuA = loadAnimation("img menu.jpg");
  menuBGA = loadAnimation("pixlr-bg-result (2).png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  introLogo = createSprite(windowWidth/3,windowHeight/6, windowWidth/2, 20);
  introLogo.addAnimation("intro123", INTROpng);
  introLogo.scale = 0.3;
  introLogo.visible = false;



  start = createSprite(200, 125, 20, 20);
  start.visible = false;
  start.addAnimation("startA1", startA);
  start.scale = 0.3;



  guide = createSprite(200, 475, 20, 20);
  guide.addAnimation("guideA1", guideA);
  guide.scale = 0.3;
  guide.visible = false;



  menuIMG = createSprite(200, 300, 20, 20);
  menuIMG.addAnimation("menuA1", menuA);
  menuIMG.scale = 0.2
  menuIMG.visible = false;


  menuBG = createSprite(200, 320, 20, 20);
  menuBG.addAnimation("menuBGA1", menuBGA);
  menuBG.scale = 2.5
  menuBG.visible = false;
}

function draw() {
  background(220);
  console.log(frameCount);
  console.log(gameState);

  if (gameState === "intro" && frameCount < 100) {
    introLogo.visible = true;

  }
  if (frameCount >= 100 && gameState ==="intro") {

    gameState = "menu";

  }

  if (gameState === "menu") {

    background(255, 255, 0);

    introLogo.visible = false;
    start.visible = true;
    guide.visible = true;
    menuIMG.visible = true;
    menuBG.visible = true;


    if (mousePressedOver(start)) {
      gameState = "startBB";
    }
    if (mousePressedOver(guide)) {
      gameState = "guideBB";
    }
  }

  

  if (gameState === "startBB") {
    background(255, 225, 0);
    introLogo.visible = false;
    start.visible = false;
    guide.visible = false;
    menuIMG.visible = false;


  }
  
  
  if (gameState === "guideBB") {
    background(255, 225, 0);
    introLogo.visible = false;
    start.visible = false;
    guide.visible = false;
    menuIMG.visible = false;

  }


  drawSprites();

}