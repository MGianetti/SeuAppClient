import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import LoggedInLayout from './components/logged-in-layout';

// eslint-disable-next-line no-unused-vars
import styles from './App.module.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoggedInLayout></LoggedInLayout>
    </ChakraProvider>
  );
}

export default App;
