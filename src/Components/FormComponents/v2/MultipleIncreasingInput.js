import React from 'react';

function MultipleIncreasingInput({ values, handleInput, name, keys}) {
    const handleLangugaeEdit = (event, index) => {
        const obj = { language: event.target.value, rating: values[index].rating }
        handleInput(index, obj, "edit")
    }
    const handleRatingEdit = (event, index) => {
        const obj = { language: values[index].language, rating: event.target.value }
        handleInput(index, obj, "edit")
    }
    const handleEdit = (event, index, currentKey) => {
        const obj = {}
        keys.forEach(key => {
            if(key === currentKey) {
                obj[key] = event.target.value
                return
            } 
            obj[key] = values[index][key]
        });
        handleInput(index, obj, "edit")
    }
    const removeItem = (event, index) => {
        handleInput(index, event.target.value, "delete")
    }
    const addNewItem = () => {
        handleInput(0, {language: "", rating: "" }, "add")
    }
    return (
        <div>
            <h4 className="light-text mt-3" style={{fontSize: '1.3rem'}}>{name}</h4>
            {values.map((item, index) => {
                return(
                    <div className="flex fg-1 flex-align mt-1">
                        {keys.map(key => 
                            <div className="flex-1">
                                <p>{key}</p>
                                <input 
                                    name={`${name}_${key}_${index}`}
                                    key={index}
                                    value={item[key]}
                                    onChange={event => handleEdit(event, index, key)}
                                    className="text-input_sm w-100"
                                    style={{boxSizing: 'border-box'}}
                                />
                            </div>
                        )}
                        <button 
                            onClick={event => removeItem(event, index)}
                            data-removeIndex={index}
                            className="circle_icon danger"
                            style={{alignSelf: "flex-end"}}
                        > - </button>
                    </div>
                )
            })}
            <button type="button" onClick={addNewItem} className="btn mt-1">Add New Item</button>
        </div>
    );
}

export default MultipleIncreasingInput;