// TESTING PAGE
// the logic to transform data and to create object

// books is defined in bookData.js
let myBooks = [];
let myLibrary;

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
    myLibrary.alphaSort();
  }

  function showResult(collectionOfBooks) {
    let result = '';
    collectionOfBooks.forEach((book) => {
      result += `<div>
      <span>${book.title}</span><br/>
      <span>${book.description}</span><br/>
      <span><img src='${book.thumbnail}'/></span><br/>
      <span>${book.amount}</span><br/>
      <span>${book.authors}</span><br/><br/>
      </div>`
    });
    $("#books").html(result);
  }

// call creatBookObject
function createBookObject(list){
  list.forEach(function(item) {
  // Book constructor is in book.js
  let temp = new Book(item.volumeInfo.authors,
                          item.volumeInfo.title,
                          item.volumeInfo.pageCount,
                          item.volumeInfo.averageRating);
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

function sortedLibrary(library){
  library.alphaSort();
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
