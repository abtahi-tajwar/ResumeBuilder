import React from 'react';

function ImageUpload({ name, handleAvatarUpload, value }) {
    
    // For showing preview after uploading
    const setPreview = (e) => {
        var file = e.target.files[0]
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
            handleAvatarUpload(reader.result)
        }
    }

    return (
        <div>
            <input 
                type="file" 
                accept='image/*' 
                onChange={setPreview}
                name={name}
            />
        </div>
    );
}
export default ImageUpload;