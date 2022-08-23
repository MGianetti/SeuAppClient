import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import LoggedOutLayout from './components/logged-out-layout';
import LoggedInLayout from './components/logged-in-layout';

import Products from './pages/products';
import Clients from './pages/clients/clients.component';
import Professionals from './pages/professionals';
import Services from './pages/services';
import NotFound from './pages/not-found';
import Signup from './pages/signup';
import Signin from './pages/signin';

// eslint-disable-next-line no-unused-vars
import styles from './App.module.css';
import routes from './config/routes';
import AuthProvider from './components/contexts/AuthContext';
import ProtectedRoute from './components/protected-route';

const getLoggedInLayout = page => {
  return (
    <ProtectedRoute>
      <LoggedInLayout>{page}</LoggedInLayout>
    </ProtectedRoute>
  );
};

const getLoggedOutLayout = page => {
  return <LoggedOutLayout>{page}</LoggedOutLayout>;
};

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <Routes>
            <Route
              exact
              path={routes.clients.root}
              element={getLoggedInLayout(<Clients />)}
            />
            <Route
              exact
              path={routes.products.root}
              element={getLoggedInLayout(<Products />)}
            />
            <Route
              exact
              path={routes.professionals.root}
              element={getLoggedInLayout(<Professionals />)}
            />
            <Route
              exact
              path={routes.services.root}
              element={getLoggedInLayout(<Services />)}
            />
            <Route
              exact
              path={routes.signUp.root}
              element={getLoggedOutLayout(<Signup />)}
            />
            <Route
              exact
              path={routes.signIn.root}
              element={getLoggedOutLayout(<Signin />)}
            />
            <Route
              path={routes.notFound}
              element={getLoggedOutLayout(<NotFound />)}
            />
          </Routes>
        </AuthProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

// const mapStateToProps = state => {
//   console.log(state);
//   return {};
// };

// export default connect(mapStateToProps)(App);
export default App;
