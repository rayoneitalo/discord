import React, {useState, useCallback} from 'react';
import {ThemeProvider} from 'styled-components';

import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
import dark from './styles/themes/dark';
import light from './styles/themes/light';

function App() {
  const [theme, setTheme] = useState(() => {
    const existingTheme = localStorage.getItem('@application:theme');

    if (existingTheme) {
      return existingTheme === 'light' ? light : dark;
    }

    return light;
  });

  const toggleTheme = useCallback(() => {
    setTheme(theme.name === 'light' ? dark : light);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout toggleTheme={toggleTheme}/>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
