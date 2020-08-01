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
        // description: "Did you know there are about 270 muscles on your face move when you smile? We have to smile every day to be healthy. Like many people these days work alone, spend time alone, easy to get their face dry. I created this app to encourage people to smile often. This is a third version of Smileland app which was originally developed as a mobile app. I built this version due to the enhance the accessibility of users. Users don't need to download and install an app, the only thing they need is an internet browser.",
        description: "Enjoyable face exercise app. The camera on your device will detect users' face and encourage them to smile so you use your face muscles.",
        languages: ["HTML","CSS","REACT" ,"JS","FIREBASE","ILLUSTRATOR"],
        links:[
            {name: "VISIT WEBSITE", link: "https://sweb.netlify.app/"},
            {name: "GITHUB", link: "https://github.com/yohanbae/sweb"},
        ]
    };
    
    const smilelandMobileData = {
        title: "SMILE LAND MOBILE",
        titleImage: "smilelandmobile1.png",
        // description: "Smileland was originally built for mobile. This is a smile tracker app that encourages users to smile often in daily life. Basically the camera on the phone will detect the user's face and will give life to the animals in smileland if the user is smiling forward to the camera. The app was developed with React Native with Expo.",
        description: "The original version of Smileland which built as a mobile phone application.",
        languages: ["HTML","CSS","REACT NATIVE with EXPO"],
        links:[
            {name: "DOWNLOAD APK", link: "https://drive.google.com/file/d/1vpdzTy1fL03G0GyYYIX0If_qoUV8jDg7/view?usp=sharing"},
            {name: "GITHUB", link: "https://github.com/yohanbae/smileland_mobile"},
        ]
    };

    const sodasuData = {
        title: "SODASU",
        titleImage: "sodasutitle.png",
        // description: "Sodasu is an online survey platform. It has a special feature which is the app remembers the user's past answers. Also, it has a function to find out which answer is major or minor and it compares with the user's answers. So through the answer to the question, the users will find out if their thought is belonging to major or minor. Eventually as many as user answer to the questions, they will see their personal character is belonging to the major or minor. Any users can post any questions. Currently only Korean is served but about to launch the English version soon.",
        description: "Online survey platform. Anyone can post questions or answer to the questions. The app calculates everyone's answer and tells users if their opinions belong to major or minor.",
        languages: ["HTML","CSS","REACT JS","FIREBASE"],
        links:[
            {name: "VISIT WEBSITE", link: "https://sodasu.netlify.app/"},
            {name: "GITHUB", link: "https://github.com/yohanbae/sodasu"},
        ]
    };    

    const promiseData = {
        title: "PROMISE",
        titleImage: "promisetitle.png",
        // description: "This is a personal schedule app. You can add ToDo list any day you want. You can choose weekly view or monthly view. The main point of this app is beginning from the fact that most people have a weekly pattern in life. Most of the time they repeat the same things weekly. In the app, the user can set up repeating weekly tasks as a template. Once the user sets a template it will be applied to their future schedule automatically so the user doesn't have to input the same tasks over and over. Also, it has a function to calculate task achievement so the user can find out where are they and give the motivation to react to their weekly goal.",
        description: "Personal Schedule App with user-friendly UI and functions. You can set up the pattern of your lifestyle as a template and the template will be applied to your plans. Also, you can record the achievement of each task, the app will tell you if your life goal is achieving or not.",
        languages: ["HTML","CSS","REACT JS","FIREBASE"],
        links:[
            {name: "VISIT WEBSITE", link: "https://promisehani.netlify.app/"},
            {name: "GITHUB", link: "https://github.com/yohanbae/reactpromise"},
            {name: "DOWNLOAD APK", link: "https://drive.google.com/file/d/11YF6_hdLJDXNUNu7-BSkppr9tN7Yxd56/view?usp=sharing"},
            {name: "MOBILE GITHUB", link: "https://github.com/yohanbae/promise_mobile"}            
        ]
    };        

    const sonmoaData = {
        title: "SONMOA",
        titleImage: "sonmoa.png",
        // description: "Sonmoa is a daily meditation app. Users can set up a timer for their meditation and encourage them to reach daily meditation goals. Users can write a note anytime if they get some inspiration during meditation. Also, it has features of social networks. User can make a friend and share their inspiration. Users can create groups and invite friend so their inspiration notes shared with everyone in the groups.",
        description: "A daily mediation mobile app for android users. Users can set up a meditation time and share the achievement with friends.",
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