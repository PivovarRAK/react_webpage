import React from 'react'
import PictureSection from "../PictureSection";
import HeaderText from "../HeaderText";
import headerTextImage from "./../../assets/headerTextImg4.png"
import navBarPicture from "./../../assets/pictureSectionV4.mp4"
import ContactForm from "../ContactForm";
import Footer from "../Footer";
import Map from "../Map";

function contact() {
    return (
        <div>
            <PictureSection src={navBarPicture} buttonTop="Trainingsplan" buttonBottom="Mehr Information"/>
            <HeaderText header="Kontakt" text={<ContactForm></ContactForm>} src={headerTextImage}/>
            <Map></Map>
            <Footer />
            
            
        </div>
    )
}

export default contact;
