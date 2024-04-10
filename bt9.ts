class Book {
    private _title: string;
    private _author: string;

    constructor(title: string, author: string) {
        this._title = title;
        this._author = author;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }
}

class Library {
    private _books: Book[];

    constructor() {
        this._books = [];
    }

    addBook(book: Book): void {
        this._books.push(book);
    }

    viewBooks(): void {
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
