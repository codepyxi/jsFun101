// constructor for the book
// NOTE: the parametre "authors" is an array of authors
function Book(title, description, thumbnail, price, authors){
  this.title = title;
  this.description = description;
  this.thumbnail = thumbnail;
  this.price = price;
  this.authors = authors;

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

  // METHOD checkIfDefined generic function that checks if the book attribute is defined
  this.checkIfDefined = function(bookAttribute){
    if(bookAttribute !== undefined){
      return bookAttribute;
    }
    else{
      return "undefined";
    }
  }

  // METHOD bookToHTML displays book in the HTML
  this.bookToHTML = function () {
    let title = this.checkIfDefined(this.title);
    title = this.highlight(title);
    let description = this.checkIfDefined(this.description);
    description = this.highlight(description);
    let thumbnail = this.checkIfDefined(this.thumbnail);
    let price = this.checkIfDefined(this.price);
    let authors = this.checkIfDefined(this.authors);
    return `<div>
    <span>Title: ${title}</span><br/>
    <span>Description: ${description}</span><br/>
    <span><img src='${thumbnail}'/></span><br/>
    <span>Price: ${price}</span><br/>
    <span>Author(s): ${authors}</span><br/><br/>
    </div>`
  }

  // METHOD highlight
  // Source: https://stackoverflow.com/questions/8644428/how-to-highlight-text-using-javascript
  this.highlight = function(text) {
  var inputText = $('#phrase').val();
  var index = text.toLowerCase().indexOf(inputText);
  if (index >= 0) {
   text = text.substring(0,index) + "<span class='highlight'>" + text.substring(index,index+inputText.length) + "</span>" + text.substring(index + inputText.length);
   return text;
  }
}
}
