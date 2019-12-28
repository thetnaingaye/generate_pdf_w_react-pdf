import React from "react";
import "./App.css";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { SamplePDF } from "./Components/SamplePDF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>PDF generate</p>
      </header>
      <div style={{paddingTop:100}}>
        <PDFDownloadLink
          document={<SamplePDF />}
          fileName="demo.pdf"
          style={{
            textDecoration: "none",
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a"
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Loading document..." : "Download Pdf"
          }
        </PDFDownloadLink>
      </div>
    </div>
  );
}

export default App;
