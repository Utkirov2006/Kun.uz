import React from 'react';

const Cards = (props) => {
    return (
        <div className="cards">

        <img src={props.img} className="avatar" />
     

        <p style={{color:"#AAAAAA"}}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>
        <p style={{fontWeight:"bold"}}>{props.children}</p> 

    </div>
    );
};

export default Cards;








