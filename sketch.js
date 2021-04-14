var Tom, Jerry,t1,j1,back,b1,t2,j2,t3,j3
function preload() {
    //load the images here
    b1=loadAnimation("garden.png")
    t1=loadAnimation("cat1.png")
    j1=loadAnimation("mouse1.png")
    j2=loadAnimation("mouse2.png","mouse3.png")
    t2=loadAnimation("cat3.png","cat2.png")
    t3=loadAnimation("cat4.png")
    j3=loadAnimation("mouse4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back=createSprite(500,400,100,100)
    back.addAnimation("back",b1)
    back.scale=1

    Tom=createSprite(800,700,10,10)
    Tom.addAnimation("Cat",t1)
    Tom.scale=0.08

    Jerry=createSprite(200,700,10,10)
    Jerry.addAnimation("O",j1)
    Jerry.scale=0.08
    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if( Tom.x - Jerry.x < (Tom.width-Jerry.width)/2+50) {
        Tom.addAnimation("QWE",t3)
    Tom.changeAnimation("QWE")
   Tom.velocityX=0

   Jerry.addAnimation("EWQ",j3)
   Jerry.changeAnimation("EWQ")
    }
    
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW ) {
    Jerry.addAnimation("QW",j2)
   Jerry.changeAnimation("QW")
   Jerry.frameDelay=25
  }

  if(keyCode === RIGHT_ARROW) {
    Tom.addAnimation("QWqq",t2)
      Tom.changeAnimation("QWqq")
      Tom.frameDelay=25
      Tom.velocityX=-2
  }

  


   

  
  


}
