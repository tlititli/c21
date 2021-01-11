var fixedRect;
var movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4,

function setup() {
  createCanvas(1200,800);
gameObject1 = createSprite(100,100,50,50);
gameObject1.shapeColor = "yellow"
gameObject2 = createSprite(200,100,50,50);
gameObject2.shapeColor = "red"
gameObject3 = createSprite(300,100,50,50);
gameObject3.shapeColor = "purple"
gameObject4 = createSprite(400,100,50,50);
gameObject4.shapeColor = "pink"
fixedRect = createSprite(200,200,50,80)
fixedRect.shapeColor = "green"
fixedRect.debug = true
movingRect = createSprite(400,200,80,30)
movingRect.shapeColor = "green"
movingRect.debug = true
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(fixedRect,gameObject1)){
    movingRect.shapeColor = "blue"
    fixedRect.shapeColor = "blue"
  }
  else{
    movingRect.shapeColor = "green"
    fixedRect.shapeColor = "green"
  }
  drawSprites();

}

function isTouching(object1,object2){
  if(object1.x -object2.x < object2.width/2 +object1.width/2 
    && object2.x -object1.x < object2.width/2 +object1.width/2
    && object1.y -object2.y < object2.height/2 +object1.height/2 
    && object2.y -object2.y < object2.height/2 +object1.height/2  ){
  return true;
    }
else{
  return false
}
}