import React, { useState } from 'react';
import usePokemonStore from '../hooks/usePokemonStore';
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";
import {
  getPokemonRarity,
  getPokeball,
  attemptCatch,
  getShakeCount,
  getCatchMessage,
  getRarityInfo
} from '../utils/catchMechanics';

const PokemonCard = ({ pokemon }) => {
  const catchPokemon = usePokemonStore((state) => state.catchPokemon);
  const caughtPokemon = usePokemonStore((state) => state.caughtPokemon);
  const catchAttempts = usePokemonStore((state) => state.catchAttempts);
  const incrementAttempts = usePokemonStore((state) => state.incrementAttempts);
  const resetAttempts = usePokemonStore((state) => state.resetAttempts);
  
  const { toast } = useToast();
  const [isShaking, setIsShaking] = useState(false);
  const [isCatching, setIsCatching] = useState(false);

  const isCaught = caughtPokemon.some(p => p.id === pokemon.id);
  const attempts = catchAttempts[pokemon.id] || 0;
  const rarity = getPokemonRarity(pokemon);
  const pokeball = getPokeball(rarity);
  const rarityInfo = getRarityInfo(rarity);

  const handleCatch = async () => {
    if (isCaught) {
      toast({
        title: "Already Caught!",
        description: `${pokemon.name.toUpperCase()} is already in your collection!`,
        variant: "destructive"
      });
      return;
    }

    if (isCatching) return; // Prevent multiple clicks during catch attempt

    setIsCatching(true);
    setIsShaking(true);

    // Get shake count based on catch rate
    const shakes = getShakeCount(rarity, attempts);
    
    // Simulate shaking animation (300ms per shake)
    await new Promise(resolve => setTimeout(resolve, shakes * 300));
    
    // Attempt to catch
    const success = attemptCatch(rarity, attempts);
    
    setIsShaking(false);
    
    if (success) {
      // SUCCESS - Caught the Pokémon!
      catchPokemon(pokemon);
      resetAttempts(pokemon.id);
      
      toast({
        title: getCatchMessage(true, pokemon.name, rarity, attempts),
        description: `${rarityInfo.emoji} ${rarityInfo.label} Pokémon caught with ${pokeball.name}!`,
      });
    } else {
      // FAILED - Pokémon escaped!
      incrementAttempts(pokemon.id);
      
      toast({
        title: getCatchMessage(false, pokemon.name, rarity, attempts),
        description: `${rarityInfo.emoji} Try again! Success rate increases with each attempt. (Attempt ${attempts + 1})`,
        variant: "destructive"
      });
    }
    
    setIsCatching(false);
  };

  const abilities = pokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).join(', ');
  const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ');
  
  // Check if name is long (more than 9 characters)
  const isLongName = pokemon.name.length > 9;

  return (
    <div className="pokemon-card">
      <div className="card-header">
        <h3 className={`card-title ${isLongName ? 'long-name' : ''}`}>
          <span className="card-title-text">
            {pokemon.name}
            <span style={{
              fontSize: '0.7rem',
              marginLeft: '0.5rem',
              color: rarityInfo.color,
              textShadow: `0 0 10px ${rarityInfo.color}`
            }}>
              {rarityInfo.emoji}
            </span>
          </span>
        </h3>
        <div style={{ 
          position: 'relative',
          flexShrink: 0,
          width: isCaught ? '60px' : '60px',
          height: isCaught ? '60px' : '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={isCaught 
              ? "https://i.giphy.com/Sd9XrDFZZ0Q0OXAdJM.webp" 
              : pokeball.image
            } 
            alt={isCaught ? "Caught" : pokeball.name} 
            onClick={handleCatch}
            className={isCaught ? '' : `catch-button ${isShaking ? 'shake' : ''}`}
            style={{
              opacity: isCatching ? 0.6 : 1,
              cursor: isCatching ? 'wait' : 'pointer',
              filter: isCaught 
                ? 'drop-shadow(0 0 8px rgba(255, 0, 255, 0.6))' 
                : `drop-shadow(0 0 8px ${pokeball.color})`,
              width: isCaught ? '60px' : '100%',
              height: isCaught ? '60px' : '100%',
              objectFit: 'contain'
            }}
            title={isCaught ? 'Already Caught!' : `Use ${pokeball.name} (${rarityInfo.label})`}
          />
          {!isCaught && attempts > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-8px',
              background: 'linear-gradient(135deg, #ff0000, #ff6b6b)',
              color: 'white',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.7rem',
              fontWeight: 'bold',
              boxShadow: '0 0 10px rgba(255, 0, 0, 0.6)',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>
              {attempts}
            </span>
          )}
        </div>
      </div>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
        alt={pokemon.name}
        className={`pokemon-image ${isShaking ? 'shake' : ''}`}
      />
      <div className="card-content">
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '0.75rem',
          padding: '0.5rem',
          background: `linear-gradient(135deg, ${rarityInfo.color}20, ${rarityInfo.color}10)`,
          borderRadius: '8px',
          border: `1px solid ${rarityInfo.color}40`
        }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            color: rarityInfo.color,
            textShadow: `0 0 10px ${rarityInfo.color}40`
          }}>
            {rarityInfo.emoji} {rarityInfo.label}
          </span>
          <span style={{
            fontSize: '0.75rem',
            color: '#d0d0d0'
          }}>
            {pokeball.name}
          </span>
        </div>
        <p className="abilities"><strong>Abilities:</strong> {abilities}</p>
        <p className="types"><strong>Type:</strong> {types}</p>
        <div className="stats">
          <p className="stat">HP: <Progress value={pokemon.stats[0].base_stat} /></p>
          <p className="stat">Attack: <Progress value={pokemon.stats[1].base_stat} /></p>
          <p className="stat">Defense: <Progress value={pokemon.stats[2].base_stat} /></p>
          <p className="stat">Sp. Atk: <Progress value={pokemon.stats[3].base_stat} /></p>
          <p className="stat">Sp. Def: <Progress value={pokemon.stats[4].base_stat} /></p>
          <p className="stat">Speed: <Progress value={pokemon.stats[5].base_stat} /></p>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
