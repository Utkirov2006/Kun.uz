import React from 'react';

const Case = (props) => {
    return (
        <div className='case'>

            <p style={{ color: "#AAAAAA" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>
            <p style={{ fontWeight: "bold" }}>{props.children}</p>
            
        </div>
    );
};

export default Case;