import './styles/globals.css'
import { ThemeProvider } from 'styled-components';
import theme from './styles/Theme';
import { GlobalStyle } from './styles/Theme';
import Main from './Main'
function App() {
 const taggleTheme=false
  return (
      <ThemeProvider theme={taggleTheme ? theme.light :theme.dark}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
  );
}

export default App;
