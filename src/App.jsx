import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import BehindTheScenes from './components/BehindTheScenes';
import Adopt from './components/Adopt';
import './css/styles.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/behind-the-scenes" element={<BehindTheScenes />} />
            <Route path="/adopt" element={<Adopt />} />
            {<Route path="/shop" element={<Shop />} />}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
