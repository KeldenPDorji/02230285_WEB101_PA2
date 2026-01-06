# 🔥 DRAC'S POKEDEX - PA2
### Cyberpunk Edition | Next.js React Application

![Pokemon](https://img.shields.io/badge/Pokémon-API-FFCB05?style=for-the-badge&logo=pokemon&logoColor=black)
![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

A stunning, interactive Pokédex built with Next.js featuring **cyberpunk-inspired dark gaming aesthetics**, advanced search capabilities, state management with Zustand, and a captivating neon purple theme inspired by PA1.

---

## 🌟 What's New in PA2?

### 🎨 **Complete UI Transformation**
- **Cyberpunk Dark Theme**: Inspired by PA1 with royal purple accents and neon highlights
- **Animated Gradient Backgrounds**: Dynamic radial gradients with smooth animations
- **Custom Neon Typography**: Orbitron & Rajdhani fonts with glowing text effects
- **Glassmorphism Effects**: Frosted glass cards with backdrop blur
- **Smooth Hover Animations**: Cards scale, glow, and lift on hover
- **Custom Scrollbars**: Purple gradient scrollbars matching the theme

### ⚡ **Enhanced Features**
- **Loading States**: Beautiful animated loading spinner with pulsing effects
- **Error Handling**: Graceful error messages with styled notifications
- **Toast Notifications**: Modern toast alerts for catching Pokémon
- **Improved Search**: Enter key support and better UX
- **Smooth Scrolling**: Auto-scroll to top on page changes
- **Enhanced Modal**: Redesigned caught Pokémon modal with grid layout

### 🎯 **Preserved Features**
All original PA2 functionality remains intact:
- ✅ Search Pokémon by name
- ✅ View detailed stats with progress bars
- ✅ Catch & release Pokémon
- ✅ Zustand state management
- ✅ Pagination (50 pages, 20 per page)
- ✅ Responsive design
- ✅ shadcn/ui components

---

## 📸 Design Highlights

### 🎨 Color Palette
```css
Primary Purple: #8a2be2 (Neon Purple)
Accent Pink: #ff00ff (Magenta)
Dark Base: #0a0a0f (Deep Black)
Purple Dark: #1a0b2e (Dark Purple)
Cards: rgba(26, 11, 46, 0.8) (Translucent Purple)
Text: #e0e0e0 (Light Gray)
```

### 🌈 Key Visual Elements
- **Title**: Animated gradient text with glow effect
- **Cards**: Glassmorphic design with hover lift & neon glow
- **Buttons**: Gradient backgrounds with shadow glow
- **Stats Bars**: Purple gradient progress bars
- **Modal**: Floating card with grid layout
- **Loading**: Spinning neon ring with pulsing text

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

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
   ```
   Navigate to http://localhost:3000
   ```

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run lint` - Run ESLint

---

## 📁 Project Structure

```
02230285_WEB101_PA2/
├── src/
│   ├── app/
│   │   ├── globals.css         # Theme colors & base styles
│   │   ├── layout.tsx          # Root layout with fonts
│   │   └── page.js             # Main homepage
│   ├── components/
│   │   ├── PokemonCard.js      # Pokemon card with stats
│   │   ├── SearchBar.js        # Search input component
│   │   ├── Pagination.js       # Page navigation
│   │   ├── CaughtPokemonList.js    # View caught button
│   │   ├── CaughtPokemonModal.js   # Caught Pokemon modal
│   │   ├── LoadingSpinner.js   # Loading animation
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/
│   │   └── usePokemonStore.js  # Zustand state store
│   ├── services/
│   │   └── fetchHandler.js     # API service
│   └── styles/
│       └── index.css           # Custom cyberpunk styles
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Cyberpunk theme & animations
- **Google Fonts** - Orbitron & Rajdhani

### UI Components
- **shadcn/ui** - Beautiful component library
- **Radix UI** - Accessible primitives
- **Lucide React** - Icon library

### State Management
- **Zustand** - Lightweight state management

### API
- **PokéAPI** - RESTful Pokémon data

---

## ✨ Key Features

### 🔍 Search & Browse
- Search Pokémon by name with instant results
- Browse all 1000+ Pokémon with pagination
- 20 Pokémon per page, 50 total pages
- Smooth page transitions with loading states

### 📊 Detailed Stats
- View comprehensive Pokémon information
- Animated progress bars for all stats (HP, Attack, Defense, etc.)
- Type and ability information
- High-quality sprite images

### ⚡ Catch System
- Click Pokéball icon to catch Pokémon
- Visual shake animation on catch
- Toast notifications for feedback
- Prevent duplicate catches
- View all caught Pokémon in modal
- Release Pokémon from collection
- Paginated caught list (6 per page)

### 🎨 Visual Excellence
- Dark cyberpunk theme with neon accents
- Smooth hover animations & transitions
- Glassmorphism card effects
- Custom gradient scrollbars
- Responsive grid layout
- Loading spinners & error states

---

## 🎓 Learning Outcomes

This project demonstrates:
- ✅ **Next.js App Router** - Modern routing & layouts
- ✅ **React Hooks** - useState, useEffect, custom hooks
- ✅ **State Management** - Zustand for global state
- ✅ **API Integration** - Async/await, fetch, error handling
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Component Architecture** - Reusable, modular components
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **CSS Animations** - Keyframes, transitions, transforms
- ✅ **UX Design** - Loading states, error handling, feedback

---

## 🎯 Design Inspiration

This project is inspired by:
- **PA1 (02230285_WEB101_PA1)** - Cyberpunk dark theme & neon aesthetics
- **Modern Gaming UI** - Dark themes with purple/magenta accents
- **Cyberpunk 2077** - Neon colors and futuristic design
- **PokéAPI** - Official Pokémon data source

---

## 🔮 Future Enhancements

Potential additions:
- [ ] Dark/Light theme toggle
- [ ] Advanced filtering (by type, generation, stats)
- [ ] Pokémon comparison tool
- [ ] Evolution chain visualization
- [ ] Favorites system with localStorage
- [ ] Battle simulator
- [ ] Team builder (max 6 Pokémon)
- [ ] Sound effects & background music
- [ ] Type effectiveness calculator
- [ ] Shiny Pokémon variants

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

---

## 📝 License

This project is created for educational purposes as part of WEB101 coursework.

---

## 🙏 Acknowledgments

- **PokéAPI** - For the comprehensive Pokémon database
- **Nintendo, Game Freak, The Pokémon Company** - For Pokémon
- **Vercel** - For Next.js framework
- **shadcn** - For beautiful UI components
- **PA1 Design** - For design inspiration & cyberpunk aesthetics

---

## 📧 Contact

**Kelden Drac**
- GitHub: [@KeldenPDorji](https://github.com/KeldenPDorji)
- Project: [02230285_WEB101_PA2](https://github.com/KeldenPDorji/02230285_WEB101_PA2)

---

<div align="center">

**Made with 💜 and ⚡ by Kelden Drac**

*If you found this project interesting, please give it a ⭐!*

</div>
