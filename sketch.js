var box

function setup() {
  createCanvas(1000,500);
  box = createSprite(500,250)
}

function draw() 
{
  background(0,0,0);
  if (keyDown(RIGHT_ARROW)){
    box.x = box.x + 10
  }

  if (keyDown(LEFT_ARROW)){
    box.x = box.x - 10
  }
drawSprites()
}




