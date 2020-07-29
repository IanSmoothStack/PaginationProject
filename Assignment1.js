"use strict";

console.log("Hello there");

//Define object using class
// class Book {
//   constructor(isbn, title, author) {
//     this.isbn = isbn;
//     this.title = title;
//     this.author = author;
//   }

//   toString() {
//     return this.isbn + " - " + this.title + " - " + this.author;
//   }

//   static bookInfo() {
//     console.log("This is a static method");
//   }
// }
// const myBook1 = new Book("ISBN-783924", "Harry Potter", "JK Rowling");
// const myBook2 = new Book("ISBN-675742", "Two citys", "Harriot T");
// const myBook3 = new Book("ISBN-883926", "Hitchhicker's Guide", "Douglas Adams");
// const myBook4 = new Book("ISBN-000001", "BB book 1", "Joe Shmoe");
// const myBook5 = new Book("ISBN-000002", "BB book 2", "Joe Shmoe");
// const myBook6 = new Book("ISBN-000003", "BB book 3", "Joe Shmoe");
// const myBook7 = new Book("ISBN-000004", "BB book 4", "Joe Shmoe");

// console.log(myBook3);
// let allBooks = [myBook1, myBook2, myBook3, myBook4, myBook5, myBook6, myBook7];
// console.log(allBooks);

$("li").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});

var booklist = [
  ["ISBN-000001", "BB book 1", "Joe Shmoe"],
  ["ISBN-000002", "BB book 2", "Joe Shmoe"],
  ["ISBN-000003", "BB book 3", "Joe Shmoe"],
  ["ISBN-000004", "BB book 4", "Joe Shmoe"],
  ["ISBN-000005", "BB book 5", "Joe Shmoe"],
  ["ISBN-000006", "BB book 6", "Joe Shmoe"],
  ["ISBN-000007", "BB book 7", "Joe Shmoe"],
  ["ISBN-000008", "BB book 8", "Joe Shmoe"],
  ["ISBN-000009", "BB book 9", "Joe Shmoe"],
  ["ISBN-000010", "BB book 10", "Joe Shmoe"],
  ["ISBN-000011", "BB book 11", "Joe Shmoe"],
  ["ISBN-000012", "BB book 12", "Joe Shmoe"],
  ["ISBN-000013", "BB book 13", "Joe Shmoe"],
  ["ISBN-000014", "BB book 14", "Joe Shmoe"],
  ["ISBN-000015", "BB book 15", "Joe Shmoe"],
  ["ISBN-000016", "BB book 16", "Joe Shmoe"],
  ["ISBN-000017", "BB book 17", "Joe Shmoe"],
  ["ISBN-000018", "BB book 18", "Joe Shmoe"],
  ["ISBN-000019", "BB book 19", "Joe Shmoe"],
  ["ISBN-000020", "BB book 20", "Joe Shmoe"],
  ["ISBN-000021", "BB book 21", "Joe Shmoe"],
  ["ISBN-000022", "BB book 22", "Joe Shmoe"],
  ["ISBN-000023", "BB book 23", "Joe Shmoe"],
  ["ISBN-000024", "BB book 24", "Joe Shmoe"],
  ["ISBN-000025", "BB book 25", "Joe Shmoe"],
  ["ISBN-000026", "BB book 26", "Joe Shmoe"],
  ["ISBN-000027", "BB book 27", "Joe Shmoe"],
  ["ISBN-000028", "BB book 28", "Joe Shmoe"],
  ["ISBN-000029", "BB book 29", "Joe Shmoe"],
  ["ISBN-000030", "BB book 30", "Joe Shmoe"],
];

$(document).ready(function () {
  var table = $("#dt-select").DataTable({
    data: booklist,
    columns: [
      {
        title: "ISBN",
      },
      {
        title: "Title",
      },
      {
        title: "Author",
      },
    ],

    //dom: "rt",
    // dom: '<"row"<"col-sm-4"l><"col-sm-4 text-center"p><"col-sm-4"f>>tip',
    dom: 'rt <"pagination justify-content-center" p>',
    select: true,
    pageLength: 6,
  });
});
