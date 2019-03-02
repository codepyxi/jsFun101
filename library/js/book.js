// constructor for the book
// NOTE: the parametre "authors" is an array of authors
function Book(authors, title, pageCount, averageRating){
  this.authors = authors;
  this.title = title;
  this.pageCount = pageCount;
  this.averageRating = averageRating;

  // METHOD: isPopular returns the number of authors
  this.isPopular = () => {
    return this.averageRating >= 3;
  }
  // METHOD: numberOfAuthors returns the number of authors
  this.numberOfAuthors = function(){
    return this.authors.length;
  }
  // METHOD: getShortTitle returns the abbreviation of the title words
  this.getShortTitle = function(){
    let words = this.title.split(" ");
    let abbrev = "";
    words.forEach(function(word){
      abbrev += word.charAt(0);
    });
    return abbrev;
  }
}

let arrayOfBooks = [];

function createBookArray (books){
  for(i = 0; i < books.length; i++){
    arrayOfBooks[i] = new Book (books[i].volumeInfo.authors,
                                books[i].volumeInfo.title,
                                books[i].volumeInfo.pageCount,
                                books[i].volumeInfo.averageRating);
  }
}
