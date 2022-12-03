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

const backgroundImage = {
  backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/test_image.jpg'})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh'
};

function App() {
  return (
    <div className="App" style={backgroundImage}>
      <ThemeProvider theme={theme}>
          <Scene />
      </ThemeProvider>
    </div>
  );
}

export default App;
