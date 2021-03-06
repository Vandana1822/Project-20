var catStill;
var catRunning;
var catSmiling;
var mouseStill;
var mouseTeasing;
var mouseMirror;
var backgroundImage;

function preload() {
 backgroundImage= loadImage("images/garden.png");
 catStill = loadAnimation("images/cat1.png");
 catRunning= loadAnimation("images/cat2.png","images/cat3.png");
 catSmiling= loadAnimation("images/cat4.png");
 mouseStill = loadAnimation("images/mouse1.png");
 mouseTeasing= loadAnimation("images/mouse2.png","images/mouse3.png");
 mouseMirror= loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
   
    cat = createSprite(870, 600);
    cat.addAnimation("catSleeping", catStill);
    cat.changeAnimation("catSleeping", catStill);
    
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("mouseStill", mouseStill);
    mouse.changeAnimation("mouseStill", mouseStill);
    mouse.scale = 0.15;

}
function draw() {

    background(backgroundImage);
 
    if(cat.x-(mouse.x-300)<cat.width/2+mouse.width/2){
        cat.velocityX=0
        cat.addAnimation("catSmiling",catSmiling) ;
        cat.changeAnimation("catSmiling",catSmiling) ;
        cat.scale = 0.2;
        mouse.addAnimation("mousewithmirror",mouseMirror);
        mouse.changeAnimation("mousewithmirror",mouseMirror);
        mouse.scale = 0.15;
    }

    drawSprites();
}

function keyPressed(){
if (keyCode===LEFT_ARROW){
    cat.velocityX= -10;
    cat.addAnimation("catRunning",catRunning);
    cat.changeAnimation("catRunning",catRunning);
    mouse.addAnimation("mouseTeasing",mouseTeasing);
    mouse.changeAnimation("mouseTeasing",mouseTeasing);

  }
}
