import Home from './components/home';
import About from './components/about';
import Products from './components/products';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Products Apllication</h1>
      <BrowserRouter>

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
      </BrowserRouter>
    </div>
  );
}

export default App;
