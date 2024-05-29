import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import FormPage from './pages/FormPage';
import SuccessPage from './pages/SuccessPage';
import Root from './pages/Root';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {path: '/', element: <Home />},
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

<RouterProvider router={router}/>
  );
};

export default App;
