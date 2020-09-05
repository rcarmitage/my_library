import React from "react";

const BookItem = ({ book }) => {
  const { id, title, author, year, fiction } = book;

  return (
    <div className="book-info">
      <h4>{title}</h4>
      <h5>
        {author} | {year} | {fiction === true ? "Fiction" : "Non-fiction"}
      </h5>
    </div>
  );
};

export default BookItem;
