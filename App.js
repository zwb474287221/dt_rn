import React from 'react';
import LocalStorage from '@/utils/LocalStorage';
import {ThemeProvider} from './src/context/theme';
import Route from '@/page/route';

const App = () => {
  global.localStorage = LocalStorage;
  return (
    <ThemeProvider>
      <Route />
    </ThemeProvider>
  );
};

export default App;
