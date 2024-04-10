class Book1 {
    private _title: string;
    private _author: string;
    private _quantity: number;

    constructor(title: string, author: string, quantity: number = 1) {
        this._title = title;
        this._author = author;
        this._quantity = quantity;
    }

    get title(): string {
        return this._title;
    }

    get author(): string {
        return this._author;
    }

    get quantity(): number {
        return this._quantity;
    }

    increaseQuantity(): void {
        this._quantity++;
    }
}

class Library1 {
    private _books: Book1[];

    constructor() {
        this._books = [];
    }

    addBook(book: Book1): void {
        let existingBook = this._books.find(b => b.title === book.title && b.author === book.author);

        if (existingBook) {
            existingBook.increaseQuantity();
        } else {
            this._books.push(book);
        }
    }

    viewBooks(): void {
        this._books.forEach((book) => {
            console.log(`Title - ${book.title}, Author - ${book.author}, Quantity - ${book.quantity}`);
        });
    }
}

let book6 = new Book1("Book 1", "Author 1");
let book7 = new Book1("Book 2", "Author 2");
let book8 = new Book1("Book 1", "Author 1");
let book9 = new Book1("Book 2", "Author 2");
let book10 = new Book1("Book 3", "Author 3");

let library1 = new Library1();

library1.addBook(book6);
library1.addBook(book7);
library1.addBook(book8);
library1.addBook(book9);
library1.addBook(book10);

library1.viewBooks();
