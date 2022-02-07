import React, { useState, useEffect, useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import LabelnputGroup from '../LabelnputGroup';
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
import useWindowSize from '../../../hooks/useWindowSize';
// import {Editor, EditorState, RichUtils} from 'draft-js';

function IncreasingGroupInput({ items, handleItems, name }) {
    const windowSize = useWindowSize()
    const [item, setItem] = useState({
        title: "",
        subtitle: "",
        date: "",
        description: ""
    })
    const [currentIndex, setCurrentIndex] = useState(0)
    // To track the initial load of use effect
    const reloadCount = useRef(0)
    // To track the editor
    const editorRef = useRef(null);
    const handleInput = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }
    const handleDescription = (e) => {
        setItem({
            ...item,
            description: editorRef.current.getContent()
        })
        // console.log(editorRef.current.getContent())
    }
    useEffect(() => {     
        if(reloadCount.current !== 0) { // Prevent the initial loadin
            handleItems(currentIndex, item, 'edit', name)
        }
        reloadCount.current = reloadCount.current + 1;
    }, [item])
    const addData = () => {
        handleItems(0, 
            {
                title: "",
                subtitle: "",
                date: "",
                description: ""
            }, 
            "add", name)
    }
    const removeData = (e, index) => {
        console.log("Remove data" + index)
        handleItems(index, "", "delete", name)
    }
    const handleDataSelect = (index) => {
        setItem(items[index])
        setCurrentIndex(index)
    }    
    return (
        <div>
            <div>
                <LabelnputGroup
                    label="Title"
                    type="text"
                    name="title"
                    value={item.title}
                    onChange={handleInput}
                />
                <LabelnputGroup
                    label="Subtitle"
                    type="text"
                    name="subtitle"
                    value={item.subtitle}
                    onChange={handleInput}
                />
                <LabelnputGroup
                    label="Date"
                    type="text"
                    name="date"
                    value={item.date}
                    onChange={handleInput}
                />
                <div className="mt">                    
                    <label className="mt-2">Description</label>
                    {/* <textarea
                        name="description"
                        onChange={handleInput}
                        className="text-input mt-1 bb w-100"
                    >{item.description}</textarea> */}
                    <Editor
                        onInit={(evt, editor) => editorRef.current = editor}
                        value={item.description}
                        init={{
                            height: 200,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar: 'undo redo | formatselect | bold italic backcolor | bullist numlist ',
                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                        }}
                        onEditorChange={handleDescription}
                    />
                    {/* <Editor editorState={item.description} onChange={handleDescription} /> */}
                </div>
            </div>
            <div>
                {items.map((item, index) => 
                    <ul className="select_list">
                        <li 
                            key={index}
                            className="flex flex-align"
                            onClick={() => handleDataSelect(index)}
                        >
                            <div className="flex-1" style={{pointerEvents: 'none'}}>
                                <p><b>{item.title}</b></p>
                                <p>{item.subtitle}</p>
                            </div>
                            <div 
                                className="close_icon" 
                                onClick={(event) => removeData(event, index)}
                            >
                                <AiFillCloseCircle style={{pointerEvents: 'none'}}/>
                            </div>                        
                        </li>
                    </ul>
                )}
                <button 
                    className="btn flex flex-align"
                    onClick={addData}
                ><AiOutlinePlusCircle />&nbsp; Add Item</button>
            </div>
        </div>
    );
}

export default IncreasingGroupInput;