"use client";

import React, { useState, useEffect } from 'react';
import usePokemonStore from '../hooks/usePokemonStore';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useToast } from "@/components/ui/use-toast";

const CaughtPokemonModal = ({ isOpen, onClose }) => {
  const caughtPokemon = usePokemonStore((state) => state.caughtPokemon);
  const releasePokemon = usePokemonStore((state) => state.releasePokemon);
  const { toast } = useToast();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Close modal when all Pokémon are released
  useEffect(() => {
    if (caughtPokemon.length === 0 && isOpen) {
      onClose();
    }
  }, [caughtPokemon.length, isOpen, onClose]);

  if (!isOpen) return null;

  const handleCloseModal = () => {
    setCurrentPage(1);
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
    toast({
      title: "🔓 Released!",
      description: `${pokemon.name.toUpperCase()} has been released back to the wild.`,
    });
    
    // If we're on a page that will be empty after release, go to previous page
    if (currentItems.length === 1 && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 9999,
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      overflow: 'auto',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      backdropFilter: 'blur(8px)'
    }}>
      <div style={{
        background: 'linear-gradient(145deg, rgba(26, 11, 46, 0.95), rgba(22, 0, 30, 0.95))',
        margin: '2rem auto',
        padding: '2rem',
        border: '2px solid rgba(138, 43, 226, 0.5)',
        borderRadius: '20px',
        width: '90%',
        maxWidth: '700px',
        position: 'relative',
        boxShadow: '0 20px 60px rgba(138, 43, 226, 0.4), 0 0 40px rgba(138, 43, 226, 0.2)'
      }}>
        <span 
          onClick={handleCloseModal}
          style={{
            color: '#ff00ff',
            position: 'absolute',
            right: '1.5rem',
            top: '1.5rem',
            fontSize: '2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textShadow: '0 0 10px rgba(255, 0, 255, 0.6)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.2) rotate(90deg)';
            e.target.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1) rotate(0deg)';
            e.target.style.color = '#ff00ff';
          }}
        >
          &times;
        </span>
        
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '2rem',
          fontWeight: '700',
          color: '#ff00ff',
          textAlign: 'center',
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '0 0 20px rgba(255, 0, 255, 0.6)'
        }}>
          ⚡ Caught Pokémon
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          {currentItems.map((pokemon) => (
            <div 
              key={pokemon.id}
              style={{
                background: 'linear-gradient(145deg, rgba(138, 43, 226, 0.2), rgba(157, 78, 221, 0.1))',
                border: '2px solid rgba(138, 43, 226, 0.3)',
                borderRadius: '15px',
                padding: '1rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(138, 43, 226, 0.5)';
                e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
              }}
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                style={{
                  width: '100px',
                  height: '100px',
                  filter: 'drop-shadow(0 0 15px rgba(138, 43, 226, 0.4))'
                }}
              />
              <span style={{
                color: '#e0e0e0',
                fontWeight: '600',
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                {pokemon.name}
              </span>
              <button 
                onClick={() => handleRemove(pokemon)}
                style={{
                  background: 'linear-gradient(135deg, rgba(220, 20, 60, 0.3), rgba(255, 0, 0, 0.3))',
                  border: '2px solid rgba(220, 20, 60, 0.5)',
                  borderRadius: '10px',
                  padding: '0.5rem 1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  marginTop: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, rgba(220, 20, 60, 0.6), rgba(255, 0, 0, 0.6))';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, rgba(220, 20, 60, 0.3), rgba(255, 0, 0, 0.3))';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                Release
              </button>
            </div>
          ))}
        </div>
        
        {totalPages > 1 && (
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => handlePageChange(currentPage - 1)} 
                  disabled={currentPage === 1} 
                />
              </PaginationItem>
              {[...Array(totalPages)].map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    onClick={() => handlePageChange(index + 1)} 
                    className={currentPage === index + 1 ? 'active' : ''}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext 
                  onClick={() => handlePageChange(currentPage + 1)} 
                  disabled={currentPage === totalPages} 
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default CaughtPokemonModal;
