import './App.css'
import Editor from './Components/Editor';
import Editor2 from './Components/Editor2';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  // const componentRef  = useRef()
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current
  // })

  // const pdfDownload = e => {
  //   e.preventDefault()
  //   let doc = new jsPDF({
  //     orientation: "portrait",
  //     unit: "pt",
  //     format: 'letter'
  //   });
  //   console.log(doc.internal.pageSize.width);
  //   doc.html(document.querySelector(".pdfDownload"), {
  //     callback: () => {
  //       doc.save('resume.pdf');
  //     }
  //   });
  // }

  return (
    <BrowserRouter>
      <div className="App">
        {/* <button onClick={handlePrint}>Print</button>
        <button onClick={pdfDownload}>Download</button>
        <div className="pdfDownload">
          <Template ref={componentRef}/>
        </div> */}
        <Routes>
          <Route path="/*" exact element={<Home/>} />
          <Route path="/editor/:theme" exact element={<Editor2 />} />
        </Routes>
        {/* <Editor2 /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
