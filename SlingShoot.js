class SlingShoot {
    constructor(bodyA, pointB) {
        let options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }

        this.sling1 = loadImage("./assets/sling1.png");
        this.sling2 = loadImage("./assets/sling2.png");
        this.sling3 = loadImage("./assets/sling3.png");
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
}