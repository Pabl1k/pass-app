import Paper from '@mui/material/Paper/Paper';
import ThemeProvider, { getTheme } from '@renderer/global/ThemeProvider';

const App = () => {
  const theme = getTheme();

  return (
    <ThemeProvider>
      <Paper
        elevation={0}
        style={{
          backgroundColor: theme.palette.background.paper,
          height: '100vh',
          borderRadius: 0
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus deserunt ipsam,
        necessitatibus nihil quasi quia velit. Eveniet explicabo in modi neque non obcaecati quod
        sint. Cupiditate deserunt laboriosam neque ullam.
      </Paper>
    </ThemeProvider>
  );
};

export default App;
