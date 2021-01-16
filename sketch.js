const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1, ground2;
var polygon, slingshot;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16, block17, block18;
var polygon_img;

function preload() {
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground1 = new Ground(500,365,230,10);

    ground2 = new Ground(800,200,190,10);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    imageMode(CENTER)
    image(polygon_img, polygon.position.x, polygon.position.y, 40, 40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(this.polygon,{x:100, y:200});

    block8 = new Block(330,235,30,40);
}

function draw(){
    background("pink");
    Engine.update(engine);
    ground1.display();
    ground2.display();
    slingshot.display();    
    polygon.display();
    block8.display();
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body)
    }
}