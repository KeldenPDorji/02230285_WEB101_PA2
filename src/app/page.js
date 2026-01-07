"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import PaginationComponent from '../components/Pagination';
import CaughtPokemonList from '../components/CaughtPokemonList';
import LoadingSpinner from '../components/LoadingSpinner';
import '../styles/index.css';

const PAGE_SIZE = 20;

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Cache for storing fetched Pokémon data
  const pokemonCache = useRef({});
  const abortControllerRef = useRef(null);

  const fetchPokemonList = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      if (searchedPokemon) {
        // Check cache first
        if (pokemonCache.current[searchedPokemon]) {
          setPokemonList([pokemonCache.current[searchedPokemon]]);
          setIsLoading(false);
          return;
        }
        
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
        if (!data.ok) {
          throw new Error('Pokémon not found!');
        }
        const pokemonData = await data.json();
        pokemonCache.current[searchedPokemon] = pokemonData;
        setPokemonList([pokemonData]);
      } else {
        const offset = (currentPage - 1) * PAGE_SIZE;
        
        // Check if this page is cached
        const cacheKey = `page_${currentPage}`;
        if (pokemonCache.current[cacheKey]) {
          setPokemonList(pokemonCache.current[cacheKey]);
          setIsLoading(false);
          return;
        }
        
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${PAGE_SIZE}`);
        if (!data.ok) {
          throw new Error('Failed to fetch Pokémon list');
        }
        const pokemonData = await data.json();
        
        // Fetch all Pokémon details in parallel with optimized error handling
        const detailedPokemonData = await Promise.all(
          pokemonData.results.map(async (pokemon) => {
            try {
              const pokemonDetails = await fetch(pokemon.url);
              if (!pokemonDetails.ok) throw new Error('Failed to fetch details');
              return pokemonDetails.json();
            } catch (err) {
              console.error(`Error fetching ${pokemon.name}:`, err);
              return null;
            }
          })
        );
        
        // Filter out any failed fetches
        const validPokemon = detailedPokemonData.filter(p => p !== null);
        
        // Cache the page data
        pokemonCache.current[cacheKey] = validPokemon;
        setPokemonList(validPokemon);
      }
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      setError(error.message);
      setPokemonList([]);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage, searchedPokemon]);

  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);

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
          <div className={`pokemon-grid ${searchedPokemon ? 'search-result' : ''}`}>
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
