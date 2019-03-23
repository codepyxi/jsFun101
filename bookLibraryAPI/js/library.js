//constructor for the library
function Library (books) {
  // Attribute : books is a collection of books
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

  // METHOD alphaSort sorts the books by titles
  this.alphaSort = function(){
    let sortedBookTitles = [];
    let sortedBookArray = [];
    this.books.forEach((book) => {
      if(book.title !== undefined){
        sortedBookTitles.push(book.title);
      }
    });
    // Sort the book array and store it into the sortedBookArray
    sortedBookTitles.sort();
    // Sort the collection of books based on sortedBookTitles
    // OUTER LOOP: Create a sorted array of books based on book titles
    sortedBookTitles.forEach((title) => {
      // INNER LOOP: Matching the book title with the corresponding book object
      this.books.forEach((book) => {
        if(title === book.title){
          sortedBookArray.push(book);
        }
      });
    });

    // Return the sortedBookArray so it can be used in app.js
    // sortedBookArray.forEach((book) => {
    //   book.bookToHTML();
    // });
    return sortedBookArray;
  }

  // METHOD Bubble Sort
  // Source: https://www.w3resource.com/javascript-exercises/javascript-function-exercise-24.php
  this.bubble = function(bookArray){
    let swapp;
    let n = bookArray.length-1;
    let x = bookArray;
    do {
        swapp = false;
        for (let i=0; i < n; i++)
        {
            if (x[i].price < x[i+1].price)
            {
              // Swapping
               let temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x;
}

  // METHOD sortByPrice sorts the books by price (from low to high)
  this.sortPrices = function (){
    let noPriceBooks = [];
    let booksWithPrice= [];

    // Separate books with price and books without price
    this.books.forEach((book)=> {
      if (book.price !== "N/A"){
        booksWithPrice.push(book);
      }
      else{
        noPriceBooks.push(book);
      }
    });

    // Bubble Sorting the books with price
    console.log('Here is the sorted list of books by price (high to low): ');
    let booksByPriceArray = [];
    let sortedByPrice = this.bubble(booksWithPrice);
    sortedByPrice.forEach((book) => {
      booksByPriceArray.push(book);
    });
    noPriceBooks.forEach((book) => {
      booksByPriceArray.push(book);
    });
    return booksByPriceArray;
  }

  // METHOD libraryToHTML displays info on the HTML
  this.libraryToHTML = function () {
    let result = '';
    this.books.forEach((book) => {
      result += book.bookToHTML();
    });
    $("#sorted").html(result);
  }
}
