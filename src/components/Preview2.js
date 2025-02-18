import React from "react";

import SavePDFButton from "./SavePDFButton";
import Preview from "./Preview"; 
const Preview2 = () => {
  return (
    <div>
        <header className="header">
        <div>Dashboard</div>
        <div className="header-buttons">
                
                <SavePDFButton />
        </div>
        </header>
        <Preview />
    </div>
  );
};

export default Preview2;
