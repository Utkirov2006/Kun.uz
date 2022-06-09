import React from 'react';

const Footer = () => {
    return (
        <div className='footer'>
            <h1 style={{ color: 'white', position: "absolute", marginTop: "2rem", left: "17rem" }}>Har doim xabardor bo’ling!</h1>

            <ol style={{ color: "#86C7FF", position: "absolute", marginTop: "6rem", left: "15rem" }}>Effect.uz mobil ilovasini ko’chirib oling va barcha yangiliklar siz bilan</ol>

            <button className='btn6'><i style={{fontSize:"23px"}} class="fab fa-google-play">Dowloand on </i> <br /> Google play</button>
            <button className="btn7"><i style={{fontSize:"23px"}} class="fab fa-apple"> Dowloand on </i><br /> Google play</button>

        </div>
    );
};

export default Footer;