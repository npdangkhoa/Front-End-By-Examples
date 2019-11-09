class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        console.log("X: " + this.x + "; Y: " + this.y);
    }
}
let point = new Point(1, 2);
point.x = 2;
point.y = 4;
point.draw();
