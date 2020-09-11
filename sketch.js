var bullet, wall, speed,thickness, weight,damage;

function setup() {
  createCanvas(1600, 400);
  thickness=Math.round(random(22,83))
  wall = createSprite(1500,200,thickness,height/2)
  bullet = createSprite(100, height/2,65, 30)

  speed = Math.round(random(223,321))
  weight = Math.round(random(30,52))
bullet.shapeColor='white'
}

function draw() {
  background(0)
  bullet.velocityX = speed
  textSize(30)
  fill('white')
  text('speed:'+speed+'km/h',100,100)
  text('weight:'+weight+'g',100,150)
  text('thickness:'+thickness+'inches',325,100)
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness)
  drawSprites()
  if(collide(bullet,wall)){
    bullet.velocityX=0
    textSize(45)
    if(damage>10){
      wall.shapeColor=rgb(255,0,0)
    }
    if(damage<10){
      wall.shapeColor='green'
    }
  }

  }
   
   
  function collide(o1,o2){
    if (o2.x - o1.x < (o2.width + o1.width) / 2) {
      return true;
    }
    return false;
  }
