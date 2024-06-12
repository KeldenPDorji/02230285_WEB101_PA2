# Drac's Pokedex 

![Pokedex Image](https://img.lemde.fr/2022/12/22/5/0/1730/865/1440/720/60/0/e968e4d_1671703423578-b5e.jpeg)

This project is a client-side Pokedex webpage built using React. The application allows users to search for and retrieve detailed information about their favorite Pokemon, as well as keep track of the Pokemon they have "caught".

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Introduction

The primary objective of this project is to demonstrate proficiency in building modern web applications using React. This Pokedex application leverages React's component-based architecture, state management techniques using Zustand, and API integration to create a fully functional and interactive Pokedex.

## Features

- **Search Pokemon**: Users can search for Pokemon by name.
- **Display Pokemon Details**: Shows detailed information about the searched Pokemon including name, type, abilities, stats, and an image.
- **Catch Pokemon**: Allows users to "catch" Pokemon and maintain a list of caught Pokemon.
- **State Management**: Uses Zustand for managing the state of caught Pokemon.
- **Responsive Design**: The webpage is designed to be responsive and user-friendly across different devices and screen sizes.

## Requirements

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. **Clone the repository**:

   git clone https://github.com/KeldenPDorji/02230285_WEB101_PA2.git

2. **Install Dependencies**:

    npm install

## Usage

3. **Run the application**:

    npm run dev

4. **Open the application**:

    Open your web browser and navigate to http://localhost:3000.

## Project Structure
/my-app
├── .next
├── node_modules
├── public
├── src
│   ├── app
│   │   ├── global.css
│   │   ├── layout.tsx
│   │   ├── page.js
│   ├── components
│   │   ├── PokemonCard.js
│   │   ├── PokemonDetails.js
│   │   ├── SearchBar.js
│   │   ├── Pagination.js
│   │   └── CaughtPokemonList.js
│   ├── hooks
│   │   └── usePokemonStore.js
│   ├── services
│   │   └── fetchHandler.js
│   ├── styles
│   │   └── index.css
│   ├── package.json
│   └── package-lock.json

## Components

SearchBar: Component for searching Pokemon.
PokemonCard: Component for displaying basic Pokemon information.
PokemonDetails: Component for displaying detailed Pokemon information.
Pagination: Component for handling pagination of search results.
CaughtPokemonList: Component for displaying the list of caught Pokemon.

## Hooks

usePokemonStore: Zustand store for managing the state of caught Pokemon.

## Services

fetchHandler: Service for handling API calls to fetch Pokemon data.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a Pull Request.

## Searching for a Pokemon

Enter a Pokemon name in the search bar and click the "Search" button.

## Catching a Pokemon

Click on the Pokeball icon next to the Pokemon's name in the card.

## Viewing Caught Pokemon

Click the "View Caught Pokémon" button to see the list of Pokemon you have caught.