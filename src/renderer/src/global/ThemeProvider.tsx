import { FC, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

interface Props {
  children: ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      paper: '#17212b'
    },
    text: {
      primary: '#faf8f1'
    }
  }
});

export const getTheme = () => {
  // Get the theme from local storage, return one theme by user selection
  return darkTheme;
};

const ThemeProvider: FC<Props> = ({ children }) => {
  const theme = getTheme();

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
