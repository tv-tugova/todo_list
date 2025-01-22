import { Container } from "@mui/material";
import TodoList from "./components/todoList/TodoList";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#C88D94",
      dark: "#b07684",
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
        <TodoList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
