import React from 'react';

const Wrapper = (props) => {
    return (
        <div className='wrapper-fluid'>
            <img src={props.img} className="portret"/>

            <p style={{ color: "#AAAAAA",textAlign:"center" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>
            <p style={{ fontWeight: "bold",textAlign:"center" }}>{props.children}</p>
        </div>
    );
};

export default Wrapper;