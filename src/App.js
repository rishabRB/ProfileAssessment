import logo from './logo.svg';
import './App.css';
import { Route, Routes,Navigate } from 'react-router-dom';
import Products from './pages/Products';
import Cart from './pages/Cart';

function App() {
  return (
      <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
  );
}

export default App;
