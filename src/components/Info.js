import React from 'react'
import myPicture from "../images/ddd.jpg"


function Info() {
    return (
        <div className="card-info">
            <div className="card-image--container">
                <img src={myPicture} className="card-image"/>
            </div>
           
                <div className="card-info--container">
                    <h3 className="card-name">Sofia Alvarado</h3>
                    <h4 className="card-job">FrontEnd Developer</h4>
                    <h5 className="card-website">sofialvarado.website</h5>
                </div>
                <div className="card-buttons--container">
                
                    <button className="btn-email">Email</button>
                    <button className="btn-linkedin">LinkedIn</button>         
            </div>
        </div>
    )
}

export default Info