const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); 

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/library'; 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));

// Book Schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const Book = mongoose.model('books', bookSchema);//naya model create kar diya hai representing any document inside the collection books under the library database

// API Endpoint to retrieve all books
  app.get('/api/books', async (req, res) => {
    try {
      const books = await Book.find({}); //ye saare documents le aayega books collection present in the library databse
      res.json(books); //json mein convert kar rha hai
    } catch (err) {
      res.status(500).json({ error: 'Error retrieving books from the database' });
    }
  });

//API Endpoint to add a new book
app.post('/api/books', async (req, res) => {
  const { title, author } = req.body;

  try {
    // Check if the book already exists
    const existingBook = await Book.findOne({ title });

    if (existingBook) {
      return res.status(400).json({ error: 'Book already exists' });
    }

    // Create a new book and save it to the database
    const newBook = new Book({ title, author });
    await newBook.save();
    
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: 'Error adding the book to the database' });
  }
});

//API endpoint for updating the book as per the id
app.put('/api/books/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  try {
    // Check if the book exists
    const book = await Book.findById(id);

    if (!book) {
      return res.status(404).json({ error: 'Book not found' });
    }

    // Update book details
    book.title = title || book.title; //ye set kardeta hai nayi value se agar book.title naya nahi provide kiya toh nahi toh as it is
    book.author = author || book.author;
    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: 'Error updating book details' });
  }
});



// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
