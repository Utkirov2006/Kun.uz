import React from 'react';

const Boxs = (props) => {
    return (
        <div className='box'>

            <h2 style={{ margin: "20px 61px" }}>{props.logo}</h2>
            <li style={{ margin: "10px", listStyle: "none" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i>  {props.name}</li>
            <ol style={{ fontSize: "15px",fontWeight:"bold" }}>{props.task}</ol>

        </div>
    );
};

export default Boxs;