"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar-container">
      <h1>🔥 DRAC'S POKEDEX</h1>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', width: '100%', maxWidth: '600px' }}>
        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search Pokémon by name or number..."
          className="search-input"
        />
        <Button onClick={handleSearch} className="search-button">Search</Button>
      </div>
    </div>
  );
};

export default SearchBar;
