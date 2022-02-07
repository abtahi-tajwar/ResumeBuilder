import React, { useState, useRef, useEffect } from 'react';
import LabelnputGroup from '../LabelnputGroup';
import { AiFillCloseCircle, AiOutlinePlusCircle } from 'react-icons/ai'

function ReferencesgroupInput({ items, handleItems, name }) {
    const [item, setItem] = useState({
        name: "",
        subtitle: "",
        phone: "",
        email: ""
    })
    const [currentIndex, setCurrentIndex] = useState(0)
    // To track the initial load of use effect
    const reloadCount = useRef(0)
    // To track the editor
    const handleInput = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
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
  return <div>
        <div>
            <LabelnputGroup
                label="Name"
                type="text"
                name="name"
                value={item.name}
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
                label="Phone"
                type="text"
                name="phone"
                value={item.phone}
                onChange={handleInput}
            />
            <LabelnputGroup
                label="Email"
                type="text"
                name="email"
                value={item.email}
                onChange={handleInput}
            />
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
                            <p><b>{item.name}</b></p>
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
        </div>;
}

export default ReferencesgroupInput;
