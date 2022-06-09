import React from 'react';
import Urn from './Urn';

import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import img4 from "../img/img4.png"
import img5 from "../img/img5.png"


const Chest = () => {
    return (
        <div className='chest'>

            <Urn img1={img1}><p style={{ color: "#AAAAAA" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli iqtisodiyot...</Urn>
            <Urn img1={img2}><p style={{ color: "#AAAAAA" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli iqtisodiyot...</Urn>
            <Urn img1={img3}><p style={{ color: "#AAAAAA" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli iqtisodiyot...</Urn>
            <Urn img1={img4}><p style={{ color: "#AAAAAA" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli iqtisodiyot...</Urn>
            <Urn img1={img5}><p style={{ color: "#AAAAAA" }}><i style={{ color: "#AAAAAA" }} class="fas fa-clock"></i> 05.11.2021</p>Kaan Terzio‘g‘lu: “O‘zbekiston kelajagi – raqamli iqtisodiyot...</Urn>

        </div>
    );
};

export default Chest;