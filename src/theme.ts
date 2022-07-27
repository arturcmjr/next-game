import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c6de41',
    },
    secondary: {
      main: '#e4e4e4',
    },
    error: {
      main: '#f44336',
    },
    background: {
      default: '#181818',
      paper: '#1e201c',
    },
  },
});

export default theme;
