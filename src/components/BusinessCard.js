import React from 'react';
import Info from './Info';
import About from './About';

function BusinessCard(){
    return (
        <div className="business-card">
            <div className="info-section">
                <Info />
                <About />
            </div>
        </div>
    )
}

export default BusinessCard;