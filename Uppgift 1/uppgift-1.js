"use strict";

function Book(name, category, pages, ISBNnr) {
  this.Title = name;

  this.Topic = category;

  this.Pages = pages;

  this.ISBN = ISBNnr;

  this.getBookInfo = function () {
    return (
      this.Title +
      "\n" +
      this.Topic +
      "\n" +
      this.Pages +
      "\n" +
      this.ISBN +
      "\n"
    );
  };
}

var Books = [];

Books.push(new Book("Johns Book", "Adventure", "152", "54682428"));
Books.push(new Book("Wills Book", "Science", "856", "75295215"));
Books.push(new Book("Reys Book", "Science Fiction", "374", "9523541255"));

let nrOfbooks = prompt("How many book");

for (let i = 0; i < nrOfbooks; i++) {
  var Title = prompt("enter the books name");
  var Topic = prompt("enter the books category");
  var Pages = prompt("enter the books pages");
  var ISBN = prompt("enter the books ISBN number");
  Books.push(new Book(Title, Topic, Pages, ISBN));
}

Books.forEach((book) => {
  console.log(book.getBookInfo());
  console.log("-------");
});
