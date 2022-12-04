import './App.css';
import Scene from './components/Scene'; 
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    background: {
      paper: 'rgba(0, 0, 0, 0.7)',
    },
    text: {
      primary: '#fff',
      secondary: '#000'
    }
  },
  typography: {
    fontSize: 18,
  }
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
          <Scene />
      </ThemeProvider>
    </div>
  );
}

export default App;
