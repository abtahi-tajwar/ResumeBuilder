import React from 'react'
import LabelnputGroup from './LabelnputGroup'
import { useState, useEffect } from 'react'
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'
function MultipleGroupInput({ cvInfo, setCvInfo, keyName }) {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [typing, setTyping] = useState(false)
    const [item, setItem] = useState({
        title: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].title,
        subtitle: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].subtitle,
        link: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].link,
        date: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].date,
        extra: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].extra,
        description: cvInfo[keyName][selectedIndex] && cvInfo[keyName][selectedIndex].description,
    })
    const handleInput = (e) => {
        setItem({ ...item, [e.target.name]: e.target.value })
        setTyping(!typing)
    }
    const handleDataSelect = (e) => {
        setSelectedIndex(parseInt(e.target.getAttribute('data-selectIndex')))
        setItem({
            title: cvInfo[keyName][selectedIndex].title,
            subtitle: cvInfo[keyName][selectedIndex].subtitle,
            link: cvInfo[keyName][selectedIndex].link,
            date: cvInfo[keyName][selectedIndex].date,
            extra: cvInfo[keyName][selectedIndex].extra,
            description: cvInfo[keyName][selectedIndex].description,
        })
    }
    const addData = () => {
        setCvInfo({
            ...cvInfo,
            [keyName]: [
                ...cvInfo[keyName],
                {
                    title: "New Title",
                    subtitle: "New Subtitle",
                    link: "",
                    date: "",
                    extra: "",
                    description: "",
                }
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
                    label="Link"
                    type="text"
                    name="link"
                    value={item.link}
                    onChange={handleInput}
                />
                <LabelnputGroup
                    label="Date"
                    type="text"
                    name="date"
                    value={item.date}
                    onChange={handleInput}
                />
                <LabelnputGroup
                    label="Extra"
                    type="text"
                    name="extra"
                    value={item.extra}
                    onChange={handleInput}
                />
                <div className="mt">                    
                    <label className="mt-2">Description</label>
                    <textarea
                        name="description"
                        onChange={handleInput}
                        className="text-input mt-1 bb w-100"
                    >{item.description}</textarea>
                </div>
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
                                <p><b>{item.title}</b></p>
                                <p>{item.subtitle}</p>
                            </div>
                            <div className="close_icon">
                                <AiFillCloseCircle />
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

export default MultipleGroupInput
