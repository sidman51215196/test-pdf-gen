import React from "react";
import { Button } from "@mui/material";

const PreviewPDFButton = () => {
  const previewPDF = () => {
    const newWindow = window.open("", "_blank");

    // Write the HTML structure for the new tab
    newWindow.document.write(`
      <html>
        <head>
          <title>Preview Content</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            .card { margin-bottom: 20px; }
            h1 { color: #1976d2; }
          </style>
        </head>
        <body>
          <div id="preview-root"></div>
          <script src="https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js"></script>
          <script>
            // Dynamically load React and Preview Component
            const previewDiv = document.getElementById('preview-root');
            const Preview = () => {
              return (
                <div className="App pdf-content" id="dashboard-content">
                  <div className="card">
                    <h1>Basic Table</h1>
                    <div>Table Component Placeholder</div>
                  </div>
                  <div className="card break">
                    <h1>Graph</h1>
                    <div>Graph Component Placeholder</div>
                  </div>
                  <div className="card">
                    <h1>Bar Chart</h1>
                    <div>Chart Component Placeholder</div>
                  </div>
                </div>
              );
            };
            ReactDOM.render(React.createElement(Preview), previewDiv);
          </script>
        </body>
      </html>
    `);

    newWindow.document.close();
  };

  return (
    <Button variant="contained" color="primary" onClick={previewPDF}>
      Preview Content
    </Button>
  );
};

export default PreviewPDFButton;
