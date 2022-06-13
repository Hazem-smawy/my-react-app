import './styles/globals.css'
import Theme from './styles/Theme'
import { ThemeProvider } from 'styled-components';
import Spinner from './Components/Spinner';
import Home from './Home';
function App() {
  return (
    <ThemeProvider theme={Theme}>

      <Home />
    </ThemeProvider>
  );
}

export default App;
