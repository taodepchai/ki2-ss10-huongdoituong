class Rectangle {
    private _height:number;
    private _width:number;
    constructor(_height:number,_width:number) {
        this._height = _height;
        this._width = _width;
    }

    perimeter(): number{
        return (this._width+this._height)*2;
    }

    area():number {
        return this._width*this._height;
    }

    get height(){
        return this._height;
    }

    set height(value:number){
       this._height = value; 
    }

    get width(){
        return this._width;
    }

    set width(value:number){
       this._width = value; 
    }
}

let rectangle= new Rectangle(4,5);
console.log(rectangle.width,rectangle.height);
console.log(rectangle.perimeter());
console.log(rectangle.area());

rectangle.width = 6;
rectangle.height = 7;
console.log(rectangle.width,rectangle.height);
console.log(rectangle.perimeter());
console.log(rectangle.area());




