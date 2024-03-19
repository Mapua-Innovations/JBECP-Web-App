import React from "react";
import './Body.css';
import MessageOne from './MessageOne';
import MesHeadingOne from './MesHeadOne.tsx';

function Body (){
    return (
        <div className="body-container">
            <div className="left-content">
                <p className="head"><MesHeadingOne/></p>
                <h1 className="text-after">Join us in accelerating the decentralized future.</h1>
                <span className="text-last"><MessageOne /></span>
                <button className="join-us-button">Sign Up for Free</button>
            </div>
            <div className="right-content">
                <img src="/ImageAssets/JBECPLogoWhite.png" alt="Logo" />
                <h1 className="text-below">Junior Blockchain Education Consortium of the Philippines</h1>
            </div>
        </div>
    );
}
export default Body
