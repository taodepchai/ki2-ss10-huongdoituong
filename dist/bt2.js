"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let studentList = [];
let student1 = new Student(1, 18, "abcd@gmail.com");
studentList.push(student1);
let student2 = new Student(2, 18, "cd@gmail.com");
studentList.push(student2);
console.log(studentList);
