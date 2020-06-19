import React from "react";
import styled from "styled-components";

import Baby from "../assets/image/buritto.png";
import PortComponent from "./Port/PortComponent";


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
    const smilelandData = {
        title: "SMILE LAND",
        titleImage: "smilelandtitle.png",
        description: "This is a web-application is new version of Gentle Week. This helps you manage your weekly schedule in the most effective way. Easy to manage your weekly task and easy to see daily achievements. You will be able to enhance your lifestyle through this application.",
        languages: ["HTML","CSS","REACT" ,"JS","FIREBASE","ILLUSTRATOR"],
        links:[
            {name: "VISIT WEBSITE", link: "https://sweb.netlify.app/"},
            {name: "GITHUB", link: "https://github.com/yohanbae/sweb"},
        ]
    };
    
    const smilelandMobileData = {
        title: "SMILE LAND MOBILE",
        titleImage: "smilelandmobile1.png",
        description: "This is a web-application is new version of Gentle Week. This helps you manage your weekly schedule in the most effective way. Easy to manage your weekly task and easy to see daily achievements. You will be able to enhance your lifestyle through this application.",
        languages: ["HTML","CSS","REACT NATIVE with EXPO","FIREBASE"],
        links:[
            {name: "DOWNLOAD APK", link: "https://github.com/yohanbae/smileland_mobile"},
            {name: "GITHUB", link: "https://github.com/yohanbae/smileland_mobile"},
        ]
    };

    const sodasuData = {
        title: "SODASU",
        titleImage: "sodasutitle.png",
        description: "This is a web-application is new version of Gentle Week. This helps you manage your weekly schedule in the most effective way. Easy to manage your weekly task and easy to see daily achievements. You will be able to enhance your lifestyle through this application.",
        languages: ["HTML","CSS","REACT JS","FIREBASE"],
        links:[
            {name: "VISIT WEBSITE", link: "https://sodasu.netlify.app/"},
            {name: "GITHUB", link: "https://github.com/yohanbae/sodasu"},
        ]
    };    

    const promiseData = {
        title: "SODASU",
        titleImage: "promisetitle.png",
        description: "This is a web-application is new version of Gentle Week. This helps you manage your weekly schedule in the most effective way. Easy to manage your weekly task and easy to see daily achievements. You will be able to enhance your lifestyle through this application.",
        languages: ["HTML","CSS","REACT JS","FIREBASE"],
        links:[
            {name: "VISIT WEBSITE", link: "https://promisehani.netlify.app/"},
            {name: "GITHUB", link: "https://github.com/yohanbae/reactpromise"},
            {name: "DOWNLOAD APK", link: "https://github.com/yohanbae/reactpromise"},
            {name: "MOBILE GITHUB", link: "https://github.com/yohanbae/promise_mobile"}            
        ]
    };        

    const sonmoaData = {
        title: "SONMOA",
        titleImage: "sonmoa.png",
        description: "This is a web-application is new version of Gentle Week. This helps you manage your weekly schedule in the most effective way. Easy to manage your weekly task and easy to see daily achievements. You will be able to enhance your lifestyle through this application.",
        languages: ["HTML","CSS","IONIC","FIREBASE"],
        links:[
            {name: "GITHUB", link: "https://github.com/yohanbae/sonmoa"},
        ]
    };        

    return (
        <>
        <TitleWrap>
            <Img src={Baby} />
            <Title>PORTFOLIOS</Title>
        </TitleWrap>
        <PortComponent 
            title = {smilelandData.title}
            titleImage = {smilelandData.titleImage}
            description = {smilelandData.description}
            languages = {smilelandData.languages}
            links = {smilelandData.links}
        />
        <PortComponent 
            title = {smilelandMobileData.title}
            titleImage = {smilelandMobileData.titleImage}
            description = {smilelandMobileData.description}
            languages = {smilelandMobileData.languages}
            links = {smilelandMobileData.links}
        />
        <PortComponent 
            title = {sodasuData.title}
            titleImage = {sodasuData.titleImage}
            description = {sodasuData.description}
            languages = {sodasuData.languages}
            links = {sodasuData.links}
        />        
        <PortComponent 
            title = {promiseData.title}
            titleImage = {promiseData.titleImage}
            description = {promiseData.description}
            languages = {promiseData.languages}
            links = {promiseData.links}
        />   
        <PortComponent 
            title = {sonmoaData.title}
            titleImage = {sonmoaData.titleImage}
            description = {sonmoaData.description}
            languages = {sonmoaData.languages}
            links = {sonmoaData.links}
        />   
        </>
    )
}
export default Portfolio;