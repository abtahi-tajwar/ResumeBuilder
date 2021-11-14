import React from 'react'

function IncreasingInput({ cvInfo, setCvInfo, keyName }) {
    
    let currentIndex = -1
    const handleInput = (e) => {
        let updatedInfo = cvInfo[keyName].map((input, index) => {
            if(keyName+'_'+index === e.target.name) {
                return e.target.value
            } 
            return input
        })        
        setCvInfo({
            ...cvInfo,
            [keyName]: updatedInfo
        })
    }
    const addNewItem = (e) => {
        setCvInfo({
            ...cvInfo,
            [keyName]: [...cvInfo[keyName], '']
        })
    }
    const removeItem = (e) => {
        
        let updatedInfo = cvInfo[keyName].filter((input, index) => {
            console.log(index, e.target.getAttribute('data-removeIndex'))
            return index != e.target.getAttribute('data-removeIndex')
        })  
        setCvInfo({
            ...cvInfo,
            [keyName]: updatedInfo
        }) 
    }
    return (        
        <div>
            <h4 className="light-text">Heading Informations 1</h4>
            {cvInfo[keyName].map((input, index) => {
                currentIndex = index
                return(
                    <div className="flex fg-1 flex-align mt-1">
                        <input 
                            name={keyName+'_'+index}
                            value={input}
                            onChange={handleInput}
                            className="text-input_sm flex-1"
                        />
                        <button 
                            onClick={removeItem}
                            data-removeIndex={index}
                            className="circle_icon danger"
                        > - </button>
                    </div>
                )
            })}
            <button type="button" onClick={addNewItem} className="btn mt-1">Add New Item</button>
        </div>
       
    )
}

export default IncreasingInput
