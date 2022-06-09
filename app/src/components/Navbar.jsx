import React from 'react';

const Navbar = () => {
    return (
        <>

            <div className="navbar">
                <div className="ul1">


                    <h2>KUN.UZ</h2>
                    <li>Kategoriyalar</li>
                    <li>Hudud</li>
                    <li>Media</li>

                </div>
                <ul className='ul2'>

                    <select id="language" style={{padding:"8px"}}>
                        <option value="O'zbek tili">O'zbek tili</option>
                        <option value="saab">Rus tili</option>
                        <option value="opel">Ingliz tili</option>
                        <option value="audi">Arab tili</option>
                        <option value="audi">Ispan tili</option>
                        <option value="audi">Fransuz tili</option>
                        <option value="audi">Xitoy tili</option>
                        <option value="audi">Hind tili</option>


                    </select>
                    {/* <button className='btn1' > O'zbek tili
                        <span style={{ width: "42px", height: "42px", borderRadius: "20px", background: "#AAAAAA", position: "absolute", margin: "-12px 4px" }}>
                            <i style={{ margin: "13px", fontSize: "20px" }} class="fas fa-chevron-down"></i></span>
                    </button> */}






                    <li style={{ fontWeight: "bold" }}>USD 10,690.08 <i style={{ color: "#FF4F4F", margin: "9px" }} class="fas fa-chevron-down"></i></li>
                    <li style={{ fontWeight: "bold" }}>RUB 148.85 <i style={{ color: "#FF4F4F", margin: "9px" }} class="fas fa-chevron-down"></i></li>

                </ul>

            </div>























            {/* <div className="navbar">
                <ul className='ul1'>
                    <h2>KUN.UZ</h2>
                    <li>Kategoriyalar</li>
                    <li>Hudud</li>
                    <li>Media</li>
                </ul>

                <ul className='ul2'>
                    <i style={{ position: "absolute", left: "-1rem" }} class="fas fa-search"></i>
                    <button className='btn1' > O'zbek tili
                        <span style={{ width: "42px", height: "42px", borderRadius: "20px", background: "#AAAAAA", position: "absolute", margin: "-13px 12px" }}>
                            <i style={{ margin: "13px", fontSize: "20px" }} class="fas fa-chevron-down"></i></span>
                    </button>







                    <li style={{fontWeight:"bold"}}>USD 10,690.08 <i style={{ color: "#FF4F4F", margin: "9px" }} class="fas fa-chevron-down"></i></li>
                    <li style={{fontWeight:"bold"}}>RUB 148.85 <i style={{ color: "#FF4F4F", margin: "9px" }} class="fas fa-chevron-down"></i></li>

                </ul>



            </div> */}
        </>
    );
};

export default Navbar;