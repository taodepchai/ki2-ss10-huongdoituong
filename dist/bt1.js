"use strict";
class Vehicle1 {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
}
let car1 = new Vehicle1("Car1", 2020, "toyota");
let car2 = new Vehicle1("Car2", 2019, "merc");
console.log("Car1:", car1.name, car1.year, car1.company);
console.log("Car2:", car2.name, car2.year, car2.company);
