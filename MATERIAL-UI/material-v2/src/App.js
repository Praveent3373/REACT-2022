import logo from './logo.svg';
import './App.css';
import Container from '@material-ui/core/Container';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC'
import { theme } from './theme';
import { ThemeProvider } from '@material-ui/core';
const newTheme = theme;
function App() {
  return (
    <ThemeProvider theme={newTheme}>
      <Container maxWidth ="lg">
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </Container>
    </ThemeProvider>
  );
}

export default App;
