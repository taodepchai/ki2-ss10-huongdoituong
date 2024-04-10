class Student {
    id:number;
    age: number;
    email: string;

    constructor(id:number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}

let studentList:Student[] = [];

let student1 = new Student(1,18,"abcd@gmail.com");
studentList.push(student1);


let student2 = new Student(2,18,"cd@gmail.com");
studentList.push(student2);
console.log(studentList);
