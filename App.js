import React from 'react';
import LocalStorage from '@/utils/LocalStorage';
import {ThemeProvider} from './src/context/theme';
import {LocalProvider} from './src/context/local';
import Route from '@/page/route';

const App = () => {
  global.localStorage = LocalStorage;
  return (
    <LocalProvider>
      <ThemeProvider>
        <Route />
      </ThemeProvider>
    </LocalProvider>
  );
};

export default App;
