//constructor for the library
function Library (books) {
  this.books = books;

  // METHOD printTitles : iterates over the items in this object and print the “title” of the books
  this.printTitles = function() {
    this.books.forEach((book) => {
      console.log(book.title);
    });
  }
  // METHOD printAuthors: iterates over the items in this object and print the “authors” of the books
  this.printAuthors = function(){
    this.books.forEach((book) => {
      if(book.authors !== undefined){
        for(i = 0; i < book.authors.length; i++){
          console.log(book.authors[i]);
        }
      }
    });
  }
  // METHOD findShortest return the title of the book with the minimum number of “pageCount”
  this.findShortest = function(){
    let bookIndex = 0;
    let shortestPageCount = books[0].pageCount;
    for(i = 1; i < books.length; i++){
      let currentPageCount = books[i].pageCount;
      if (currentPageCount < shortestPageCount){
        shortestPageCount = currentPageCount;
        bookIndex = i;
      }
      return books[bookIndex].title;
    }
  }
  // METHOD findGoodBooks where it returns an array consisting the title of the books with averageRating >= 3
  this.findGoodBooks = function(){
    let goodBooksTitles = [];
    for (i = 0; i < books.length; i++){
      if(books[i].averageRating >= 3){
        goodBooksTitles.push(books[i].title);
      }
    }
    return goodBooksTitles;
  }
  // METHOD findAuthors returns an object, where the keys are the name of the books and the values are an array consisting the authors of that book
  this.findAuthors = function (){
    let pairsTitleAuthors = {};
    books.forEach((book) => {
      pairsTitleAuthors[book.title] = book.authors;
    });
    return pairsTitleAuthors;
  }
}
