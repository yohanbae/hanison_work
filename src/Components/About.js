import React from "react";
import styled from "styled-components";
import Boy from "../assets/image/hero.png";

const Wrap = styled.div`
    display:grid;
    grid-template-columns: 180px 1fr;
    position:relative;
    margin-bottom:100px;
    align-items:center;
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;    
    }
`;

const BoyImg = styled.img`
    width:70px;
    height:180px;
    user-select: none;
    user-drag: none;
    text-align:center;
`;
const AboutImgWrap = styled.div`
    text-align:center;
`;
const AboutPara = styled.div`
    height:220px;
    margin:0;
    display:grid;
    align-items: center;
    font-size:20px;
`;
const About = () => {

    return (
        <Wrap>
            <AboutImgWrap>
                <BoyImg src={Boy} />
            </AboutImgWrap>
            <AboutPara>
                <div>
                I'm a Front-End Developer. I'm interested to develop a app that is enjoyable, easy, and beneficial to the users.
                {/* Hello. My name is Yohan Bae. I am a web developer graduated from Ryerson University. After graduation, I worked in the media department of an organization IACD for 5 years. While I was there, I also worked as a freelancer developer. I am also a traveler that visited 10 countries past 7 years.
                <br /><br />
                Now I'm looking forward to getting a full-time web developer position. I'm a very open-minded person with everyone as I traveled the world, and the attitude is the most value that I believe in. Please see my skills below and my works on next page. */}
                </div>
            </AboutPara>
        </Wrap>
    )

}

export default About;