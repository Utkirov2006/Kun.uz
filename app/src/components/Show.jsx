import React from 'react';

const Show = ({ Toggle }) => {
    return (
        <div className='show'>
            <button className="btn" style={{ "fontSize": "24px" }}>
                &#127897;
            </button>

            <button onClick={Toggle} className="btn" style={{ "fontSize": "24px" }}>
                &#9776;

            </button>
            <button className="btn" style={{ "fontSize": "24px" }}>
                &#x2742;
            </button>

        </div>


    );
};

export default Show;

