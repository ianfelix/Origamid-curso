import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Produtos from './components/Produtos';
import Produto from './components/Produto';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Produtos />} />
            <Route path='produto/:id' element={<Produto />} />
            <Route path='contato' element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
