const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
let engine;
let world;
let canvas;
let backgroundImg;
let ground;
let platform

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
}

function draw() {
    background(backgroundImg);

    ground.display();
    platform.display();

}

