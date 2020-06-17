import React, {useState} from "react"
import styled from "styled-components";
import port1 from "../../assets/image/sonmoa.png";

const Wrap = styled.div`
    box-sizing: border-box;
    font-size:18px;
    display:grid;
    grid-template-columns: 300px 1fr;
    position:relative;
    min-height:250px;
    margin-bottom:50px;
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;
    }
`;
const Img = styled.img`
    margin-left:20px;
    width:250px;
    height:180px;
    transition:500ms;
    object-fit: cover;
    &:hover{
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);
    }
    @media only screen and (max-width: 600px) {
        width:100%;
        height:auto;
        margin:0;
    }
`;
const Desc = styled.div`
    padding:20px 0;
`;
const DescWrap = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    margin-top:5px;
    grid-gap:5px;
`;

const H3 = styled.h3`
    padding:0; margin:0;
    font-weight:300;
    padding-top:5px;
    @media only screen and (max-width: 600px) {
        text-align:center;
    }
`;
const H4 = styled.h4`
    padding:0; margin:0;
    font-weight:300;
    font-size:15px;
    text-align:center;
    border:1px solid lightgray;
    padding:10px 0;
`;
const HLink = styled(H4)`    
    transition:500ms;
    cursor:pointer;
    &:hover{
        background: #1f1e1d;
        color:white;
    }
`;

const Lang = styled(H4)`
    display:inline;
    margin-right:15px;
    border:0;
    &:last-child{
        margin-right:0;
    }
`;

const ModalWrap = styled.div`
    min-height:450px;
    min-width:250px;
`;

const Box = styled.div`
width: 250px;
height:430px;
position:relative;
text-align:center;
`;


const Prayer = () => {
    const onGithub = () => {
        window.open('https://github.com/yohanbae/sonmoa');
    }

    return(
        <Wrap>
            <Img src={port1} />
            <div>
            <H3>SONMOA</H3>
            <Desc>This is a web-application is new version of Gentle Week. This helps you manage your weekly schedule in the most effective way. Easy to manage your weekly task and easy to see daily achievements. You will be able to enhance your lifestyle through this application.</Desc>
            <div>
                <Lang>HTML</Lang>
                <Lang>CSS</Lang>
                <Lang>REACT NATIVE with EXPO</Lang>
                <Lang>FIREBASE</Lang>
            </div>
            <DescWrap>
                <HLink onClick={() => onGithub()}>GITHUB</HLink>
            </DescWrap> 
            </div>
        </Wrap>
    );


}
export default Prayer;