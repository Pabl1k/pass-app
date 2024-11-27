import { createContext, FC, ReactNode, useState } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { useLocalStorage } from '@renderer/global/hooks/useLocalStorage';
import { CACHE_KEYS } from '@renderer/global/cacheKeys';
import { darkTheme, lightTheme } from '@renderer/global/components/ThemeProvider/Themes';

type ThemeMode = 'light' | 'dark';

interface Props {
  children: ReactNode;
}

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider: FC<Props> = ({ children }) => {
  const { value: cachedTheme, set } = useLocalStorage<ThemeMode>(CACHE_KEYS.theme);
  const [theme, setTheme] = useState<ThemeMode>(cachedTheme ?? 'dark');

  const themePalette = theme === 'dark' ? darkTheme : lightTheme;

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    setTheme(newTheme);
    set(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <MuiThemeProvider theme={themePalette}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
