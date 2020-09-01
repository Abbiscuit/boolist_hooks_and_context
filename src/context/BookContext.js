import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

// BookContextを作り、exportする
export const BookContext = createContext();

const BookContextProvider = props => {
  const [books, setBooks] = useState([
    { title: 'name of the wind', author: 'patrick rothfuss', id: 1 },
    { title: 'the final empire', author: 'brandon sanderson', id: 2 },
  ]);

  const addBook = (title, author) => {
    // このこのArrayの使い方をしっかりと覚える
    setBooks([...books, { title, author, id: uuidv1() }]);
  };

  const removeBook = id => {
    // このこのFilterの使い方をしっかりと覚える
    // テストに合格した値だけが配列内に残る
    // e.g ID1番の要素を対象とした場合
    //`1は1ではない＝false` `2は1ではない=true`
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
