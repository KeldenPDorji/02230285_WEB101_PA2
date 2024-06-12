import React, { useState } from 'react';
import usePokemonStore from '../hooks/usePokemonStore';
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/components/ui/use-toast"; // Import useToast hook

const PokemonCard = ({ pokemon }) => {
  const catchPokemon = usePokemonStore((state) => state.catchPokemon);
  const caughtPokemon = usePokemonStore((state) => state.caughtPokemon);
  const { toast } = useToast(); // Destructure toast function from useToast hook
  const [isShaking, setIsShaking] = useState(false); // State to control shake animation

  const isCaught = caughtPokemon.some(p => p.id === pokemon.id);

  const handleCatch = () => {
    if (isCaught) {
      alert(`${pokemon.name} is already caught!`);
    } else {
      catchPokemon(pokemon);
      setIsShaking(true); // Trigger shake animation
      setTimeout(() => setIsShaking(false), 1000); // Reset shake animation after 1 second
      // Call the toast function to display a toast when a Pokémon is caught
      toast({
        title: "Success!",
        description: `${pokemon.name} caught successfully!`
      });
    }
  };

  const abilities = pokemon.abilities.map((abilityInfo) => abilityInfo.ability.name).join(', ');

  return (
    <div className="pokemon-card">
      <div className="card-header">
        <h3 className="card-title">
          {pokemon.name}
          <img 
            src={isCaught ? "https://www.pinclipart.com/picdir/big/548-5488263_pokeball-pokemon-ball-png-images-free-download-pokemon.png" : "https://cdn.pixabay.com/photo/2019/11/18/15/46/pokemon-4635112_1280.png"} 
            alt={isCaught ? "Caught" : "Catch"} 
            onClick={handleCatch}
            className="catch-button"
          />
        </h3>
      </div>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
        alt={pokemon.name}
        className={`pokemon-image ${isShaking ? 'shake' : ''}`} // Apply shake animation class
      />
      <div className="card-content">
        <p className="abilities">Abilities: {abilities}</p>
        <p className="types">Type: {pokemon.types.map((typeInfo) => typeInfo.type.name).join(', ')}</p>
        <div className="stats">
          <p className="stat">HP: <Progress value={pokemon.stats[0].base_stat} /></p>
          <p className="stat">Attack: <Progress value={pokemon.stats[1].base_stat} /></p>
          <p className="stat">Defense: <Progress value={pokemon.stats[2].base_stat} /></p>
          <p className="stat">Special Attack: <Progress value={pokemon.stats[3].base_stat} /></p>
          <p className="stat">Special Defense: <Progress value={pokemon.stats[4].base_stat} /></p>
          <p className="stat">Speed: <Progress value={pokemon.stats[5].base_stat} /></p>
        </div>
      </div>
      <style jsx>{`
        .pokemon-card {
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 10px;
          margin: 10px;
          width: calc(25% - 20px); /* Adjust based on the number of cards per row */
          box-sizing: border-box;
          display: inline-block;
          overflow: hidden;
        }
        .pokemon-image {
          width: 100%; /* Adjust the size of the image */
          height: auto;
          margin-bottom: 10px;
          display: block;
          margin-left: auto;
          margin-right: auto;
          transition: transform 0.5s ease; // Add transition for smooth animation
        }
        .catch-button {
          width: 30px; /* Decrease width */
          height: 30px; /* Decrease height */
          cursor: pointer;
          margin-left: 10px; /* Add margin to separate from Pokémon name */
        }
        .pokemon-image.shake {
          animation: shake 0.5s ease; // Apply shake animation
        }
        @keyframes shake {
          0% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
          75% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          height: 40px; /* Fixed height for card header */
        }
        .card-title {
          margin: 0;
          font-size: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: flex;
          align-items: center; /* Align button vertically */
        }
        .card-content {
          max-height: 200px; /* Adjust based on the content height */
          overflow-y: auto; /* Make content scrollable */
        }
        .stats {
          margin-bottom: 10px;
        }
        .stat {
          margin-bottom: 5px;
        }
        .abilities {
          margin-bottom: 10px;
        }
        .types {
          margin-bottom: 10px; /* Add margin to separate type from abilities */
        }
        @media (max-width: 768px) {
          .pokemon-card {
            width: calc(50% - 20px); /* Adjust based on the number of cards per row */
          }
        }
        @media (max-width: 480px) {
          .pokemon-card {
            width: calc(100% - 20px); /* Adjust based on the number of cards per row */
          }
        }      
      `}</style>
    </div>
  );
};

export default PokemonCard;
