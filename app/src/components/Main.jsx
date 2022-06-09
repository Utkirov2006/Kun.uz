import React from 'react';
import Card from './Card';

const Main = (props) => {
    return (
        <>
            <div className='main'>
                <img className='img' src={props.img} />

                <Card></Card>


            </div>
        </>
    );
};

export default Main;