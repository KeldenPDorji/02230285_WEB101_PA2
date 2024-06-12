import {create} from 'zustand';

const usePokemonStore = create((set) => ({
  caughtPokemon: [],
  catchPokemon: (pokemon) => set((state) => {
    if (state.caughtPokemon.find(p => p.id === pokemon.id)) {
      alert(`${pokemon.name} is already caught!`);
      return state;
    }
    return { caughtPokemon: [...state.caughtPokemon, pokemon] };
  }),
  releasePokemon: (id) => set((state) => ({
    caughtPokemon: state.caughtPokemon.filter((pokemon) => pokemon.id !== id)
  }))
}));

export default usePokemonStore;
