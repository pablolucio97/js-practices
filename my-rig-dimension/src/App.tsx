import {useState} from 'react'

import GlobalStyles from './GlobalStyles'
import {ThemeProvider} from 'styled-components'

import dark from './themes/dark'
import light from './themes/light'
import usePersistState from './utils/usePersistState'

import Home from './pages/Home/Index'
import Switcher from './components/Switcher/Index'
import Header from './components/Header/Index'

function App() {

  const [theme, setTheme] = usePersistState('theme', dark)

  function handleTheme(){
      setTheme(theme.title === 'light' ? dark : light)
  }

  return (
  <ThemeProvider theme={theme}>
      <GlobalStyles/>
      <div className="App">
      <Home/>
      <Header
        toggleTheme={handleTheme}
        isDark={false}
      />

      <p>Hello from My Rig Dimension</p>
    </div>
  </ThemeProvider>
  );
}

export default App;
