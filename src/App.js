import React, {createContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FormPage from './pages/FormPage';
import SuccessPage from './pages/SuccessPage';
import Products from './pages/Products';
import Root from './pages/Root';

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
      {path: '/form', element: <FormPage />}
    ],
  },
  
])

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={< Home/>} />
    //       <Route path="/form" element={<FormPage />} />
    //       <Route path="/success" element={<SuccessPage />} />
    //     </Routes>
    //   </div>
    // </Router>

    <ProductsProvider>
      <RouterProvider router={router}/>
    </ProductsProvider>
  );
};

export default App;
