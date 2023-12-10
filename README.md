# Library Management System API

This project is a simple Library Management System API built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:

git clone https://github.com/yourusername/library-management.git
cd library-management

2. Install dependencies:

Do the same for the lib-frnt and in the folder itself which contains the server.js file.
npm install


### Running the Application

1. Start the server:

npm start (this will run the nodemon server.js) 

The server will run on http://localhost:5000 by default.

## API Documentation

### Retrieve All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieves a list of all books in the library.
- **Request:** None
- **Response Format:**
  ```json
  [
    {
      "id": "book_id",
      "title": "Book Title",
      "author": "Author Name"
    },
    {
      "id": "book_id",
      "title": "Book Title",
      "author": "Author Name"
    },
    ...
  ]

  
Certainly! Here's an example of a README.md file you can use for your GitHub repository to provide instructions on running the application, seeding the database, and documenting the APIs:

markdown
Copy code
# Library Management System API

This project is a simple Library Management System API built with Node.js, Express, and MongoDB.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
git clone https://github.com/yourusername/library-management.git
cd library-management

markdown
Copy code

2. Install dependencies:
npm install

markdown
Copy code

### Running the Application

1. Start the server:
npm start

vbnet
Copy code
The server will run on http://localhost:5000 by default.

### Seeding the Database with Mock Data

To seed the database with mock data:

npm run seed

python
Copy code

This command will populate the 'books' collection in the 'library' database with mock book data.

## API Documentation

### Retrieve All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieves a list of all books in the library.
- **Request:** None
- **Response Format:**
  ```json
  [
    {
      "id": "book_id",
      "title": "Book Title",
      "author": "Author Name"
    },
    {
      "id": "book_id",
      "title": "Book Title",
      "author": "Author Name"
    },
    ...
  ]
Response Codes:
200 OK: Successful request.
400 Bad Request: Invalid request payload.
500 Internal Server Error: Server error.


### Update Book Details

- **Endpoint:** `PUT /api/books/{id}`
- **Description:** `Updates the details of a specific book in the library.`
- **Request:**
- {
  "title": "Updated Book Title",
  "author": "Updated Author Name"
  }
- **Response Format:**
  ```json
  {
  "id": "updated_book_id",
  "title": "Updated Book Title",
  "author": "Updated Author Name"
}
Response Codes:
200 OK: Successful request.
400 Bad Request: Invalid request payload.
500 Internal Server Error: Server error.


