import React from "react";
import { Button } from "@mui/material";
import html2pdf from "html2pdf.js";

const SavePDFButton = () => {
  const savePDF = () => {
    document.body.classList.remove("dark-mode");
    const element = document.getElementById('dashboard-content');; 

    const options = {
      margin: [0.65, 0, 0.65, 0],
      filename: "dashboard.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      pagebreak: { mode: ['noempty', 'css'] },
    };

    html2pdf()
      .from(element)
      .set(options)
      .toPdf()
      .get('pdf') 
      .then((pdf) => {
        const pageCount = pdf.internal.getNumberOfPages();
        for (let i = 1; i <= pageCount; i++) {
          pdf.setPage(i);

          pdf.setFontSize(12);
          pdf.text("Dashboard Report", pdf.internal.pageSize.width / 2, 0.5, { align: "center" });

          const headerLineY = 0.6; 
          pdf.setLineWidth(0); 
          pdf.line(0.5, headerLineY, pdf.internal.pageSize.width - 0.5, headerLineY); 

          const footerLineY = pdf.internal.pageSize.height - 0.7; 
          pdf.setLineWidth(0);
          pdf.line(0.5, footerLineY, pdf.internal.pageSize.width - 0.5, footerLineY); 

          pdf.setFontSize(10);
          const footerText = "Sample Footer";
          const textWidth = pdf.getTextWidth(footerText);
          const xPosition = (pdf.internal.pageSize.width - textWidth) / 2;
          pdf.text(footerText, xPosition, pdf.internal.pageSize.height - 0.25);

          pdf.text(`Page ${i} of ${pageCount}`, pdf.internal.pageSize.width - 0.5, pdf.internal.pageSize.height - 0.25, { align: "right" });
        }

        pdf.save();
      })
      .then(() => {
        console.log("PDF saved successfully.");
      });
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={savePDF}
      style={{ position: "absolute", right: "20px", top: "15px" }}
    >
      Save as PDF
    </Button>
  );
};

export default SavePDFButton;
