import React from 'react';
import './App.css';
import About from './components/about/About';

import Home from './components/home/Home';

import Portfolio from './components/portfolio/Portfolio';

import Slidebar from './components/slidebar/Slidebar';

function App() {
  return (
    <div className="App">
      <Slidebar />
      <main className='main'>
        <Home />
        <About />
        <Portfolio />

      </main>
    </div>
  );
}

export default App;
