class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(` Book "${this.title}" is already issued.`);
        } else {
            this.isIssued = true;
            console.log(` Book "${this.title}" issued successfully.`);
        }
    }

    // Method to return a book
    returnBook() {
        if (!this.isIssued) {
            console.log(` Book "${this.title}" is not issued.`);
        } else {
            this.isIssued = false;
            console.log(` Book "${this.title}" returned successfully.`);
        }
    }
}

// -----------------------------------
// Creating Book Objects
// -----------------------------------
const library = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN001", false),
    new Book("Harry Potter", "J.K. Rowling", "ISBN002", true),
    new Book("Atomic Habits", "James Clear", "ISBN003", false),
    new Book("Think and Grow Rich", "Napoleon Hill", "ISBN004", false),
];


console.log(" Available Books:");
library
    .filter(book => !book.isIssued)
    .forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}`);
    });

function issueByISBN(isbn) {
    const book = library.find(b => b.isbn === isbn);

    if (!book) {
        console.log(` No book found with ISBN: ${isbn}`);
        return;
    }

    book.issueBook();
}


console.log("\nTrying to issue ISBN003...");
issueByISBN("ISBN003");

console.log("\nTrying to issue ISBN002...");
issueByISBN("ISBN002");
