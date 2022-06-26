import './styles/globals.css'
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import { GlobalStyle } from './styles/Theme';
import Main from './Main'
import {useState} from 'react'
function App() {
 const [taggleTheme,setTaggleTheme]= useState(false)
  return (
      <ThemeProvider theme={taggleTheme ? theme.light :theme.dark}>
        <GlobalStyle />
        <Main taggleTheme={taggleTheme} setTaggleTheme={setTaggleTheme} />
      </ThemeProvider>
  );
}

export default App;
