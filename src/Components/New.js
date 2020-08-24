import React from "react";
import styled from "styled-components";
import hero from "../images/hero.png";
import promise_mock from "../images/promise-mock.png";
import smileland_mock from "../images/smileland-mock.png";
import smileheroes_mock from "../images/smileheroes-mock.png";
import sodasu_mock from "../images/sodasu-mock.png";
import sonmoa_mock from "../images/sonmoa-mock.png";
import Contact from "../Components/Contact";

import { DiIonic, DiFirebase, DiMongodb, DiPhotoshop, DiIllustrator } from "react-icons/di";



const New = () => {
    const onResume = () => {
        window.open('https://sweb-weights.netlify.app/resume_YohanBae.pdf');
    }

    const onSmilelandGit = () => window.open('https://github.com/yohanbae/sweb')
    const onSmilelandWeb = () => window.open('https://sweb.netlify.app/')

    const onSmilelandMGit = () => window.open('https://github.com/yohanbae/smileland_mobile')
    const onSmilelandMApk = () => window.open('https://drive.google.com/file/d/1vpdzTy1fL03G0GyYYIX0If_qoUV8jDg7/view?usp=sharing')

    const onPromiseGit = () => window.open('https://github.com/yohanbae/reactpromise')
    const onPromiseWeb = () => window.open('https://promisehani.netlify.app/')

    const onSodasuGit = () => window.open('https://github.com/yohanbae/sodasu')
    const onSodasuWeb = () => window.open('https://sodasu.netlify.app/')

    const onSonmoa = () => window.open('https://github.com/yohanbae/sonmoa')


    return (
        <>
        <div class="block-1">
        <div class="inner">
            <div class="left">
                <div>
                    <div class="top">
                        <h3>Yohan Bae</h3>
                        <img src={hero} />
                        <div></div>
                    </div>
                    <h1>WEB DEVELOPER</h1>
                    <h6>
                        Hello, my name is Yohan bae the web developer I'm specialized in Front end developer. I also have basic knowledge of UI and Backend so I can develop a mid-size webpage alone.
                    </h6>
                    <button class="resume-button" onClick={() => onResume()}>Download Resume <i class="fas fa-file-download" style={{marginLeft:'5px'}}></i></button>
                </div>
            </div>
            <div class="right">
                <div class="skill-wrap">
                    <div class="skillw"><i class="fab fa-html5"></i></div>
                    <div class="skillw"><i class="fab fa-css3-alt"></i></div>
                    <div class="skill"><i class="fab fa-js"></i></div>
                    <div class="skill"><i class="fab fa-sass"></i></div>
                    <div class="skill"><i class="fab fa-react"></i></div>
                    <div class="skill"><i class="fab fa-angular"></i></div>
                    <div class="skill"><i class="fab fa-android"></i></div>
                    <div class="skill"><i class="fab fa-node"></i></div>
                    <div class="skillw"><i class="fab fa-php"></i></div>
                    <div class="skill"><i class="fab fa-wordpress"></i></div>
                    <div class="skill"><i class="fab fa-bootstrap"></i></div>
                    <div class="skill"><i class="fab fa-github"></i></div>
                    <div class="skill"><i class="fab fa-python"></i></div>
                    <div class="skill"><DiIonic /></div>
                    <div class="skillw"><DiFirebase /></div>
                    <div class="skillw"><DiMongodb /></div>
                    <div class="skill"><DiPhotoshop /></div>
                    <div class="skill"><DiIllustrator /></div>
                    <div class="skill"><i class="fab fa-adobe"></i></div>
                </div>
            </div>

        </div>
        <div class="theback"></div>

    </div>

    <div class="block-2">
        <div class="content">
            <div>
                <h4>Portfolios</h4>
                <h6>I tried to develop apps that are enjoyable,</h6>
                <h6> easy, and beneficial to the users.</h6>
            </div>
            <div></div>
        </div>
        <div class="sand"></div>
    </div>

    <div class="block-3">
        <div class="item">
            <img src={smileland_mock} />
            <div>
                <h1>SMILELAND</h1>
                <h5>practice your smile</h5>
                <p>Enjoyable face exercise app. The camera on your device will detect users' face and encourage them to smile so you use your face muscles.</p>
                <div class="skills">
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-angular"></i>
                </div>
                <div class="link" onClick={() => onSmilelandGit()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Github
                </div>
                <div class="link" onClick={() => onSmilelandWeb()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Website
                </div>
            </div>
        </div>

        <div class="item">
            <img src={promise_mock}/>
            <div>
                <h1>PROMISE</h1>
                <h5>Weekly scheduling app</h5>
                <p>
                    Personal Schedule App with user-friendly UI and functions. You can set up the pattern of your lifestyle as a template and the template will be applied to your plans. Also, you can record the achievement of each task, the app will tell you if your life goal is achieving or not.
                </p>
                <div class="skills">
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-angular"></i>
                </div>
                <div class="link" onClick={() => onPromiseGit()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Github
                </div>
                <div class="link" onClick={() => onPromiseWeb()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Website
                </div>
            </div>
        </div>

        <div class="item">
            <img src={smileheroes_mock} />
            <div>
                <h1>SMILE HEROES MOBILE</h1>
                <h5>Train your smile with mobile phone</h5>
                <p>Enjoyable face exercise app. The camera on your device will detect users' face and encourage them to smile so you use your face muscles.</p>

                <div class="skills">
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-angular"></i>
                    <i class="fab fa-react"></i>

                </div>
                <div class="link" onClick={() => onSmilelandMGit()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Github
                </div>
                <div class="link" onClick={() => onSmilelandMApk()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Website
                </div>
            </div>
        </div>

        <div class="item">
            <img src={sodasu_mock} />
            <div>
                <h1>SODASU</h1>
                <h5>Online survey form</h5>
                <p>
                Online survey platform. Anyone can post questions or answer to the questions. The app calculates everyone's answer and tells users if their opinions belong to major or minor.
                </p>
                <div class="skills">
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-adobe"></i>
                </div>
                <div class="link" onClick={() => onSodasuGit()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Github
                </div>
                <div class="link" onClick={() => onSodasuWeb()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Website
                </div>
            </div>
        </div>

        <div class="item">
            <img src={sonmoa_mock} />
            <div>
                <h1>SONMOA</h1>
                {/* <h5>practice your smile</h5> */}
                <p>
                    A daily mediation mobile app for android users. Users can set up a meditation time and share the achievement with friends.
                </p>
                
                <div class="skills">
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-js"></i>
                    <i class="fab fa-angular"></i>
                    <i class="fab fa-react"></i>
                </div>
                <div class="link" onClick={() => onSonmoa()}>
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Github
                </div>
                <div class="link">
                    <i class="far fa-circle" style={{fontSize:'8px', marginRight:'5px'}}></i>
                    Only source code available now
                </div>
            </div>
        </div>

    </div>

    <Contact />
    <div class="footer">
        <div class="backback"></div>
        <div class="content">
            <div class="ccc">
                <i class="fas fa-envelope" style={{marginRight:'10px'}}></i>
                yohanbae1040@gmail.com
            </div>
        </div>
    </div>
    </>
    )

}


export default New;