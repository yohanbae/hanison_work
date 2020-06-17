import React from "react";
import styled from "styled-components";

import Baby from "../assets/image/tokki.png";

import { DiJavascript1, DiHtml5, DiCss3, DiReact, DiAngularSimple, DiIonic,
    DiNodejs, DiPhp, DiWordpress, DiFirebase, DiMongodb } from "react-icons/di";


const TitleWrap = styled.div`
    display:grid;
    grid-template-columns:40px 1fr;
    height:60px;
    position:relative;
    border-bottom:2px solid rgba(230, 245, 232, 0.8);
    padding-bottom:10px;
`;
const Title = styled.div`
    display:grid;
    align-items:end;
    font-size:20px;
    margin-left:10px;
`;

const Img = styled.img`
    width:30px;
    height:60px;
    align-items:end;
`;

const Wrap = styled.div`
    display:grid;
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap:70px;
    padding:80px 0px;
    margin-top:10px;
    box-sizing: border-box;
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(4, 1fr);
    }
`;

const SkillBox = styled.div`
    text-align:center;
`;



const Skills = () => {

    return (
        <>
        <TitleWrap>
            <Img src={Baby} />
            <Title>WEB DEVELOPMENT SKILLS</Title>
        </TitleWrap>
        <Wrap>
            <SkillBox>
                <DiHtml5 style={{fontSize:'40px', color:'gray'}} />
                <div>HTML</div>
            </SkillBox>
            <SkillBox>
                <DiCss3 style={{fontSize:'40px', color:'gray'}} />
                <div>CSS</div>
            </SkillBox>      
            <SkillBox>
                <DiJavascript1 style={{fontSize:'40px', color:'gray'}} />
                <div>JAVASCRIPT</div>
            </SkillBox>
            <SkillBox>
                <DiReact style={{fontSize:'40px', color:'gray'}} />
                <div>REACT</div>
            </SkillBox>
            <SkillBox>
                <DiAngularSimple style={{fontSize:'40px', color:'gray'}} />
                <div>ANGULAR</div>
            </SkillBox>
            <SkillBox>
                <DiIonic style={{fontSize:'40px', color:'gray'}} />
                <div>IONIC</div>
            </SkillBox>      
            <SkillBox>
                <DiNodejs style={{fontSize:'40px', color:'gray'}} />
                <div>NODE JS</div>
            </SkillBox>
            <SkillBox>
                <DiPhp style={{fontSize:'40px', color:'gray'}} />
                <div>PHP</div>
            </SkillBox>      
            <SkillBox>
                <DiWordpress style={{fontSize:'40px', color:'gray'}} />
                <div>WORDPRESS</div>
            </SkillBox>
            <SkillBox>
                <DiFirebase style={{fontSize:'40px', color:'gray'}} />
                <div>FIREBASE</div>
            </SkillBox>      
            <SkillBox>
                <DiMongodb style={{fontSize:'40px', color:'gray'}} />
                <div>MONGO DB</div>
            </SkillBox>            
        </Wrap>
        </>
    )
}

export default Skills;