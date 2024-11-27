import Paper from '@mui/material/Paper/Paper';
import ThemeSwitch from '@renderer/components/ThemeSwitch';
import { useTheme } from '@mui/material/styles';

const App = () => {
  const theme = useTheme();

  return (
    <Paper
      elevation={0}
      style={{
        backgroundColor: theme.palette.background.paper,
        height: '100vh',
        borderRadius: 0
      }}
    >
      <ThemeSwitch />
    </Paper>
  );
};

export default App;
