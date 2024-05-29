import React, { createContext, useState } from 'react';

import products from '../data/products.json';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
 
  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, ProductsContext };