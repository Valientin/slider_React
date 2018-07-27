import React from 'react';

import './addSlide.scss';

const AddSlide = (props) => {

    const showPreview = () => (
        <div
            className="add-slide__preview"
            style={{background: props.previewUrl ? `url(${props.previewUrl})` : '#eee'}}
        ></div>
    )

    return(
        <div className="add-slide">
            <div className="add-slide__wrapper">
                <div><span>Upload</span></div>
                <input className="add-slide__input" type="file" onChange={(e) => props.handleChangeUploader(e)} accept="image/jpeg,image/png,image/gif"/>
            </div>
            {showPreview()}
            <button 
                className={props.previewUrl ? "add-slide__button" : "add-slide__button disabled"}
                onClick={() => props.addSlide()}
            >
                Add Slide
            </button>
        </div>
    )
}

export default AddSlide;