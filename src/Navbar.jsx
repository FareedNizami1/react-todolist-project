// Navbar.jsx
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { useTheme } from "./ThemeContext";

export default function Navbar() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React Todos
          </Typography>
          <IconButton
            size="large"
            color="inherit"
            onClick={() => setDarkMode(!darkMode)}
          >
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
