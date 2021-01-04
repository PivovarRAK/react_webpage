import React from 'react'
import { Button } from './../components/Button';
import "./PictureSection.css";

function PictureSection(props) {
    return (
        <div className="PictureSectionContainer">
            <video src={props.src} alt="PictureSectionVideo" autoPlay loop muted/>
            <h1>Fitnessstudio</h1>
            <h3>Köln</h3>
            <Button buttonStyle="btn--outline" buttonSize="btn--large"> <i className="fas fa-stopwatch"></i>  {props.buttonTop}</Button>
            <Button buttonSize="btn--large"> <i className="fas fa-info-circle"></i>  {props.buttonBottom}</Button>
        </div>
    )
}

export default PictureSection
