import React from 'react'
import PictureSection from "../PictureSection";
import Articles from "../Articles";
import HeaderText from "../HeaderText";
import headerTextImage from "./../../assets/headerTextImage2.png"
import navBarPicture from "./../../assets/pictureSectionV3.mp4"
import Footer from "../Footer";

function offers() {
    return (
        <div>
            <PictureSection src={navBarPicture} buttonTop="Trainingsplan" buttonBottom="Mehr Information"/>
            <HeaderText header="Mein Angebot" text="Lorem ipsum dolorsed diam voluptua. 
                                                    At vero eos et accusam et justo duo 
                                                    dolores et ea rebum. Stet clita kasd gubergren, 
                                                    no sea takimata sanctus est Lorem ipsum dolor sit 
                                                    amet. Lorem ipsum dolor sit amet, consetetur sadipscing 
                                                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et 
                                                    dolore magna aliquyam erat, sed diam voluptua. 
                                                    At vero eos et accusam et" src={headerTextImage}/>
            <Articles />
            <Footer />
            
        </div>
    )
}

export default offers;
