import React, { useEffect, useState } from "react";
import bookApi from "../api/bookApi";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    bookApi.getAll().then(setBooks).catch(console.error);
  }, []);

  return (
    <div>
      <h2>Danh sách sách</h2>
      <ul>
        {books.map((b) => (
          <li key={b.id}>
            <img src={b.image} alt={b.title} width="50" />
            {b.title} - {b.author} - {b.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Books;
