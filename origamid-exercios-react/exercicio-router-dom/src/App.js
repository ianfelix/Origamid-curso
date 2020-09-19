import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Produtos from './components/Produtos';
import Footer from './components/Footer';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Produtos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
