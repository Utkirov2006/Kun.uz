import React from 'react';

function Sidebar({ show }) {
    console.log(show);
    return (
        <div className={`sidebar text-white ${show ? "" : "close"}`}>

            <div id="mySidenav" class="sidenav">
                <a href="#"><i class="fas fa-globe"></i> Jamiyat</a> <br />

                <a href="#"><i class="fas fa-hand-holding-usd">Iqtisod </i></a><br />

                <a href="#"><i class="fas fa-landmark"></i>Siyosat </a> <br />

                <a href="#"><i class="fas fa-globe"></i>Dunyo</a> <br />

                <a href="#"><i class="fas fa-futbol"></i>Sport</a> <br />

                <a href="#"><i class="fas fa-theater-masks"></i>Madaniyat va san'at</a> <br />

                <a href="#"><i class="fas fa-robot"></i>Texnologiya</a> <br />

                <a href="#"><i class="fas fa-car-crash"></i>Hodisa</a> <br />

                <a href="#"><i class="fas fa-balance-scale"></i>Jinoyat va Jazo</a> <br />

                <a href="#"><i class="fas fa-thermometer-empty"></i>Salomatlik</a> <br />

                <a href="#"><i class="fas fa-magic"></i>Tavsiya</a> <br />



            </div>
        </div>
    );
}

export default Sidebar;