import React from 'react';
import './Partners.css';

const Partners: React.FC = () => {
 return (
    <div className="partner-container">
        <div className="partner-content">
            <h1 className='part-head'>Build a Network of Like-Minded Individuals</h1>
            <p className='part-p'>Harnessing the True Potential of Blockchain Technology.</p>
            <div className='logo-contain'>
                <div className='partner-logo'>
                    <img src="/ImageAssets/TheBlokc.png" alt="Logo" className="partner-image1" />
                    <img src="/ImageAssets/JBECPLogoFullWhite.png" alt="Logo" className="partner-image2" />
                </div>

            </div>
        </div>

    </div>
 );
};

export default Partners;