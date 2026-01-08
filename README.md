# 🔥 DRAC'S POKEDEX - PA2

<div align="center">

![Pokémon](https://img.shields.io/badge/Pokémon-API-FFCB05?style=for-the-badge&logo=pokemon&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

**A stunning, interactive Pokédex built with Next.js featuring cyberpunk-inspired dark gaming aesthetics, game-like catch mechanics, advanced search capabilities, and real-time state management.**

[Live Demo](https://zero2230285-web101-pa2.onrender.com/) • [Features](#-features) • [Tech Stack](#%EF%B8%8F-tech-stack) • [Installation](#-installation)

</div>

---

## 📸 Preview

![Pokedex Preview](preview.png)

Experience a modern, cyberpunk-inspired Pokédex with smooth animations, game-like catch mechanics with realistic Pokéball animations, and an immersive dark theme that brings the world of Pokémon to life.

---

## ✨ Features

### 🎯 Core Functionality
- **Complete Pokédex Database** - Browse 1000+ Pokémon with paginated viewing (20 per page)
- **Lightning-Fast Search** - Search by Pokémon name or National Pokédex number with real-time results
- **Smart Pagination** - Navigate through 50 pages with smooth transitions and auto-scroll
- **Detailed Stats View** - Comprehensive cards with base stats, abilities, types, and more
- **Intelligent Caching** - Fetched Pokémon data is cached to minimize API calls and improve performance

### 🎮 Game-Like Catch Mechanics
- **Rarity-Based System** - 4 tiers: Common (85%), Uncommon (65%), Rare (45%), Legendary (25%)
- **Dynamic Pokéballs** - Poké Ball, Great Ball, Ultra Ball, Master Ball based on rarity
- **Realistic Animations** - Balls shake 1-3 times before success/failure
- **Progressive Difficulty** - +10% success rate per failed attempt (capped at 95%)
- **Attempt Tracking** - Visual counter shows retry attempts with pulsing animation
- **Collection Management** - View caught Pokémon in a beautiful modal with pagination
- **Release System** - Free Pokémon back to the wild with confirmation toasts

### 🎨 UI/UX Excellence
- **Cyberpunk Dark Theme** - Royal purple accents with neon highlights and glassmorphism
- **Custom Typography** - Orbitron & Rajdhani fonts with glowing text effects
- **Animated Gradients** - Dynamic radial backgrounds with smooth color transitions
- **Interactive Cards** - Hover effects with scale, glow, and lift animations
- **Loading States** - Beautiful spinner with pulsing neon ring animation
- **Toast Notifications** - Modern shadcn/ui toasts for catch success/failure feedback
- **Responsive Grid Layout** - Adaptive design that works beautifully on all screen sizes
- **Custom Scrollbars** - Purple gradient scrollbars matching the cyberpunk theme

### 📊 Advanced Features
- **shadcn/ui Components** - Modern, accessible UI components (Button, Input, Progress, Toast, etc.)
- **Zustand State Management** - Persistent state for caught Pokémon and attempt tracking
- **Error Handling** - Graceful error messages with styled notifications
- **Performance Optimized** - Request caching, lazy loading, efficient re-renders
- **TypeScript Support** - Type-safe layout with proper TypeScript configuration
- **Next.js 14** - Latest features including App Router, Server Components, and Image Optimization
- **Accessibility Ready** - Semantic HTML and keyboard navigation support

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router and Server Components
- **React 18** - Modern React with Hooks and functional components
- **TypeScript** - Type-safe development for layout configuration

### Styling & UI
- **Tailwind CSS 3** - Utility-first CSS framework with custom configuration
- **shadcn/ui** - High-quality, accessible component library built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives (Dialog, Progress, Toast, etc.)
- **CSS Modules** - Component-scoped styling with globals.css
- **Custom Animations** - Keyframes for shake, pulse, glow, and hover effects
- **Google Fonts** - Orbitron & Rajdhani via next/font optimization

### State Management & Data
- **Zustand 5** - Lightweight, fast state management (caught Pokémon, attempts)
- **PokéAPI** - RESTful Pokémon database (https://pokeapi.co)
- **React Hooks** - useState, useEffect, useRef, useCallback for local state
- **Custom Fetch Handler** - Centralized API request management with caching

### Development Tools
- **ESLint** - Code quality and consistency with Next.js config
- **PostCSS** - CSS processing with Tailwind CSS
- **clsx & tailwind-merge** - Conditional className utilities

### Architecture Patterns
- **Component-Based** - Modular React components with single responsibility
- **Custom Hooks** - Reusable logic with usePokemonStore
- **Caching Strategy** - useRef for caching fetched Pokémon to reduce API calls
- **Error Boundaries** - Graceful error handling throughout the app
- **Responsive Design** - Mobile-first approach with Tailwind breakpoints

---

## 🚀 Installation

### Prerequisites
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6 or higher) - Comes with Node.js
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/KeldenPDorji/02230285_WEB101_PA2.git
   cd 02230285_WEB101_PA2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Start searching and catching Pokémon!

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm start` - Run production server (after build)
- `npm run lint` - Run ESLint to check code quality

### Deployment (Render)
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm start`
- **Environment**: Node 18+

---

## 📂 Project Structure

```
02230285_WEB101_PA2/
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles with Tailwind directives
│   │   ├── layout.tsx            # Root layout with fonts and metadata
│   │   └── page.js               # Main Pokédex page (492 lines)
│   ├── components/
│   │   ├── CaughtPokemonList.js  # Floating button for caught Pokémon
│   │   ├── CaughtPokemonModal.js # Modal with grid of caught Pokémon (238 lines)
│   │   ├── LoadingSpinner.js     # Animated loading component
│   │   ├── Pagination.js         # Page navigation component
│   │   ├── PokemonCard.js        # Individual Pokémon card (201 lines)
│   │   ├── SearchBar.js          # Search input with home button
│   │   └── ui/                   # shadcn/ui components
│   │       ├── alert.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── drawer.tsx
│   │       ├── input.tsx
│   │       ├── pagination.tsx
│   │       ├── progress.tsx
│   │       ├── scroll-area.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── use-toast.ts
│   ├── hooks/
│   │   └── usePokemonStore.js    # Zustand store for state management
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn for classNames)
│   ├── services/
│   │   └── fetchHandler.js       # Custom fetch service (unused but available)
│   ├── styles/
│   │   └── index.css             # Component-specific styles (839 lines)
│   └── utils/
│       └── catchMechanics.js     # Game logic for catching Pokémon (137 lines)
├── public/                       # Static assets (if any)
├── .eslintrc.json               # ESLint configuration
├── .gitignore                   # Git ignore rules
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration with image domains
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS configuration for Tailwind
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

---

## 💡 Key Implementations

### 1. Game-Like Catch System
```javascript
// Realistic Pokémon catching with rarity-based mechanics
const attemptCatch = (rarity, attempts) => {
  const baseRate = getCatchRate(rarity);
  const bonusRate = Math.min(attempts * 10, 70); // +10% per attempt, max 70%
  const finalRate = Math.min(baseRate + bonusRate, 95); // Cap at 95%
  return Math.random() * 100 < finalRate;
};

// Shake animation based on difficulty
const shakes = rarity === 'legendary' ? 3 : rarity === 'rare' ? 2 : 1;
await new Promise(resolve => setTimeout(resolve, shakes * 300));
```

### 2. Zustand State Management
```javascript
// Persistent state across the application
const usePokemonStore = create((set) => ({
  caughtPokemon: [],
  catchAttempts: {},
  catchPokemon: (pokemon) => set((state) => ({
    caughtPokemon: [...state.caughtPokemon, pokemon]
  })),
  incrementAttempts: (id) => set((state) => ({
    catchAttempts: { ...state.catchAttempts, [id]: (state.catchAttempts[id] || 0) + 1 }
  })),
}));
```

### 3. Smart Caching with useRef
```javascript
// Prevent duplicate API calls and improve performance
const pokemonCache = useRef({});

if (pokemonCache.current[cacheKey]) {
  setPokemonList(pokemonCache.current[cacheKey]);
  return;
}

// Cache the fetched data
pokemonCache.current[cacheKey] = validPokemon;
```

### 4. Rarity Calculation
```javascript
// Dynamic rarity based on base stats and experience
const getPokemonRarity = (pokemon) => {
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const baseExp = pokemon.base_experience || 0;
  
  if (totalStats >= 600 || baseExp >= 250) return 'legendary';
  if (totalStats >= 500 || baseExp >= 200) return 'rare';
  if (totalStats >= 400 || baseExp >= 150) return 'uncommon';
  return 'common';
};
```

---

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

✅ **Next.js 14** - App Router, Server Components, Image optimization, Font optimization  
✅ **React 18** - Hooks (useState, useEffect, useRef, useCallback), functional components  
✅ **TypeScript** - Type-safe configuration and component props  
✅ **State Management** - Zustand for global state, React hooks for local state  
✅ **API Integration** - RESTful API consumption with PokéAPI, error handling  
✅ **Component Architecture** - Modular, reusable components with single responsibility  
✅ **Styling Systems** - Tailwind CSS, shadcn/ui, CSS Modules, custom animations  
✅ **Performance Optimization** - Caching, lazy loading, efficient re-renders  
✅ **User Experience** - Loading states, error handling, smooth interactions, toast notifications  
✅ **Game Logic** - Complex catch mechanics with probability, progressive difficulty  
✅ **Responsive Design** - Mobile-first, adaptive layouts, custom scrollbars  
✅ **Accessibility** - Semantic HTML, keyboard navigation, ARIA attributes

---

## 🌟 Highlights for Employers

- **Modern Stack** - Next.js 14, React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Clean Architecture** - Well-organized components, custom hooks, utility functions
- **Game Development Skills** - Probability-based catch mechanics, animation timing, state tracking
- **UI/UX Focus** - Attention to detail, smooth animations, user feedback, cyberpunk aesthetics
- **Performance Aware** - Caching strategy, optimized rendering, efficient API calls
- **State Management** - Zustand for global state with persistent caught Pokémon
- **Complete Project** - Fully functional from concept to deployment on Render
- **Best Practices** - ESLint, TypeScript, component composition, error boundaries
- **Problem Solving** - Custom solutions for pagination, search, caching, and game mechanics

---

## 🎮 Game Mechanics

### Rarity Tiers & Catch Rates

| Rarity | Total Base Stats | Base Experience | Success Rate | Pokéball |
|--------|-----------------|-----------------|--------------|----------|
| ⚪ **Common** | < 400 | < 150 | 85% | Poké Ball (Red) |
| 🔵 **Uncommon** | 400-499 | 150-199 | 65% | Great Ball (Blue) |
| 🟡 **Rare** | 500-599 | 200-249 | 45% | Ultra Ball (Yellow) |
| 🟣 **Legendary** | 600+ | 250+ | 25% | Master Ball (Purple) |

### Progressive Difficulty
- **First Attempt**: Base catch rate (25% - 85% depending on rarity)
- **Failed Attempts**: +10% success rate per failure
- **Maximum Rate**: 95% (never guaranteed!)
- **Visual Feedback**: Attempt counter badge appears after first failure

### Catch Process
1. Click Pokéball icon on Pokémon card
2. Ball shakes 1-3 times (more for harder catches)
3. Success: Pokémon caught! Toast notification + added to collection
4. Failure: Pokémon escapes! Attempt counter increments + retry

---

## 📝 Code Quality

- **Modularity**: Separated concerns - components, hooks, utils, services
- **Reusability**: DRY principles with reusable components and utilities
- **Maintainability**: Clear naming conventions, consistent code style
- **Scalability**: Easy to extend with new features and components
- **Performance**: Optimized with caching, memoization, and efficient rendering
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation

---

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co) for the comprehensive Pokémon database
- Nintendo, Game Freak, and The Pokémon Company for Pokémon
- [shadcn/ui](https://ui.shadcn.com/) for beautiful, accessible components
- [Radix UI](https://www.radix-ui.com/) for unstyled UI primitives
- [Zustand](https://zustand-demo.pmnd.rs/) for simple state management
- Design inspiration from mainline Pokémon games and cyberpunk aesthetics
- [Render](https://render.com/) for reliable deployment hosting

---

<div align="center">

**Made with 💜 and ⚡ by Kelden Drac**

*If you found this project interesting, please give it a ⭐!*

[🔗 Live Demo](https://zero2230285-web101-pa2.onrender.com/) | [🐛 Report Bug](https://github.com/KeldenPDorji/02230285_WEB101_PA2/issues) | [✨ Request Feature](https://github.com/KeldenPDorji/02230285_WEB101_PA2/issues)

</div>

