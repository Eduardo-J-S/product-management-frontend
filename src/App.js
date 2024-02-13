import React from 'react';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import ContextProvider from './contexts';
import Home from './components/home';
import About from './components/about';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">Productify</h1>
      </header>
      <BrowserRouter>
        <ContextProvider>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Register Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
