class Library {
    constructor() {
        this.books = [];
    }

    // Add a new book
    addBook(book) {
        this.books.push(book);
    }

    getAvailableBooks() {
        return this.books.filter(book => book.available === true);
    }

    // Find first book by author
    searchByAuthor(author) {
        return this.books.find(book => book.author.toLowerCase() === author.toLowerCase());
    }
}

const myLibrary = new Library();

const book1 = { title: "The Alchemist", author: "Paulo Coelho", available: true };
const book2 = { title: "1984", author: "George Orwell", available: false };
const book3 = { title: "Atomic Habits", author: "James Clear", available: true };

// Adding books to library
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Display all available books
console.log("Available Books:", myLibrary.getAvailableBooks());

// Search by author
console.log("Search Result:", myLibrary.searchByAuthor("James Clear"));
