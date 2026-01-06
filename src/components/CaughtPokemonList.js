// CaughtPokemonList.js

import { useState } from 'react';
import usePokemonStore from '../hooks/usePokemonStore';
import CaughtPokemonModal from './CaughtPokemonModal';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

const CaughtPokemonList = () => {
  const caughtPokemon = usePokemonStore((state) => state.caughtPokemon);
  const [showModal, setShowModal] = useState(false);
  const { toast } = useToast();

  const handleViewCaughtPokemon = () => {
    if (caughtPokemon.length === 0) {
      toast({
        title: "⚠️ No Pokémon Caught",
        description: "You haven't caught any Pokémon yet. Start catching to build your collection!",
        variant: "destructive"
      });
    } else {
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="caught-pokemon-list">
      <Button onClick={handleViewCaughtPokemon}>View Caught Pokémon</Button>
      {showModal && (
        <CaughtPokemonModal isOpen={true} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CaughtPokemonList;
