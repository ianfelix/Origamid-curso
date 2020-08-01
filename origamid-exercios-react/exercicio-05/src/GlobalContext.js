import React, { Children } from 'react';
import { createContext } from 'react';

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then((res) => res.json())
      .then((json) => setDados(json));
  }, []);

  const cleanData = () => {
    setDados(null);
  };

  return (
    <GlobalContext.Provider value={{ dados, cleanData }}>
      {children}
    </GlobalContext.Provider>
  );
};
