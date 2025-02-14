import React, { useState } from "react";
import Graph1 from "./components/Graph1";
import ChartsOverviewDemo from "./components/ChartsOverviewDemo";
import "./App.css";
import BasicTable from "./components/BasicTable";
import SavePDFButton from "./components/SavePDFButton";
import Para from "./components/Para"; 
import BarsDataset from "./components/BarsDataset";
import { ThemeProvider, createTheme, CssBaseline, IconButton } from "@mui/material";
import { LightMode, DarkMode } from '@mui/icons-material';
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
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <div>
      {/* Header Section */}
      <header className="header">
          <div>Dashboard</div>
          <div className="header-buttons">
          <IconButton color="inherit" onClick={toggleTheme}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </IconButton>
            <SavePDFButton /> 
          </div>
          
          
        </header>

      {/* Main Content */}
      <div className="App pdf-content" id="dashboard-content">
        <div className="card">
          <h1>Basic Table</h1>
          <BasicTable />
        </div>
        <div className="card break">
          <h1>Graph</h1>
          <Graph1 />
        </div>
        <div className="card">
          <h1>Bar Chart</h1>
          <ChartsOverviewDemo />
        </div>
        <div className="card ">
          <h1>Sample Paragraph</h1>
          <Para />
        </div>
        <div className="card break">
          <h1>Sample Paragraph</h1>
          <BarsDataset />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card break">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card break">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card break">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card break">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <Graph1 />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <BarsDataset />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <BasicTable />
        </div>
        <div className="card break">
          <h1>Sample Graph</h1>
          <BasicTable />
        </div>
        <div className="card break">
          <h1>Sample Graph</h1>
          <ChartsOverviewDemo />
        </div>
        <div className="card ">
          <h1>Sample Graph</h1>
          <ChartsOverviewDemo />
        </div>
        <div className="card break">
          <h1>Sample Graph</h1>
          <ChartsOverviewDemo />
        </div>
      </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
