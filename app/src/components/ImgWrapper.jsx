import React from 'react';

const ImgWrapper = (props) => {
    return (
        <div className='img-wrapper'>

            <img className='photo' src={props.img} />

        </div>
    );
};

export default ImgWrapper;