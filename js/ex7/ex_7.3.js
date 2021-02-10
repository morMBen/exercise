const book1 = {
    bookName: 'War and Peace',
    author: 'Leo Tolstoy',
    publicationDate: 1869,
}
const book2 = {
    bookName: 'Etz Chaim',
    author: 'Rabbi Isaac Luria',
    publicationDate: 1573,
}
let bookUtils = {};

bookUtils.setNewEdition = function (book, editionYear) {
    book.latestEdition = editionYear;
}

bookUtils.setNewEdition(book1, 1982);
console.log(book1);

bookUtils.setLanguage = function (book, language,) {
    book.language = language;
}
bookUtils.setTranslation = function (book, language, translator) {
    book.translator = {
        translator, language,
    };
}

bookUtils.setPublisher = function (book, name, location) {
    book.namedPublisher = {
        name, location,
    };
}
bookUtils.isSamePublisher = function (book1, book2) {
    if (book1.namedPublisher && book2.namedPublisher) {
        return (book1.namedPublisher.name === book2.namedPublisher.name && book1.namedPublisher.location === book2.namedPublisher.location) ? true : false;
    }
    return false;
};


bookUtils.setLanguage(book1, 'Russian');

bookUtils.setTranslation(book1, 'English', 'Joseph Elijah Triwosch');

bookUtils.setPublisher(book1, 'Hakibut hameuhad', 'Israel');
console.log(bookUtils.isSamePublisher(book1, book2));
bookUtils.setPublisher(book2, 'Hakibut hameuhad', 'Israel');

console.log(book1);
console.log(book2);
console.log(bookUtils.isSamePublisher(book1, book2));
