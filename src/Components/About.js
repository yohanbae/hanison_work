import React from "react";
import styled from "styled-components";
import Boy from "../assets/image/hero_reg.gif";

const Wrap = styled.div`
    display:grid;
    grid-template-columns: 180px 1fr;
    position:relative;
    margin-bottom:50px;
    &::before{
        content:'';
        width:100%;
        height:200px;
        background:lightblue;
        opacity:0.2;
        position:absolute;
        top:40px;
        right:0px;
        z-index:-1;
    }
`;

const BoyImg = styled.img`
    width:120px;
    height:280px;
    user-select: none;
    user-drag: none;
    text-align:center;
`;
const AboutImgWrap = styled.div`
    text-align:center;
`;
const AboutPara = styled.p`
    padding:20px;
    padding-top:0;
    padding-right:0;
    margin:0;
`;
const About = () => {

    return (
        <Wrap>
            <AboutImgWrap>
                <BoyImg src={Boy} />
            </AboutImgWrap>
            <AboutPara>
                Hello. My name is Yohan Bae. I am a web developer graduated from Ryerson University. After graduation, I worked in the media department of an organization IACD for 5 years. While I was there, I also worked as a freelancer developer. I am also a traveler that visited 10 countries past 7 years.
                <br /><br />
                Now I'm looking forward to getting a full-time web developer position. I'm a very open-minded person with everyone as I traveled the world, and the attitude is the most value that I believe in. Please see my skills below and my works on next page.
            </AboutPara>
        </Wrap>
    )

}

export default About;