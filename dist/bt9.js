"use strict";
class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
    }
    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
}
class Library {
    constructor() {
        this._books = [];
    }
    addBook(book) {
        this._books.push(book);
    }
    viewBooks() {
        console.log("Danh sách các sách trong thư viện:");
        this._books.forEach((book) => {
            console.log(`Title - ${book.title}, Author - ${book.author}`);
        });
    }
}
let book1 = new Book("Book 1", "Author 1");
let book2 = new Book("Book 2", "Author 2");
let book3 = new Book("Book 3", "Author 3");
let book4 = new Book("Book 4", "Author 4");
let book5 = new Book("Book 5", "Author 5");
let library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.viewBooks();
