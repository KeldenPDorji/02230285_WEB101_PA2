import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const usePokemonStore = create(
  persist(
    (set) => ({
      caughtPokemon: [],
      catchAttempts: {}, // Track catch attempts per Pokémon ID
      
      catchPokemon: (pokemon) =>
        set((state) => {
          if (state.caughtPokemon.find((p) => p.id === pokemon.id)) {
            return state; // Already caught
          }
          return { caughtPokemon: [...state.caughtPokemon, pokemon] };
        }),
      
      releasePokemon: (id) =>
        set((state) => ({
          caughtPokemon: state.caughtPokemon.filter((pokemon) => pokemon.id !== id),
          catchAttempts: { ...state.catchAttempts, [id]: 0 }, // Reset attempts on release
        })),
      
      incrementAttempts: (id) =>
        set((state) => ({
          catchAttempts: {
            ...state.catchAttempts,
            [id]: (state.catchAttempts[id] || 0) + 1,
          },
        })),
      
      resetAttempts: (id) =>
        set((state) => ({
          catchAttempts: { ...state.catchAttempts, [id]: 0 },
        })),
    }),
    {
      name: 'pokemon-store',
      getStorage: () => localStorage,
    }
  )
);

export default usePokemonStore;
