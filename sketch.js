const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;

let canvas;
let backgroundImg;
let bg;
let ground;
let platform;
let box1;
let box2;
let box3;
let box4;
let box5;
let pig1;
let pig2;
let log1;
let log2;
let log3;
let log4;
let bird1, bird2, bird3, bird4;

let birds = [];

let slingshot;

let gameState = "onSling";

let score = 0;

let birdFlySound, pigShotSound, birdSelectSound;


function preload() {

   // backgroundImg = loadImage("./assets/bg.png");
    getBackgroundImg();

   birdFlySound = loadSound("sounds/bird_flying.mp3");
   pigShotSound = loadSound("sounds/pig_shot.mp3");
   birdSelectSound = loadSound("sounds/bird_select.mp3");
}

function setup() {
    canvas  = createCanvas(1200, 400);
    canvas.position(15, 70);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);

    //primeiro andar
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI /2);

    //segundo andar
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);
    pig2 = new Pig(810, 260);
    log2 = new Log(810, 180, 300, PI /2);

    //teto dos inimigos
    box5 = new Box(810, 160, 70, 70);
    log3 = new Log(760, 120, 150, PI /10);
    log4 = new Log(870, 120, 150, -PI /10);

    //birds
    bird1 = new Bird(200, 50);
    bird2 = new Bird(150, 170);
    bird3 = new Bird(100, 170);
    bird4 = new Bird(50, 170);

    birds.push(bird4, bird3, bird2, bird1);
    /* birds.push(bird3);
    birds.push(bird2);
    birds.push(bird1); */
    

    slingshot = new Slingshot(bird1.body, {x:200, y:50});


}

function draw() {
    background(backgroundImg);

    Engine.update(engine);

    noStroke();
    textFont("Impact");
    textSize(20);
    fill("red");
    text("Score: " + score,  width -300, 20);

    if(birds.length > 0){
        text("Press space key for next bird", width /2 -200, 25);
        text("Bird: " + birds.length, width /2 -100, 60);

    }
    else{
        text("click on reload button to reload the game level", width /2 -200, 70);
    }

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log2.display();

    box5.display();
    log3.display();
    log4.display();

    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();

    platform.display();

    slingshot.display();
}

function mouseDragged() {
        if(gameState !== "launched" && birds.length > 0) {
            let currentBird = birds[birds.length -1];
            Matter.Body.setPosition(currentBird.body, {x: mouseX, y: mouseY});
            // Matter.Body.applyForce(birds[birds.length -1].body, birds[birds.length -1].body.position, {x: 5, y: -5});
            birdSelectSound.play();
            return false; 
        }

}

function mouseReleased() {
    if(birds.length > 0) {
        slingshot.fly();
        birdFlySound.play();
        birds.pop();
        gameState = "launched";
    }

    return false;
}

function keyPressed() {
    if(keyCode === 32 && gameState === "launched" && birds.length > 0) {
        let currentBird = birds[birds.length -1];
        Matter.body.setPosition(currentBird.body, { x: 200, y: 50});
        slingshot.attach(currentBird.body);
        gameState = "onSling";
        birdSelectSound.play();
    }
}

function getBackgroundImg() {
    let hour = new Date().getHours();
    if(hour >= 6 && hour < 18) {
        bg = "assets/bg.png";
    }
    else{
        bg = "assets/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}
