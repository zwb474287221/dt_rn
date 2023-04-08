import React from 'react';
import LocalStorage from '@/utils/LocalStorage';
import { ThemeProvider } from './src/context/theme';
import { LocalProvider } from './src/context/local';
import { UserProvider } from './src/context/user';
import Route from '@/page/route';

const App = () => {
  global.localStorage = LocalStorage;
  return (
    <UserProvider>
      <LocalProvider>
        <ThemeProvider>
          <Route />
        </ThemeProvider>
      </LocalProvider>
    </UserProvider>
  );
};

export default App;
