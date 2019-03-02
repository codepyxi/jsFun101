// TESTING PAGE
// the logic to transform data and to create object

// books is defined in bookData.js
let myBooks = [];
books.forEach(function(item) {
  // Book constructor is in book.js
  let temp = new Book(item.volumeInfo.authors,
                      item.volumeInfo.title,
                      item.volumeInfo.pageCount,
                      item.volumeInfo.averageRating);
  myBooks.push(temp);
});

let concordiaLibrary = new Library(myBooks);
console.log("The titles of all the books are: ");
concordiaLibrary.printTitles();
console.log(myBooks[2].title);

console.log("The authors of all books are: ");
concordiaLibrary.printAuthors();
console.log("The book with the shortest page count is: ", concordiaLibrary.findShortest());
console.log("The list of good books is: ", concordiaLibrary.findGoodBooks());
console.log("The key-value pairs of titles and authors: ", concordiaLibrary.findAuthors());
