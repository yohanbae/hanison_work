import React, {useState} from "react"
import styled from "styled-components";
import port1 from "../../assets/image/por1.png";
import port2 from "../../assets/image/por2.png";

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

import Slideshow from "react-slidez";

const Wrap = styled.div`
box-sizing: border-box;
font-size:18px;
display:grid;
grid-template-columns: 290px 1fr;
position:relative;
height:250px;
margin-bottom:50px;
&::before{
    content:'';
    width:75%;
    height:200px;
    background:lightblue;
    opacity:0.3;
    position:absolute;
    top:40px;
    left:0px;
    z-index:-1;
}
`;
const Img = styled.img`
    margin-left:20px;
    width:250px;
    height:180px;
    cursor:pointer;
    transition:500ms;
    &:hover{
        box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.25);

    }
`;
const Desc = styled.div`
    padding:20px 0;
`;
const H3 = styled.h3`
    padding:0; margin:0;
    font-weight:300;
    padding-top:5px;
`;

const ModalWrap = styled.div`
    min-height:450px;
    min-width:550px;
`;

const Box = styled.div`
width: 650px;
height:400px;
position:relative;
`;

const SmilelandMobile = () => {

    const [open, setOpen] = useState(false);

    const onOpenModal = () => {
        setOpen(true);
    };
    const onCloseModal = () => {
        setOpen(false);
    };

    return(
        <>
        <Modal open={open} onClose={onCloseModal} showCloseIcon={false} center>
            <ModalWrap>
                <h2>SMILE LAND Mobile</h2>
                <Box>
                <Slideshow
                    showIndex
                    showArrows
                    autoplay
                    enableKeyboard
                    useDotIndex
                    slideInterval={3000}
                    defaultIndex={1}
                    slides={[port1, port2]}
                    effect={'fade'}
                    height={'400px'}
                    width={'650px'}
                    />
                </Box>
                <h5>HTML CSS REACT</h5>
            </ModalWrap>
        </Modal>
        <Wrap>
            <Img src={port1} onClick={onOpenModal} />
            <div>
            <H3>SMILE LAND MOBILE</H3>
            <Desc>This is a web-application is new version of Gentle Week. This helps you manage your weekly schedule in the most effective way. Easy to manage your weekly task and easy to see daily achievements. You will be able to enhance your lifestyle through this application.</Desc>
            <p>REACT HTML CSS</p>
            </div>
        </Wrap>

        </>
    );


}
export default SmilelandMobile;