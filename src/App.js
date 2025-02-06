import React from "react";
import Graph1 from "./components/Graph1";
import ChartsOverviewDemo from "./components/ChartsOverviewDemo";
import PieChart from "./components/PieChart";
import MapChart from "./components/MapChart";
import "./App.css";
import BasicTable from "./components/BasicTable";
import SavePDFButton from "./components/SavePDFButton";
import Para from "./components/Para"; 
function App() {
  return (
    <div>
      {/* Header Section */}
      <header className="header">
        Dashboard
        <SavePDFButton /> 
      </header>

      {/* Main Content */}
      <div className="App" id="dashboard-content">
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
      </div>
    </div>
  );
}

export default App;
