var planet, planetImg, planetGroup
var rocket, rocketImg;
var space, spaceImg

var gamestate = 'play';
var score = 0;

function preload(){
    planetImg = loadImage("planet-removebg-preview.png");
    rocketImg = loadImage("rocket-removebg-preview.png");
    spaceImg = loadImage("Parallax80.png");

}

function setup() {
    createCanvas(400, 600);

    rocket = createSprite(200, 560, 20, 20);
    rocket.addImage("rocket", rocketImg);
    rocket.scale = 0.5;
    space = createSprite(200, 300, 400, 800);
    space.addImage("space", spaceImg);
    space.scale = 2;
    space.depth -= 20384;
    
    planetGroup = new Group();

    //rocket.debug = true;
    rocket.setCollider("rectangle",0,0,70,200);
    
}

function draw() {
    background("black");
    if(gamestate == 'play'){
    textSize(10);
    fill(255); 
    text("Score: "+score, 50, 100);
        space.depth = rocket.depth
    rocket.depth += 1;
  space.velocityY = 2;
  if (space.y > 400){
      space.y = 200;
  }

    
      if(keyDown("RIGHT_ARROW")){
        rocket.x += 7
  }
  if(keyDown("LEFT_ARROW")){
        rocket.x += -7
  }

      spawnPlanets();

    if(rocket.isTouching(planetGroup)){
        gamestate = 'end';
        
        rocket.destroy();
    }
    
        
        
    
}
    if(gamestate == 'end'){
        space.velocityY = 0;
        planetGroup.destroyEach();
        textSize(30)
        fill(255);
        text("GAME OVER", width/2, height/2);
    }
 

    drawSprites();
}


function spawnPlanets(){
    if(frameCount % 60 == 0){
        planet = createSprite(Math.round(random(100, 400)), -50, 50, 50);
        planet.addImage(planetImg);
        
        planet.scale = 0.2;
        planet.velocityY = 2;
        
        planet.lifetime = 700;
        planetGroup.add(planet)
    }
}