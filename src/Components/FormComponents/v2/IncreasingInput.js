import React from 'react'

function IncreasingInput({ values, handleInput, name }) {
    
    const handleEdit = (event, index) => {
        handleInput(index, event.target.value, "edit")
    }
    const removeItem = (event, index) => {
        handleInput(index, event.target.value, "delete")
    }
    const addNewItem = () => {
        handleInput(0, "", "add")
    }
    return (        
        <div>
            <h4 className="light-text">{name}</h4>
            {values.map((item, index) => {
                return(
                    <div className="flex fg-1 flex-align mt-1">
                        <input 
                            name={name+'_'+index}
                            key={index}
                            value={item}
                            onChange={event => handleEdit(event, index)}
                            className="text-input_sm flex-1"
                        />
                        <button 
                            onClick={event => removeItem(event, index)}
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
