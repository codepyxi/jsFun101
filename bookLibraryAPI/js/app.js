// TESTING PAGE
// the logic to transform data and to create object

// books is defined in bookData.js
let myBooks = [];
let myLibrary;

// *******
function sortLibrary(){
  myLibrary.alphaSort();
  myLibrary.libraryToHTML();
}

function sortByPrice(){
  // sortByPrice() is a method of my library class
  myLibrary.sortPrices();
}

// *******
// Step 1) call findBook
function findBook() {
  let phrase = getPhrase();
  let urlStr = createURL(phrase);
  sendRequest(urlStr);
}

// Step 2) Send request to the API
function sendRequest(urlStr) {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", urlStr);
    oReq.send();
}

// Step 3) Parse the JSON && call showResult() && create book object && create library with myBooks
function reqListener () {
  let list = JSON.parse(this.responseText);
    createBookObject(list.items);
    showResult(myBooks);
    myLibrary = createLibrary(myBooks);
  }

  function showResult(collectionOfBooks) {
    let result = '';
    collectionOfBooks.forEach((book) => {
      result += `<div>
      <span>Title: ${book.title}</span><br/>
      <span>Description: ${book.description}</span><br/>
      <span><img src='${book.thumbnail}'/></span><br/>
      <span>Price: ${book.price}</span><br/>
      <span>Author(s): ${book.authors}</span><br/><br/>
      </div>`
    });
    $("#books").html(result);
  }

// METHOD checkStuff verifies if the attribute is undefined.
// If the attribute is undefined then set it as 'N/A'
function checkSaleability(book){
  if(book.saleInfo.saleability === "NOT_FOR_SALE"){
    return "N/A";
  }
  else{
    return book.saleInfo.listPrice.amount;
  }
}

// call creatBookObject
function createBookObject(list){
  list.forEach(function(item) {
  // Book constructor is in book.js
  let temp = new Book(item.volumeInfo.title,
                          item.volumeInfo.description,
                          item.volumeInfo.imageLinks.smallThumbnail,
                          checkSaleability(item),
                          item.volumeInfo.authors);
  myBooks.push(temp);
  });
  // createLibrary(myBooks);
}

// Call createLibrary
function createLibrary(myBooks){
  let concordiaLibrary = new Library(myBooks);
  console.log(concordiaLibrary.printTitles());
  return concordiaLibrary;
}


function getPhrase() {
  let phrase = $('#phrase').val();
  return phrase;
}

function createURL(phrase) {
  return `https://www.googleapis.com/books/v1/volumes?q=${phrase}`;
}


function showBooks (library) {
  let result = library.libaryToHTML();
  $("#books").html(result);
}
