const book1 = {
    bookName: 'War and Peace',
    author: 'Leo Tolstoy',
    publicationDate: 1869,
    pages: 1225,
}

const bookDeskription = (book) => `The book ${book.bookName} was written by ${book.author} in
the year ${book.publicationDate} and have ${book.pages} pages.`;

console.log(bookDeskription(book1));