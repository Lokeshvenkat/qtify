import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Section from './components/Section/Section';
import SongsSection from './components/SongsSection/SongsSection';
import NewAlbumsSection from './components/NewAlbumsSection/NewAlbumsSection';
import Logo from './components/Logo/Logo.jsx';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Logo />
      <SearchBar />
      <HeroSection />
      <NewAlbumsSection />
      <SongsSection />
    </div>
  );
}

export default App;
