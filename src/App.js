import React from 'react';
import Home from '@app/pages/home';
import { ThemeProvider } from 'emotion-theming';
import './App.css';
import theme from './config/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
