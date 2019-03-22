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

  // METHOD bookToHTML displays book in the HTML
  function bookToHTML () {
    return `<div>
    <span>Title: ${book.title}</span><br/>
    <span>Description: ${book.description}</span><br/>
    <span><img src='${book.thumbnail}'/></span><br/>
    <span>Price: ${book.price}</span><br/>
    <span>Author(s): ${book.authors}</span><br/><br/>
    </div>`
  }
}
