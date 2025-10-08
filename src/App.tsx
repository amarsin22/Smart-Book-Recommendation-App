import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import FavoriteFilter from './components/FavoriteFilter';

export interface Book {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
}

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [favorites, setFavorites] = useState<Book[]>([]);
  const [filter, setFilter] = useState<'All' | 'Favorites'>('All');

  // Load favorites from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const searchBooks = async (query: string) => {
    if (!query) return setBooks([]);
    try {
      const res = await axios.get(`https://openlibrary.org/search.json?q=${query}`);
      setBooks(res.data.docs.slice(0, 20)); // top 20 results
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const toggleFavorite = (book: Book) => {
    if (favorites.find(fav => fav.key === book.key)) {
      setFavorites(favorites.filter(fav => fav.key !== book.key));
    } else {
      setFavorites([...favorites, book]);
    }
  };

  const displayedBooks = filter === 'All' ? books : favorites;

  return (
    <div className="container">
      <h1>Smart Book Recommendation App</h1>
      <SearchBar onSearch={searchBooks} />
      <FavoriteFilter filter={filter} setFilter={setFilter} />
      <BookList books={displayedBooks} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default App;
