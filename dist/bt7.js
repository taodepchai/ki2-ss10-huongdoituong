"use strict";
class Circle {
    constructor(_radius) {
        this._radius = _radius;
    }
    perimeter() {
        return Math.PI * 2 * this._radius;
    }
    area() {
        return Math.PI * this._radius * this._radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
}
let circle = new Circle(4);
console.log(circle.radius);
console.log(circle.perimeter());
console.log(circle.area());
circle.radius = 5;
console.log(circle.perimeter());
console.log(circle.area());
