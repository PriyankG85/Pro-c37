class Chain {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5
        }
        // this.sling1 = loadImage('sprites/sling1.png');

        this.chain = Constraint.create(options);
        World.add(myWorld, this.chain);
    }

    show() {
        // image(this.sling1,200,20);


        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;

        stroke('black');
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);

    }

}