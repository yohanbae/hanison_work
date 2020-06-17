import React, {useEffect} from "react";
import styled from "styled-components";
import About from "./About";
import Portfolios from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";
import { FaDownload } from "react-icons/fa";
import {Link, animateScroll as scroll } from "react-scroll";

const Header = styled.div`
    padding:0 15%;
    font-family: 'Cafe';
    height:30px;
    display:grid;
    align-items:center;
    grid-template-columns: 1fr 1fr;
    border-bottom:1px solid #f3f3f3;

`;

const Resume = styled.span`
    text-align:right;
    cursor: pointer;
`;

const DownSide = styled.div`
    display:grid;
    grid-template-columns: 20% 80%;
    padding:0 15%;
    font-family: 'Cafe';
    @media only screen and (max-width: 600px) {
        grid-template-columns: 1fr;        
    }
`;

const Navigation = styled.div`
    position:relative;
    @media only screen and (max-width: 600px) {
        display:none;
    }
`;

const Menu = styled.ul`
    position:sticky;
    left:15%; top:65px;
    margin:0; padding:0;
    box-sizing: border-box;
`;
const Li = styled.li`
    list-style:none;
    margin:0; padding:0;
    margin-bottom:20px;
    cursor: pointer;
`;

const Content = styled.div`
    margin-top:40px;
    @media only screen and (max-width: 600px) {
        padding-right:15%;
    }
`;

const Main = () => {
    const onResume = () => {
        window.open('https://sweb-weights.netlify.app/resume_YohanBae.pdf');
    }

    return(
        <>
        <Header>
            <span>Yohan Bae</span>
            <Resume onClick={() => onResume()}><FaDownload style={{fontSize:'12px', marginRight:'10px'}} /> Resume</Resume>
        </Header>
        <DownSide>
            <Navigation>
                <Menu>
                    <Li>
                        <Link
                        activeClass="active"
                        to="section1"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>About</Link>                        
                    </Li>
                    <Li>
                        <Link
                        activeClass="active"
                        to="section2"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Web Skills</Link>                         
                    </Li>
                    <Li>
                        <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Portfolios</Link>  
                    </Li>
                    <Li>
                        <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}>Contact</Link>                          
                    </Li>
                </Menu>               
            </Navigation>
            <Content>
                <div id="section1"><About /></div>
                <div id="section2"><Skills /></div>
                <div id="section3"><Portfolios /></div>
                <div id="section4"><Contact /></div>
            </Content>
        </DownSide>
        </>
    )
}

export default Main;