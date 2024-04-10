

class Department {
    public readonly id:number;
    private name: string;
    private employee:string []; 

    constructor(id:number,name: string,employee:string[]) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe(): void{
        console.log(`id:${this.id} name:${this.name}`);
    }
}

let department = new Department(1,"adcca",["1","3"]);
department.describe();
console.log(department);
