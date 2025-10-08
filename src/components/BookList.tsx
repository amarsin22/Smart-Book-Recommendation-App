import React from 'react';
import { Book } from '../App';
import BookCard from './BookCard';

interface BookListProps {
  books: Book[];
  favorites: Book[];
  toggleFavorite: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, favorites, toggleFavorite }) => {
  if (books.length === 0) return <p className="no-books">No books found.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard
          key={book.key}
          book={book}
          isFavorite={!!favorites.find(fav => fav.key === book.key)}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};

export default BookList;
