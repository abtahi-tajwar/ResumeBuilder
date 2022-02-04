import './App.css'
import Editor from './Components/Editor';
import Editor2 from './Components/Editor2';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import VariableContext from './Components/VariableContext';
import Auth from './firebase/Auth';
import Verification from './Components/pages/Verification';

function App() {
  Auth()
  return (
    <BrowserRouter>      
      <div className="App">
        {/* <button onClick={handlePrint}>Print</button>
        <button onClick={pdfDownload}>Download</button>
        <div className="pdfDownload">
          <Template ref={componentRef}/>
        </div> */}
        <VariableContext>
          <Routes>
            <Route path="/*" exact element={<Home />} />
            <Route path="/editor/:theme" exact element={<Editor2 />} />
            <Route path="/editor/:theme/:id" exact element={<Editor2 />} />
          </Routes>
        </VariableContext>
        {/* <Editor2 /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
