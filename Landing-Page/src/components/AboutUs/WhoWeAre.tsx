import React from 'react';
import './WhoWeAre.css';

const WhoWeAre: React.FC = () => {
 return (
    <div className="who-we-are-container">
        <div className="left-box1">
            {/* Your left content goes here */}
            <h1 className='TextLeft'>Who We Are</h1>
        </div>
        <div className="right-box2">
            <p className='TextRight'>The Junior Blockchain Education Consortium of the Philippines, 
            or JBECP, is a national student and youth organization initiated by 
            The Blockchain Lead Organization and Knowledge Center or The BLOKC</p>
        </div>
    </div>
 );
};

export default WhoWeAre;