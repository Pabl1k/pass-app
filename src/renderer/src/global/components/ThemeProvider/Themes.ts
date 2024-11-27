import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#17212b'
    },
    text: {
      primary: '#faf8f1'
    }
  },
  spacing: 4
});
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      paper: '#f2f9ff'
    },
    text: {
      primary: '#252323'
    }
  }
});
