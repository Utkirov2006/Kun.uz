import React from 'react';
import Boxs from './Boxs';

const Card = (props) => {
    return (
        <div className='card' style={props.style}>
            <h2 style={{ margin: "8px 48px" }}>So’ngi yangiliklar</h2>

             <Boxs name="11:47 / 05.11.2021" task="«Haydovchilik guvohnomasini olish jarayoni inson aralashuvisiz, murakkab va qimmat bo‘lishi ker..."></Boxs>
            <div style={{ border: " 1px solid #AAAAAA",marginTop:"47px" }}></div>

            <Boxs name="11:47 / 05.11.2021" task="«Haydovchilik guvohnomasini olish jarayoni inson aralashuvisiz, murakkab va qimmat bo‘lishi ker..."></Boxs>
            <div style={{ border: " 1px solid #AAAAAA",marginTop:"47px" }}></div>

            <Boxs name="11:47 / 05.11.2021" task="«Haydovchilik guvohnomasini olish jarayoni inson aralashuvisiz, murakkab va qimmat bo‘lishi ker..."></Boxs>
            <div style={{ border: " 1px solid #AAAAAA",marginTop:"47px" }}></div>
            

            <Boxs name="11:47 / 05.11.2021" task="«Haydovchilik guvohnomasini olish jarayoni inson aralashuvisiz, murakkab va qimmat bo‘lishi ker..."></Boxs>

            <button className='btn2'>Bo‘limga o‘tish </button>

        </div>
    );
};

export default Card;