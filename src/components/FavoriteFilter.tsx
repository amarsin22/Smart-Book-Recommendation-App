import React from 'react';

interface FavoriteFilterProps {
  filter: 'All' | 'Favorites';
  setFilter: (filter: 'All' | 'Favorites') => void;
}

const FavoriteFilter: React.FC<FavoriteFilterProps> = ({ filter, setFilter }) => {
  return (
    <div className="favorite-filter">
      <label>View: </label>
      <select value={filter} onChange={(e) => setFilter(e.target.value as 'All' | 'Favorites')}>
        <option value="All">All Books</option>
        <option value="Favorites">Favorites</option>
      </select>
    </div>
  );
};

export default FavoriteFilter;
