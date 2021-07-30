class Tram {
    constructor(x, y, width, height) {
        var options = {
            isStatic: false
        }

        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(myWorld, this.body);
        Body.setMass(this.body, this.body.mass * 5);
        this.img = loadImage('images/coach.png');
        this.width = width;
        this.height = height;
    }
    show() {
        imageMode(CENTER);
        image(this.img, this.body.position.x, this.body.position.y, this.width, this.height)
        // rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}