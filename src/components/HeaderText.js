import React from 'react'
import "./HeaderText.css";

function HeaderText(props) {
    return (
        <div className="HeaderText">
            
            <h1>
                <span>{props.header}</span>
                
            </h1>
            <div className="HeaderTextContainer">

            <img src={props.src} alt="Img"></img>
            <h3>{props.text}</h3>
           </div>

          
           
        </div>
    )
}

export default HeaderText
