var car, car2, car3, wall; 
var speed, speed2, speed3;
var weight, weight2, weight3;
var deformation, deformation2, deformation3;

function setup() {
  createCanvas(1600,900);
  car = createSprite(800, 50, 60, 60);
  car.shapeColor = ("lightblue"); 

  car2 = createSprite(400, 50, 60, 60);
  car2.shapeColor = ("lightblue"); 

  car3 = createSprite(1200, 50, 60, 60);
  car3.shapeColor = ("lightgreen"); 

  wall = createSprite(750, 650, 1400, 60);
  wall.shapeColor = ("yellow");
// this given values for speed, weight and deformation are cutomised a bit
// as it should be practically visible
  speed = random(40 , 50);
  speed2 = random(40 , 50);
  speed3 = random(40 , 50);
  weight = random(20,40);
  weight2 = random(20,40);
  weight3 = random(20,40);
  deformation = (0.5 * weight * speed * speed/225);
  deformation2 = (0.5 * weight2 * speed2 * speed2/225);
  deformation3 = (0.5 * weight3 * speed3 * speed3/225);


}  

function draw() {
  background(0);
  car.depth = wall.depth;
  car.depth += 1;
  
  car.velocityY = speed;

  car2.depth = wall.depth;
  car2.depth += 1;
  
  car2.velocityY = speed2;

  car3.depth = wall.depth;
  car3.depth += 1;
  
  car3.velocityY = speed3;

  // for first car

  if(wall.y - car.y <= car.height/2 + wall.height/2 && deformation>=0)
  {
    // if the deformation is less than 155 the car color will change to green
    // as a safe symbol 
    car.shapeColor = ("green");
    speed = 0;
    car.y = 600
    wall.shapeColor = ("brown");

  }
  if(wall.y - car.y <= car.height/2 + wall.height/2 && deformation<=155)
  {
    // if the deformation is more than 155 the car color will change to green
    // as a unsafe symbol 
    car.shapeColor = ("blue");
    speed = 0;
    car.y = 600
    wall.shapeColor = ("brown");

  }
  if(wall.y - car.y <= car.height/2 + wall.height/2 && deformation>=170)
  {
    // if the deformation is more than 190 the car color will change to green
    // as a critical or dangerous symbol 
    car.shapeColor = ("red");
    speed = 0;
    car.y = 600
    wall.shapeColor = ("brown");

  }


  // for second car
  if(wall.y - car2.y <= car2.height/2 + wall.height/2 && deformation2>=0)
  {
    // if the deformation is less than 155 the car2 color will change to green
    // as a safe symbol 
    car2.shapeColor = ("green");
    speed = 0;
    car2.y = 600
    wall.shapeColor = ("brown");

  }
  if(wall.y - car2.y <= car2.height/2 + wall.height/2 && deformation2>=155)
  {
    // if the deformation is more than 155 the car2 color will change to green
    // as a unsafe symbol 
    car2.shapeColor = ("blue");
    speed = 0;
    car2.y = 600
    wall.shapeColor = ("brown");

  }
  if(wall.y - car2.y <= car2.height/2 + wall.height/2 && deformation2>=170)
  {
    // if the deformation is more than 190 the car2 color will change to green
    // as a critical or dangerous symbol 
    car2.shapeColor = ("red");
    speed = 0;
    car2.y = 600
    wall.shapeColor = ("brown");

  }



  // for third car
  if(wall.y - car3.y <= car3.height/2 + wall.height/2 && deformation3>=0)
  {
    // if the deformation is less than 155 the car3 color will change to green
    // as a safe symbol 
    car3.shapeColor = ("green");
    speed = 0;
    car3.y = 600
    wall.shapeColor = ("brown");

  }

  if(wall.y - car3.y <= car3.height/2 + wall.height/2 && deformation3>=155)
  {
    // if the deformation is more than 155 the car3 color will change to green
    // as a unsafe symbol 
    car3.shapeColor = ("blue");
    speed = 0;
    car3.y = 600
    wall.shapeColor = ("brown");

  }

  if(wall.y - car3.y <= car3.height/2 + wall.height/2 && deformation3>=170)
  {
    // if the deformation is more than 190 the car3 color will change to green
    // as a critical or dangerous symbol 
    car3.shapeColor = ("red");
    speed = 0;
    car3.y = 600
    wall.shapeColor = ("brown");

  }
  drawSprites();
}