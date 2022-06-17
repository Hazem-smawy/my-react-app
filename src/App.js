import './styles/globals.css'
import Theme from './styles/Theme'
import { ThemeProvider } from 'styled-components';
import Spinner from './Components/Spinner';
import Home from './Home';
import Product from './Product/Product';
import {cars} from './data'
function App() {
  return (
    <ThemeProvider theme={Theme}>
        <Product data={cars} />
    </ThemeProvider>
  );
}

export default App;
