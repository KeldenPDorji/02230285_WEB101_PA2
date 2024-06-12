"use client";

import React, { useState } from 'react';
import usePokemonStore from '../hooks/usePokemonStore';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const CaughtPokemonModal = ({ isOpen, onClose }) => {
  const caughtPokemon = usePokemonStore((state) => state.caughtPokemon);
  const releasePokemon = usePokemonStore((state) => state.releasePokemon);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  if (!isOpen) return null;

  const handleCloseModal = () => {
    setCurrentPage(1); // Reset to first page when closing
    onClose();
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = caughtPokemon.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(caughtPokemon.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleRemove = (pokemon) => {
    releasePokemon(pokemon.id);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={handleCloseModal}>&times;</span>
        <h2>Caught Pokémon</h2>
        <ul>
          {currentItems.map((pokemon) => (
            <li key={pokemon.id} className="caught-pokemon-item">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              <span>{pokemon.name}</span>
              <button onClick={() => handleRemove(pokemon)}>
                <img
                  src="https://www.pinclipart.com/picdir/big/92-922332_pokeball-clipart-opened-pokemon-ball-open-png-transparent.png"
                  alt="Remove"
                  style={{ width: '24px', height: '24px' }}
                />
              </button>
            </li>
          ))}
        </ul>
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
            </PaginationItem>
            {[...Array(totalPages)].map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <style jsx>{`
        .modal {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed;
          z-index: 1;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0,0,0);
          background-color: rgba(0,0,0,0.4);
        }
        .modal-content {
          background-color: #fefefe;
          margin: 15% auto;
          padding: 20px;
          border: 1px solid #888;
          width: 80%;
          max-width: 500px;
          position: relative;
        }
        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }
        .close:hover,
        .close:focus {
          color: black;
          text-decoration: none;
          cursor: pointer;
        }
        .caught-pokemon-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 10px 0;
        }
        .caught-pokemon-item img {
          margin-right: 10px;
        }
      `}</style>
    </div>
  );
};

export default CaughtPokemonModal;
