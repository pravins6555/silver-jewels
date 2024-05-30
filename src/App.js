import React, {createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FormPage from './pages/FormPage';
import Products from './pages/Products';
import Root from './pages/Root';
import FooterContainer from './components/Footer/Footer';

import { ProductsProvider } from './context/products.context';

const Context = createContext();

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {path: '/', element: <Home />},
      {path: '/products', element: <Products />},
      {path: '/about', element: <About />},
      {path: '/contact', element: <FormPage />}
    ],
  },
  
])

const App = () => {
  return (
    
<>
    <ProductsProvider>
      <RouterProvider router={router}/>
    </ProductsProvider>
    <FooterContainer />
    </>
  );
};

export default App;
