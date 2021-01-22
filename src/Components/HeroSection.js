import React from 'react';
import '../App.css'
import { Button } from './Button';
import'./HeroSection.css'
import video from '../Assets/videos/video-2.mp4'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src={video} autoPlay loop muted ></video>           
            <h1>ADVENTURE AWAITS</h1>
            <p> What are you looking for?</p>
            <div className="hero-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large"> Get Started</Button>
                <Button className="btns" buttonStyle="btn--primary" buttonSize="btn--large"> Watch Trailer <i className="far fa-play-circle"></i></Button>
            </div>
        </div>
    );
}

export default HeroSection;