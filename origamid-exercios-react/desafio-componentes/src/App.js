import React from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Produtos from './pages/Produtos';

// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

const App = () => {
  const { pathname } = window.location;

  if (pathname === '/') {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  } else {
    return (
      <div>
        <Navbar />
        <Produtos />
      </div>
    );
  }
};

export default App;
