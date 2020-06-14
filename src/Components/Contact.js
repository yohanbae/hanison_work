import React, {useState} from "react";
import styled from "styled-components";
import sgMail from '@sendgrid/mail';
import { toast } from 'react-toastify';

const Contact = () => {

    const [email, setEmail] = useState("");
    const [emailText, setEmailText] = useState("");

    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handleEmailText = e => {
        setEmailText(e.target.value);
    }

    const onSend = async () => {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!emailRegex.test(email)) {
            toast.error('Enter email correctly!', {
                position: "bottom-left",
                autoClose: 5000,
            });
            
            return;
        }
        if(emailText === ""){
            toast.error('Please enter something', {
                position: "bottom-left",
                autoClose: 5000,
            });
            return;
        }

        
        sgMail.setApiKey('process.env.REACT_APP_SENDGRID_API_KEY');
        const msg = {
          to: 'gentlebae@gmail.com',
          from: email,
          subject: 'Hanison hiring message!',
          text: emailText,
          html: '<strong>Work Hard!</strong>',
        };
        try {
            await sgMail.send(msg);
            toast.success('Thank you for your letter!', {
                position: "bottom-left",
                autoClose: 5000,
            });            
        } catch (error) {
            console.error(error);    
            if (error.response) {
                console.error(error.response.body)
            }
        }
    }


    return (
        <div>
            Contact
            <input type="email" onChange={handleEmail} value={email} />
            <textarea onChange={handleEmailText} value={emailText}></textarea>
            <button onClick={() => onSend()}>SEND</button>
        </div>
    )
}
export default Contact;