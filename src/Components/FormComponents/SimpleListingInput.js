import React from 'react'
import LabelnputGroup from './LabelnputGroup'
import { useState, useEffect } from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'

function SimpleListingInput({ cvInfo, setCvInfo, keyName}) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [typing, setTyping] = useState(false)
    const [item, setItem] = useState({
        content: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].content,
        subcontent: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].subcontent,
    })
    const handleInput = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
        setTyping(!typing)
    }
    const handleDataSelect = (e) => {
        setSelectedIndex(parseInt(e.target.getAttribute('data-selectIndex')))
        setItem({
            content: cvInfo[keyName][selectedIndex].content,
            subcontent: cvInfo[keyName][selectedIndex].subcontent,
        })
    }
    const addData = () => {
        setCvInfo({
            ...cvInfo,
            [keyName]: [
                ...cvInfo[keyName],
                {
                    content: "New Content",
                    subcontent: "New Subcontent",
                }
            ]
        })
    }
    const removeData = (e) => {
        e.stopPropagation()
        console.log(e.target.getAttribute('data-removeIndex') )
        const newItems = cvInfo[keyName].filter((info, index) => {
            return index != e.target.getAttribute('data-removeIndex') 
        })

        setCvInfo({
            ...cvInfo,
            [keyName]: [
                ...newItems
            ]
        })
    }
    useEffect(() => {
        const newItems = cvInfo[keyName].map((info, index) => {
            if(index === selectedIndex) {
                return { ...item }
            }
            return { ...info }
        })
        setCvInfo({
            ...cvInfo,
            [keyName]: [
                ...newItems
            ]
        })
    }, [typing])
    return (
        <div className="row">
            <div>
                <LabelnputGroup
                    label="Content"
                    type="text"
                    name="content"
                    value={item.content}
                    onChange={handleInput}
                />
                <LabelnputGroup
                    label="Sub Content"
                    type="text"
                    name="subcontent"
                    value={item.subcontent}
                    onChange={handleInput}
                />
            </div>
            <div>
                {cvInfo[keyName].map((item, index) => 
                    <ul className="select_list">
                        <li 
                            key={index}
                            data-selectIndex={index}
                            className="flex flex-align"
                            onClick={handleDataSelect}
                        >
                            <div className="flex-1" style={{pointerEvents: 'none'}}>
                                <p><b>{item.content}</b></p>
                                <p>{item.subcontent}</p>
                            </div>
                            <div 
                                className="close_icon" 
                                data-removeIndex={index}
                                onClick={removeData}
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
    )
}

export default SimpleListingInput
