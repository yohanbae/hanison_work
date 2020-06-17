import React, {useState} from "react";
import styled from "styled-components";
import { toast } from 'react-toastify';

import emailjs from "emailjs-com";
import Baby from "../assets/image/ori.png";


const TitleWrap = styled.div`
    display:grid;
    grid-template-columns:50px 1fr;
    height:50px;
    position:relative;
    border-bottom:2px solid rgba(230, 245, 232, 0.8);
    padding-bottom:10px;
    margin-top:100px;
    margin-bottom:30px;
    `;
const Title = styled.div`
    display:grid;
    align-items:end;
    font-size:20px;
    margin-left:10px;
`;

const Img = styled.img`
    width:50px;
    height:50px;
`;

const Wrap = styled.div`
    min-height:50vh;
    display:grid;
    align-items:center;
    margin-bottom:200px;
`;

const Input = styled.input`
    display:block;
    margin-bottom:10px;
    width:calc(100% - 20px);
    padding:10px;
    border:0;
    background: rgba(212, 241, 219, 0.5);
    border-radius:10px;
    font-family: 'Cafe';
    font-size:16px;
`;

const Textarea = styled.textarea`
    display:block;
    margin-bottom:10px;
    width:calc(100% - 20px);
    height:200px;
    padding:10px;
    border:0;
    resize:none;
    background: rgba(212, 241, 219, 0.5);
    border-radius:10px;
    font-family: 'Cafe';
    font-size:16px;
`;

const ButtonWrap = styled.div`
    display:grid;
    justify-content:end;
`;
const Button = styled.button`
    display:block;
    margin-bottom:10px;
    border:none;
    background: rgba(134, 194, 247, 1);
    color:white;
    padding:10px 20px;
    border-radius:5px;
`;


const Contact = () => {

    const [email, setEmail] = useState("");
    const [emailText, setEmailText] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);


    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handleEmailText = e => {
        setEmailText(e.target.value);
    }

    const onSend = async () => {
        setIsProcessing(true);
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(email)) {
            toast.error('Enter email correctly!', {
                position: "bottom-left",
                autoClose: 5000,
            });
            setIsProcessing(false);
            return;
        }
        if(emailText === ""){
            toast.error('Please enter something', {
                position: "bottom-left",
                autoClose: 5000,
            });
            setIsProcessing(false);
            return;
        }

        emailjs.init(process.env.REACT_APP_USER_ID);

        var templateParams = {
            name: 'HEY HANISON',
            notes: 'Check this out!',
            message_html: emailText,
            to_name: "Yohana",
            from_name: email
        };
         
        emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams)
            .then(function(response) {
                setIsProcessing(false);
                setEmail("");
                setEmailText("");
                toast.success('Thank you for your letter!', {
                    position: "bottom-left",
                    autoClose: 5000,
                });     
            }, function(error) {
                setIsProcessing(false);
                toast.error('Network error. Please try again.', {
                    position: "bottom-left",
                    autoClose: 5000,
                });   
            });

    }


    return (
        <div>
            <TitleWrap>
                <Img src={Baby} />
                <Title>CONTACT</Title>
            </TitleWrap>            
            <Wrap>
                <div>
                <Input type="email" onChange={handleEmail} value={email} placeholder="What's your Email address?" />
                <Textarea onChange={handleEmailText} value={emailText} placeholder='Please leave me a message if you want to work with me!'></Textarea>
                <ButtonWrap>
                    <Button onClick={() => onSend()}>
                        {
                            isProcessing ? "WORKING" : "SEND"
                        }
                    </Button>
                </ButtonWrap>
                </div>
            </Wrap>
        </div>
    )
}
export default Contact;