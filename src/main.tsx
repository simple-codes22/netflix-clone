import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';

const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#e50914",
    },
  },
  //   secondary: {
  //     main: "",
  //   },
  // },
  typography: {
    fontFamily: "'Ubuntu', sans-serif",
  }

})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={mainTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
)
