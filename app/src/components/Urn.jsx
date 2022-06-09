import React from 'react';

const Urn = (props) => {
    return (
        <div className='urn' style={{display:"flex",margin:"10px 0 5px 30px"}}>
  

            <img src={props.img1}/>
            
            <p style={{marginLeft:"20px",fontSize:"15px",color:"white"}}>{props.children}</p>

        </div>
    );
};

export default Urn;