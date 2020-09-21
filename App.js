import React from 'react';
import Router from './src/navigation';
import Loader from './src/components/loader';
import {StoreProvider} from './src/context/store';
const App = () => {
  return (
    <StoreProvider>
      <Router />
      <Loader />
    </StoreProvider>
  );
};

export default App;
