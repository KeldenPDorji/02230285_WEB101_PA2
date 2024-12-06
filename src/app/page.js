"use client";

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import PokemonCard from '../components/PokemonCard';
import PaginationComponent from '../components/Pagination';
import CaughtPokemonList from '../components/CaughtPokemonList';
import { fetchPokemon } from '../services/fetchHandler';
import '../styles/index.css';

const PAGE_SIZE = 20;

const HomePage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedPokemon, setSearchedPokemon] = useState(null);

  const fetchPokemonList = async () => {
    try {
      if (searchedPokemon) {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchedPokemon}`);
        if (!data.ok) {
          throw new Error('Failed to fetch Pokémon');
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
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, [currentPage, searchedPokemon]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchedPokemon(null);
  };

  const handleSearch = async (query) => {
    setSearchedPokemon(query.toLowerCase());
    setCurrentPage(1);
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <CaughtPokemonList />
      <div className="pokemon-grid">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
      <PaginationComponent 
        totalPages={20} 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default HomePage;
