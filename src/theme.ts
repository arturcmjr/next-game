import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#cbdf5f',
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
