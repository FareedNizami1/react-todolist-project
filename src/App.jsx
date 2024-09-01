// App.jsx
import { CssBaseline } from "@mui/material";
import TodoList from "./TodoList";
import Navbar from "./Navbar";
import { ThemeProviderComponent } from "./ThemeContext";

function App() {
  return (
    <ThemeProviderComponent>
      <CssBaseline />
      <Navbar />
      <TodoList />
    </ThemeProviderComponent>
  );
}

export default App;
