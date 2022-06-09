import React from 'react';

const MainContent = (props) => {
    return (
        <>

        <div className='main-content'>
        <h3 style={{ fontSize: "36px", margin: "47px 0 54px 49px" }}>{props.name}</h3>

            <button className='btn3'>{props.btn}</button>
          
        </div>
        </>
    );
};

export default MainContent;