import React from 'react'
import PictureSection from "../PictureSection";

import HeaderText from "../HeaderText";
import headerTextImage from "./../../assets/headerTextImage2.png"
import navBarPicture from "./../../assets/pictureSectionV2.mp4"
import Footer from "../Footer";

function about() {
    return (
        <div>
                <PictureSection src={navBarPicture} buttonTop="Trainingsplan" buttonBottom="Mehr Information"/>
            <HeaderText header="Über mich" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                                                sed diam nonumy eirmod tempor invidunt ut labore et dolore 
                                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam 
                                                et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea 
                                                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
                                                consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                                                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos 
                                                et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor 
                                                sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                                invidunt ut labore et dolore magna aliquyam" src={headerTextImage}/>
            
            <Footer />
            
        </div>
    )
}

export default about;
