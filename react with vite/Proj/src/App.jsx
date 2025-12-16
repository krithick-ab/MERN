import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import About from './About';
import Login from './Login'; // Import the new Login component
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="App">
      <Header isHomePage={isHomePage} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} /> {/* Add new route for Login */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;