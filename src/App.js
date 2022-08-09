import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoggedInLayout from './components/logged-in-layout';

import Clients from './pages/clients';
import Products from './pages/products';
import Professional from './pages/professionals';
import Services from './pages/services';
import NotFound from './pages/not-found';

// eslint-disable-next-line no-unused-vars
import styles from './App.module.css';
import routes from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <LoggedInLayout>
          <Routes>
            <Route exact path={routes.clients.root} element={<Clients />} />
            <Route exact path={routes.products.root} element={<Products />} />
            <Route
              exact
              path={routes.professionals.root}
              element={<Professional />}
            />
            <Route exact path={routes.services.root} element={<Services />} />
            <Route path={routes.notFound} render={<NotFound />} />
          </Routes>
        </LoggedInLayout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
