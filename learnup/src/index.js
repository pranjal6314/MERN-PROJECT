import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Provider as ReduxProvidwer } from 'react-redux';
import Store from './Redux/Store';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <ReduxProvidwer store={Store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </ReduxProvidwer>
  </StrictMode>
);
