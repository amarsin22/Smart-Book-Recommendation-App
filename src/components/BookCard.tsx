import React from 'react';
import { Book } from '../App';

interface BookCardProps {
  book: Book;
  isFavorite: boolean;
  toggleFavorite: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, isFavorite, toggleFavorite }) => {
  const coverUrl = book.cover_i 
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p>Author: {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
        <p>Year: {book.first_publish_year || 'N/A'}</p>
        <button onClick={() => toggleFavorite(book)}>
          {isFavorite ? 'Remove Favorite' : 'Add Favorite'}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
