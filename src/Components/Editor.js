import React from 'react'
import { useRef, useState } from 'react';
import ReactToPrint, { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import CVPage from './Templates/CVPage';
import { template1 } from './Templates'

function Editor() {
    const componentRef  = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current
    })
    const [cvInfo, setCvInfo] = useState({
        name: 'Your Name'
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
    const template = template1(cvInfo)
    const handleForm = (e) => {
        setCvInfo({
            ...cvInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <div className="flex">
                <div className="container flex-1">
                    <h2 className="light-text">Live CV Editor</h2>
                    <button onClick={handlePrint} className="btn m-1">Print</button>
                    <button onClick={pdfDownload} className="btn m-1">Download</button>

                    <form>
                        <input
                            type="text" 
                            name="name"
                            value={cvInfo.name}
                            onChange={handleForm}
                        />
                    </form>
                </div>
                <div>
                    <div className="pdfDownload">
                        <CVPage 
                            ref={componentRef}
                            page="letter"
                            contents={template}                            
                        />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
    
}

export default Editor
