// CaughtPokemonList.js

import { useState } from 'react';
import usePokemonStore from '../hooks/usePokemonStore';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import CaughtPokemonModal from './CaughtPokemonModal';
import { Button } from '@/components/ui/button'; // Importing the Button component from Shadcn UI

const CaughtPokemonList = () => {
  const caughtPokemon = usePokemonStore((state) => state.caughtPokemon);
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleViewCaughtPokemon = () => {
    if (caughtPokemon.length === 0) {
      setShowAlert(true);
    } else {
      setShowModal(true);
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="caught-pokemon-list">
      <Button onClick={handleViewCaughtPokemon}>View Caught Pokémon</Button> {/* Using the Button component */}
      {showAlert && (
        <Alert>
          <AlertTitle>Attention!</AlertTitle>
          <AlertDescription>
            You haven&#39;t caught any Pokémon yet. Catch some Pokémon to view them here.
          </AlertDescription>
          <button onClick={handleCloseAlert}>Close Alert</button>
        </Alert>
      )}
      {showModal && (
        <CaughtPokemonModal isOpen={true} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default CaughtPokemonList;
