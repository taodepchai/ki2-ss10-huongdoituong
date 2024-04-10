class Vehicle2 {
    readonly id:number;
    public name: string;
    protected year: number;
    private company: string;

    constructor(id:number,name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printVehicle(): void{
        console.log(`id:${this.id} name:${this.name} year:${this.year} company:${this.company}`);
    }
}

let car = new Vehicle2(1,"aaaa",2011,"bbbb");
car.printVehicle(); // ok

console.log(`id:${car.id} name:${car.name} year:${car.year} company:${car.company}`); // lỗi vì year và company chỉ có thể truy cập từ bên trong class và ở các class con của nó

