"use client";

import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleHomeClick = () => {
    router.push('/');
    window.location.reload(); // Reload to reset to page 1
  };

  return (
    <div className="search-bar-container">
      <h1 
        onClick={handleHomeClick}
        style={{ cursor: 'pointer' }}
        title="Go to Home"
      >
        🔥 DRAC'S POKEDEX
      </h1>
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
