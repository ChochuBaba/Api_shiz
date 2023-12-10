import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [updateBook, setUpdateBook] = useState({ id: '', title: '', author: '' });

  const fetchBooks = () => {
    fetch('/api/books')
      .then(res => res.json())
      .then(data => {
        setBooks(data);
      })
      .catch(err => console.error('Error fetching data:', err));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setNewBook(prevBook => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    fetch('/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBook),
    })
      .then(res => {
        if (res.ok) {
          fetchBooks();
          setNewBook({ title: '', author: '' });
        } else {
          return res.json().then(data => {
            throw new Error(data.error);
          });
        }
      })
      .catch(err => console.error('Error adding book:', err));
  };

  const handleUpdateInputChange = e => {
    const { name, value } = e.target;
    setUpdateBook(prevBook => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleUpdateFormSubmit = e => {
    e.preventDefault();

    fetch(`/api/books/${updateBook.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: updateBook.title,
        author: updateBook.author,
      }),
    })
      .then(res => {
        if (res.ok) {
          fetchBooks();
          setUpdateBook({ id: '', title: '', author: '' });
        } else {
          return res.json().then(data => {
            throw new Error(data.error);
          });
        }
      })
      .catch(err => console.error('Error updating book:', err));
  };

  return (
    <div>
      <h1>Library Books</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={newBook.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Author"
          name="author"
          value={newBook.author}
          onChange={handleInputChange}
        />
        <button type="submit">Add Book</button>
      </form>

      <ul>
        {books.map(book => (
          <li key={book._id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
