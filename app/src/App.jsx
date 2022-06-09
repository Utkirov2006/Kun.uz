import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Show from "./components/Show";
import Sidebar from "./components/Sidebar";

import rasm from './img/Main.png';
import rasm2 from "./img/foto2.png"
import rasm3 from "./img/foto1.png"
import rasm4 from "./img/foto3.png"
import rasm5 from "./img/foto4.png"

import Main from "./components/Main";
import MainContent from "./components/MainContent";
import Cards from "./components/Cards";
import Case from "./components/Case";

import rasm6 from "./img/foto5.png"
import rasm7 from "./img/foto6.png"
import ImgWrapper from "./components/ImgWrapper";

import rasm8 from "./img/foto7.png"
import rasm9 from "./img/foto8.png"
import rasm10 from "./img/foto9.png"
import rasm11 from "./img/foto10.png"
import rasm12 from "./img/foto11.png"
import rasm13 from "./img/foto12.png"

import Wrapper from "./components/Wrapper";
import Content from "./components/Content";
import rasm14 from "./img/video.png"
import Chest from "./components/Chest";
import Footer from "./components/Footer";
import FooterFluid from "./components/FooterFluid";
const App = () => {


  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow((e) => !e)
  }



  return (
    <>
      <Navbar />
      <Show Toggle={Toggle} />

      <Sidebar show={show} />

      <Main img={rasm} />


      <div className="container-fluid">
        <MainContent name="Dolzarb xabarlar" btn="Bo'limga o'tish"></MainContent>

        <Cards img={rasm2}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha...</Cards>
        <Cards img={rasm3}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha...</Cards>
        <Cards img={rasm4}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha... </Cards>
        <Cards img={rasm5}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha...</Cards>


        <Cards img={rasm2}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha...</Cards>
        <Cards img={rasm3}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha...</Cards>
        <Cards img={rasm4}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha... </Cards>
        <Cards img={rasm5}>Toshkentda 678 kishi nafas qisishi tufayli «Tez yordam»ga murojaat qildi. SSV bunday sha...</Cards>


        <Case>«Mussolini» Londonda: murvatlar qattiq tortilib, sovrinlar kelishi boshlanadimi?<br /><br /> <p style={{ color: "#666666" }}>Londonning «Tottenhem» klubi nihoyat «agent-murabbiy» Nunu Eshpiritu Santuni iste'foga chiqardi. Klubdagi dastlabki uch o‘yinida minima...</p></Case>
        <Case>«Mussolini» Londonda: murvatlar qattiq tortilib, sovrinlar kelishi boshlanadimi?<br /><br /> <p style={{ color: "#666666" }}>Londonning «Tottenhem» klubi nihoyat «agent-murabbiy» Nunu Eshpiritu Santuni iste'foga chiqardi. Klubdagi dastlabki uch o‘yinida minima...</p></Case>
        <Case>«Mussolini» Londonda: murvatlar qattiq tortilib, sovrinlar kelishi boshlanadimi?<br /><br /> <p style={{ color: "#666666" }}>Londonning «Tottenhem» klubi nihoyat «agent-murabbiy» Nunu Eshpiritu Santuni iste'foga chiqardi. Klubdagi dastlabki uch o‘yinida minima...</p></Case>
        <Case>«Mussolini» Londonda: murvatlar qattiq tortilib, sovrinlar kelishi boshlanadimi?<br /><br /> <p style={{ color: "#666666" }}>Londonning «Tottenhem» klubi nihoyat «agent-murabbiy» Nunu Eshpiritu Santuni iste'foga chiqardi. Klubdagi dastlabki uch o‘yinida minima...</p></Case>
        <Case>«Mussolini» Londonda: murvatlar qattiq tortilib, sovrinlar kelishi boshlanadimi?<br /><br /> <p style={{ color: "#666666" }}>Londonning «Tottenhem» klubi nihoyat «agent-murabbiy» Nunu Eshpiritu Santuni iste'foga chiqardi. Klubdagi dastlabki uch o‘yinida minima...</p></Case>
        <Case>«Mussolini» Londonda: murvatlar qattiq tortilib, sovrinlar kelishi boshlanadimi?<br /><br /> <p style={{ color: "#666666" }}>Londonning «Tottenhem» klubi nihoyat «agent-murabbiy» Nunu Eshpiritu Santuni iste'foga chiqardi. Klubdagi dastlabki uch o‘yinida minima...</p></Case>


      </div>

      <div className="photo-news">
        <h1 style={{ position: "absolute", left: "4rem", marginTop: "10px", fontFamily: "cursive" }}>Foto-yangiliklar</h1>
        <button className="btn4">Bo'limga o'tish</button>

        <ImgWrapper img={rasm6}></ImgWrapper>
        <ImgWrapper img={rasm7}></ImgWrapper>

      </div>

      <div className="wrapper">


        <Wrapper img={rasm8}>Ko‘p qavatli uylar orasiga yangi ko‘p qavatli uy. Navbatdagi nizo Chilonzorda</Wrapper>
        <Wrapper img={rasm9}>Ko‘p qavatli uylar orasiga yangi ko‘p qavatli uy. Navbatdagi nizo Chilonzorda</Wrapper>
        <Wrapper img={rasm10}>Ko‘p qavatli uylar orasiga yangi ko‘p qavatli uy. Navbatdagi nizo Chilonzorda</Wrapper>
        <Wrapper img={rasm11}>Ko‘p qavatli uylar orasiga yangi ko‘p qavatli uy. Navbatdagi nizo Chilonzorda</Wrapper>
        <Wrapper img={rasm12}>Ko‘p qavatli uylar orasiga yangi ko‘p qavatli uy. Navbatdagi nizo Chilonzorda</Wrapper>
        <Wrapper img={rasm13}>Ko‘p qavatli uylar orasiga yangi ko‘p qavatli uy. Navbatdagi nizo Chilonzorda</Wrapper>

      </div>

      <div className="content">
        <h1 style={{ position: "absolute", left: "41rem", marginTop: "13px", color: "white", fontFamily: "cursive" }}>Video-yangiliklarr</h1>
        <Chest />

        <Content img={rasm14}></Content>
        <button className="btn5">Bo'limga o'tish</button>
      </div>



      <Footer />

<FooterFluid/>
    </>

  );

};

export default App;