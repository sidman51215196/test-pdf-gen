import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline, IconButton } from "@mui/material";
import { LightMode, DarkMode } from '@mui/icons-material';
import PreviewIcon from '@mui/icons-material/Preview';  
import Preview2 from "./components/Preview2";  
import Preview from "./components/Preview";
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#1976d2',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#dc004e',
      },
    },
    typography: {
      fontFamily: 'Roboto, Arial, sans-serif',
    },
  });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header toggleTheme={toggleTheme} darkMode={darkMode} setDarkMode={setDarkMode} />
          
          {/* Main Content */}
          <div className="App pdf-content" id="dashboard-content">
            <Routes>
              <Route path="/" element={<Preview />} />
              <Route path="/preview-pdf" element={<Preview2 />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    </Router>
  );
}

const Header = ({ toggleTheme, darkMode, setDarkMode }) => {
  const location = useLocation();
  

  if (location.pathname === "/preview-pdf") {
    return null;  
  }

  const handlePreviewClick = () => {
    setDarkMode(false);  
    window.open('/preview-pdf', '_blank');  
  };

  return (
    <header className="header">
      <div>Dashboard</div>
      <div className="header-buttons">
        <IconButton color="inherit" onClick={toggleTheme}>
          {darkMode ? <LightMode /> : <DarkMode />}
        </IconButton>        
        <IconButton className="btn" color="inherit" onClick={handlePreviewClick}>
          <PreviewIcon  /> 
        </IconButton>
      </div>
    </header>
  );
}

export default App;
