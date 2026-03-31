const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let engine;
let world;
let canvas;
let backgroundImg;
let ground;
let platform;
let box1;
let box2;
let pig1;
let log1;

function preload() {
    backgroundImg = loadImage("./assets/bg.png");
}

function setup() {
    canvas  = createCanvas(1200, 400);
    canvas.position(15, 70);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, height, 1200, 20);
    platform = new Ground(150, 305, 300, 170);
    box1 = new Box(700, 320, 70, 70);
    box2 = new Box(920, 320, 70, 70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810, 260, 300, PI /2);
}

function draw() {
    background(backgroundImg);

    ground.display();
    platform.display();
    box1.display();
    box2.display();
    pig1.display();
    pig1.score();
    log1.display();

}

