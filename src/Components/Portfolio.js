import React from "react";
import styled from "styled-components";

import Smileland from "./Port/Smileland";
import SmilelandMobile from "./Port/SmilelandMobile";
import Promise from "./Port/Promise";
import Prayer from "./Port/Prayer";
import Sodasu from "./Port/Sodasu";

import Baby from "../assets/image/buritto.png";


// const Title = styled.div`
//     text-align:left;
//     font-size:20px;
//     margin-top:100px;
//     margin-bottom:50px;
// `;

const TitleWrap = styled.div`
    display:grid;
    grid-template-columns:50px 1fr;
    height:50px;
    position:relative;
    border-bottom:2px solid rgba(230, 245, 232, 0.8);
    padding-bottom:20px;
    margin-top:100px;
    margin-bottom:50px;
    `;
const Title = styled.div`
    display:grid;
    align-items:end;
    font-size:20px;
    margin-left:10px;
`;

const Img = styled.img`
    width:50px;
    height:60px;
`;


const Portfolio = () => {

    return (
        <>
        <TitleWrap>
            <Img src={Baby} />
            <Title>PORTFOLIOS</Title>
        </TitleWrap>
        <Smileland />
        <SmilelandMobile />
        <Sodasu />
        <Promise />
        <Prayer />
        </>
    )
}
export default Portfolio;