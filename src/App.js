import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import Section from './components/Section/Section';
import SongsSection from './components/SongsSection/SongsSection';
import NewAlbumsSection from './components/NewAlbumsSection/NewAlbumsSection';
import Logo from './components/Logo/Logo.jsx';
import SearchBar from './components/SearchBar/SearchBar';
import FAQ from './components/Faq/FAQ';

function App() {
  const searchData = [
    { title: 'Album 1', slug: 'album-1' },
    { title: 'Album 2', slug: 'album-2' },
  ];

  return (
    <div className="App" style={{ backgroundColor: 'black', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <SearchBar searchData={searchData} /> 
      <NewAlbumsSection />
      <SongsSection />
      <FAQ />
    </div>
  );
}

export default App;
