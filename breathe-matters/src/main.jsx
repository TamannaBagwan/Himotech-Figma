import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "@fontsource/nunito";
const theme = createTheme({
  typography: {
    fontFamily: " Nunito",
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <App />
</ThemeProvider>,
)
