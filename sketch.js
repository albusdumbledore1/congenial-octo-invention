//Create variables here
var dog, happyDog, database, foodS, foodStock,dogImg;




function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");

}

function setup() {
  createCanvas(500, 500);
  
  dog = createSprite(200,200,20,20);
  dog = addImage("dog",dogImg)
  
}


function draw() {  

  drawSprites();
  dog.display();
  //add styles here

}



