"use strict";
class Rectangle {
    constructor(_height, _width) {
        this._height = _height;
        this._width = _width;
    }
    perimeter() {
        return (this._width + this._height) * 2;
    }
    area() {
        return this._width * this._height;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
}
let rectangle = new Rectangle(4, 5);
console.log(rectangle.width, rectangle.height);
console.log(rectangle.perimeter());
console.log(rectangle.area());
rectangle.width = 6;
rectangle.height = 7;
console.log(rectangle.width, rectangle.height);
console.log(rectangle.perimeter());
console.log(rectangle.area());
