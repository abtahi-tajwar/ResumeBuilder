import React from 'react';

function MultipleIncreasingInput({ values, handleInput, name}) {
    const handleLangugaeEdit = (event, index) => {
        const obj = { language: event.target.value, rating: values[index].rating }
        handleInput(index, obj, "edit")
    }
    const handleRatingEdit = (event, index) => {
        const obj = { language: values[index].language, rating: event.target.value }
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
            <h4 className="light-text">Heading Informations 1</h4>
            {values.map((item, index) => {
                return(
                    <div className="flex fg-1 flex-align mt-1">
                        <input 
                            name={name+'_language_'+index}
                            key={index}
                            value={item.language}
                            onChange={event => handleLangugaeEdit(event, index)}
                            className="text-input_sm flex-1"
                        />
                        <input 
                            name={name+'_rating_'+index}
                            key={index}
                            value={item.rating}
                            onChange={event => handleRatingEdit(event, index)}
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
    );
}

export default MultipleIncreasingInput;