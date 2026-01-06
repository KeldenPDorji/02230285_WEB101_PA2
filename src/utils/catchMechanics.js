// Pokémon Catch Mechanics Utility

/**
 * Determine Pokémon rarity based on total base stats
 */
export const getPokemonRarity = (pokemon) => {
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const baseExperience = pokemon.base_experience || 0;
  
  // More granular rarity system with 6 tiers
  if (totalStats >= 680 || baseExperience >= 300) {
    return 'mythical'; // Ultra rare Mythical/Legendary
  } else if (totalStats >= 600 || baseExperience >= 250) {
    return 'legendary'; // Legendary
  } else if (totalStats >= 520 || baseExperience >= 220) {
    return 'epic'; // Pseudo-legendary/Epic
  } else if (totalStats >= 450 || baseExperience >= 180) {
    return 'rare'; // Rare
  } else if (totalStats >= 350 || baseExperience >= 130) {
    return 'uncommon'; // Uncommon
  } else {
    return 'common'; // Common
  }
};

/**
 * Get required Pokéball type and image based on rarity
 */
export const getPokeball = (rarity) => {
  const pokeballs = {
    common: {
      name: 'Poké Ball',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
      color: '#EE1515'
    },
    uncommon: {
      name: 'Great Ball',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
      color: '#3B7CEC'
    },
    rare: {
      name: 'Ultra Ball',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
      color: '#F8D030'
    },
    epic: {
      name: 'Timer Ball',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/timer-ball.png',
      color: '#FF6B6B'
    },
    legendary: {
      name: 'Dusk Ball',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dusk-ball.png',
      color: '#4B0082'
    },
    mythical: {
      name: 'Master Ball',
      image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
      color: '#A040A0'
    }
  };
  
  return pokeballs[rarity] || pokeballs.common;
};

/**
 * Calculate base catch rate based on rarity
 */
export const getBaseCatchRate = (rarity) => {
  const rates = {
    common: 0.90,      // 90% base success
    uncommon: 0.75,    // 75% base success
    rare: 0.55,        // 55% base success
    epic: 0.40,        // 40% base success
    legendary: 0.25,   // 25% base success
    mythical: 0.15     // 15% base success
  };
  
  return rates[rarity] || 0.90;
};

/**
 * Calculate actual catch rate with attempt bonus
 * Each failed attempt increases success rate by 10%
 */
export const calculateCatchRate = (rarity, attempts) => {
  const baseRate = getBaseCatchRate(rarity);
  const attemptBonus = attempts * 0.1; // +10% per attempt
  const finalRate = Math.min(baseRate + attemptBonus, 0.95); // Cap at 95%
  
  return finalRate;
};

/**
 * Simulate catch attempt
 * Returns true if caught, false if escaped
 */
export const attemptCatch = (rarity, attempts) => {
  const catchRate = calculateCatchRate(rarity, attempts);
  const roll = Math.random();
  
  return roll < catchRate;
};

/**
 * Get number of shakes (1-3) based on how close the catch was
 */
export const getShakeCount = (rarity, attempts) => {
  const catchRate = calculateCatchRate(rarity, attempts);
  
  if (catchRate >= 0.8) return 3; // Very likely to catch - 3 shakes
  if (catchRate >= 0.5) return 2; // Moderate chance - 2 shakes
  return 1; // Low chance - 1 shake
};

/**
 * Get catch message based on result and rarity
 */
export const getCatchMessage = (success, pokemonName, rarity, attempts) => {
  const name = pokemonName.toUpperCase();
  
  if (success) {
    const successMessages = [
      `⚡ Gotcha! ${name} was caught!`,
      `✨ ${name} is yours now!`,
      `🎉 Success! ${name} joined your team!`,
      `💫 ${name} was successfully caught!`
    ];
    return successMessages[Math.floor(Math.random() * successMessages.length)];
  } else {
    const escapeMessages = [
      `Oh no! ${name} broke free!`,
      `${name} escaped from the ball!`,
      `It was so close! ${name} got away!`,
      `${name} resisted capture!`,
      `Almost had it! ${name} broke out!`
    ];
    
    if (attempts >= 3) {
      return `${name} is very strong! Keep trying! (Attempt ${attempts + 1})`;
    }
    
    return escapeMessages[Math.floor(Math.random() * escapeMessages.length)];
  }
};

/**
 * Get rarity display info
 */
export const getRarityInfo = (rarity) => {
  const info = {
    common: {
      label: 'Common',
      color: '#78C850',
      emoji: '⚪'
    },
    uncommon: {
      label: 'Uncommon',
      color: '#3B7CEC',
      emoji: '🔵'
    },
    rare: {
      label: 'Rare',
      color: '#F8D030',
      emoji: '🟡'
    },
    epic: {
      label: 'Epic',
      color: '#FF6B6B',
      emoji: '🔴'
    },
    legendary: {
      label: 'Legendary',
      color: '#4B0082',
      emoji: '🟣'
    },
    mythical: {
      label: 'Mythical',
      color: '#A040A0',
      emoji: '✨'
    }
  };
  
  return info[rarity] || info.common;
};
