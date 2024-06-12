import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePokemonStore = create(
  persist(
    (set) => ({
      caughtPokemon: [],
      catchPokemon: (pokemon) =>
        set((state) => {
          if (state.caughtPokemon.find((p) => p.id === pokemon.id)) {
            alert(`${pokemon.name} is already caught!`);
            return state;
          }
          return { caughtPokemon: [...state.caughtPokemon, pokemon] };
        }),
      releasePokemon: (id) =>
        set((state) => ({
          caughtPokemon: state.caughtPokemon.filter((pokemon) => pokemon.id !== id),
        })),
    }),
    {
      name: 'pokemon-store', // Name of the localStorage key
      getStorage: () => localStorage, // Using localStorage for data persistence
    }
  )
);

export default usePokemonStore;
