import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  return (
    <li onClick={() => removeBook(book.id)}>
      <span style={{ display: 'block' }} className="title">
        {book.title}
      </span>
      <span style={{ display: 'block' }} className="author">
        {book.author}
      </span>
    </li>
  );
};

export default BookDetails;
