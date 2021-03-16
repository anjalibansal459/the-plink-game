const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var base
var plinkos=[]
var divisions=[]
var divisionsHeight=300;
var score=0
var count=0
var particles=[]
var particle
var gameState="start"
function setup(){
    createCanvas(1000-200,800)
engine=Engine.create()
world=engine.world
base=new Ground(width/2,790,1000,10)



for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,175));
 }

 for (var j = 75; j <=width; j=j+50) {
     plinkos.push(new Plinko(j,275));
 }

 for (var j = 50; j <=width-10; j=j+50) {
     plinkos.push(new Plinko(j,375));
 }
 for (var k = 0; k <=width; k = k + 100) {
    divisions.push(new Division(k, height-divisionsHeight/2, 10, divisionsHeight));}
}


function draw(){
background(0)
textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
 
  
  text(" 500 ", 5, 550);
  text(" 500 ", 120, 550);
  text(" 500 ", 200, 550);
  text(" 500 ", 300, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 500, 550);
  text(" 100 ", 600, 550);
  text(" 200 ", 700, 550);
  text(" 200 ", 800, 550);

  text(" 200 ", 900, 550);
Engine.update(engine)
if ( gameState =="gameEnd") {
    
  textSize(100);
  text("GameOver", 150, 250);
  //return
}

base.display()

for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();  
 }
 for (var k = 0; k < divisions.length; k++) 
 {
   divisions[k].display();
 }
 if(particle!=null)
    {
       particle.display();
        
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300&&particle.body.position.x >0) 
              {
                  score=score+500;      
                  particle=null;
                  gameState = "end";
                  if ( count>= 5) gameState ="gameEnd";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    particle=null;
                    gameState = "play";
                    if ( count>= 5) gameState ="gameEnd";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    gameState = "play";
                    if ( count>= 5)  gameState ="gameEnd";

              }      
              
        }
  
      }

}


function mousePressed()
{
  if(gameState !== "gameEnd");
  {
     count++
     particle=new Particle(random(100,800), 10, 10, 10);
     gameState = "end"; 
  }   
}