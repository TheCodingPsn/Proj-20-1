var cat, mouse;
var catImg, mouseImg;
function preload() {
    //load the images here

    catImg = loadImage("cat2.png")
    mouseImg = loadImage("mouse2.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat = createSprite(800, 400, 100, 50);
cat.addImage("cats", catImg);
cat.scale = 0.25
cat.setCollider("rectangle", 0, 0, 100, 50)
//cat.debug = true;


mouse = createSprite(500, 400, 30, 30);
mouse.addImage("mice", mouseImg);
mouse.scale = 0.15
//mouse.debug = true;
}

function draw() {
    background(0, 255, 255);
    //Write condition here to evalute if tom and jerry collide

    cat.velocityX = -5;

if(cat.isTouching(mouse)){
    cat.velocityX = 0;
    
}

//console.log(frameCount);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
