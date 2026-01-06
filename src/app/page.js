"use client";

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import PaginationComponent from '../components/Pagination';
import CaughtPokemonList from '../components/CaughtPokemonList';
import LoadingSpinner from '../components/LoadingSpinner';
import { fetchPokemon } from '../services/fetchHandler';
import '../styles/index.css';

const PAGE_SIZE = 20;

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPokemonList = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (searchedPokemon) {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
        if (!data.ok) {
          throw new Error('Pokémon not found!');
        }
        const pokemonData = await data.json();
        setPokemonList([pokemonData]);
      } else {
        const offset = (currentPage - 1) * PAGE_SIZE;
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PAGE_SIZE}`);
        if (!data.ok) {
          throw new Error('Failed to fetch Pokémon list');
        }
        const pokemonData = await data.json();
        const detailedPokemonData = await Promise.all(
          pokemonData.results.map(async (pokemon) => {
            const pokemonDetails = await fetch(pokemon.url);
            return pokemonDetails.json();
          })
        );
        setPokemonList(detailedPokemonData);
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setError(error.message);
      setPokemonList([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, [currentPage, searchedPokemon]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchedPokemon(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = async (query) => {
    if (query.trim()) {
      setSearchedPokemon(query.toLowerCase());
      setCurrentPage(1);
    } else {
      setSearchedPokemon(null);
      setCurrentPage(1);
    }
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <CaughtPokemonList />
      
      {isLoading ? (
        <LoadingSpinner />
      ) : error ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#ff00ff',
          fontSize: '1.5rem',
          fontWeight: '600',
          textShadow: '0 0 20px rgba(255, 0, 255, 0.6)'
        }}>
          ⚠️ {error}
        </div>
      ) : pokemonList.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#e0e0e0',
          fontSize: '1.2rem'
        }}>
          No Pokémon found. Try a different search!
        </div>
      ) : (
        <>
          <div className="pokemon-grid">
            {pokemonList.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
          {!searchedPokemon && (
            <PaginationComponent 
              totalPages={50}
              currentPage={currentPage} 
              onPageChange={handlePageChange} 
            />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
