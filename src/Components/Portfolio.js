import React from "react";
import styled from "styled-components";

import port2 from "../assets/image/por2.png";
import port3 from "../assets/image/por3.png";
import port4 from "../assets/image/por4.png";
import port5 from "../assets/image/por5.png";
import port6 from "../assets/image/por6.png";

import Smileland from "./Port/Smileland";
import SmilelandMobile from "./Port/SmilelandMobile";
import Promise from "./Port/Promise";
import Prayer from "./Port/Prayer";
import Sodasu from "./Port/Sodasu";

const Title = styled.div`
    text-align:left;
    font-size:30px;
    margin-bottom:50px;
`;


const Portfolio = () => {

    return (
        <>
        <Title>Portfolios</Title>
        <Smileland />
        <SmilelandMobile />
        <Promise />
        <Sodasu />
        <Prayer />
        </>
    )
}
export default Portfolio;