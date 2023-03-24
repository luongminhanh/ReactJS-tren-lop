import React, { useState } from 'react'
import "./Toggle.css"
import img1 from './moon.png'
import img2 from './your-turn-collage.jpg'

const Toggle = () => {
    const [on, setOn] = useState(false);
    const handleClick = () => {
        setOn(!on);
    }
    console.log(on, setOn);
    return (
        <div className={`full-body ${on ? "show" : ""}`}>
            <div onClick={handleClick} className="toggle">
                <img className={`icon ${on ? "show" : ""}`} src={img1}></img>
            </div>
            <div className={`little-stories ${on ? "show" : ""}`}>
                <h1>Your Films</h1>
                <div className="little-stories-content">
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                    <img src={img2}></img>
                </div>
            </div>
        </div>

    )
}

export default Toggle