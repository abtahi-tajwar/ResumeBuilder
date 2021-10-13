import Template1 from './Components/Templates/Template1'
import { useRef } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import './App.css'
function App() {
  const componentRef  = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  })

  const pdfDownload = e => {
    e.preventDefault()
    let doc = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: 'letter'
    });
    console.log(doc.internal.pageSize.width);
    doc.html(document.querySelector(".pdfDownload"), {
      callback: () => {
        doc.save('resume.pdf');
      }
    });
  }

  return (
    <div className="App">
      <button onClick={handlePrint}>Print</button>
      <button onClick={pdfDownload}>Download</button>
      <div className="pdfDownload">
        <Template1 ref={componentRef }/>
      </div>
      
    </div>
  );
}

export default App;
