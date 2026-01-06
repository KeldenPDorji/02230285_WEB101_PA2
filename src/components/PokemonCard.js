import React, { useState } from 'react';
import usePokemonStore from '../hooks/usePokemonStore';
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast";

const PokemonCard = ({ pokemon }) => {
  const catchPokemon = usePokemonStore((state) => state.catchPokemon);
  const caughtPokemon = usePokemonStore((state) => state.caughtPokemon);
  const { toast } = useToast();
  const [isShaking, setIsShaking] = useState(false);

  const isCaught = caughtPokemon.some(p => p.id === pokemon.id);

  const handleCatch = () => {
    if (isCaught) {
      toast({
        title: "Already Caught!",
        description: `${pokemon.name.toUpperCase()} is already in your collection!`,
        variant: "destructive"
      });
    } else {
      catchPokemon(pokemon);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      toast({
        title: "⚡ SUCCESS!",
        description: `${pokemon.name.toUpperCase()} caught successfully!`
      });
    }
  };

  const abilities = pokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).join(', ');
  const types = pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ');

  return (
    <div className="pokemon-card">
      <div className="card-header">
        <h3 className="card-title">
          {pokemon.name}
        </h3>
        <img 
          src={isCaught 
            ? "https://www.pinclipart.com/picdir/big/548-5488263_pokeball-pokemon-ball-png-images-free-download-pokemon.png" 
            : "https://cdn.pixabay.com/photo/2019/11/18/15/46/pokemon-4635112_1280.png"
          } 
          alt={isCaught ? "Caught" : "Catch"} 
          onClick={handleCatch}
          className="catch-button"
        />
      </div>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
        alt={pokemon.name}
        className={`pokemon-image ${isShaking ? 'shake' : ''}`}
      />
      <div className="card-content">
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
