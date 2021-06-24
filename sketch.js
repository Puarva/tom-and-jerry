var tom,jerry;
var mouse1Img,mouse2Img,mouse3Img,mouse4Img;
var cat1Img,cat2Img,cat3Img,cat4Img;
var gardenImg;

function preload() {
    //mouse image load
    mouse1Img = loadImage("mouse1.png");
    mouse2IMg = loadImage("mouse2.png");
    mouse3Img = loadImage("mouse3.png");
    mouse4Img = loadImage("mouse4.png");

    //cat image load
    cat1Img = loadImage("cat1.png");
    cat2IMg = loadImage("cat2.png");
    cat3Img = loadImage("cat3.png");
    cat4Img = loadImage("cat4.png");

    //garden image load
    gardenImg = loadImage("garden.png");

}

function setup(){
    createCanvas(1000,800);
   
    //create tom and jerry sprites here
 tom = createSprite(250,200,30,30);

}

function draw() {
    background ("gardenImg");
   
    //Write condition here to evalute if tom and jerry collide
    if(cat1Img.x < (cat.width - mouse1Img.width) / 2){
        cat2Img.addAnimation("catHappy",cat3Img);
        cat2Img.changeAnimation("catHappy");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse1Img.addAnimation("mouseTeasing",mouse2Img);
    mouse1Img.changeAnimation("mouseTeasing");
    mouse1Img.frameDelay = 25;
}

}
