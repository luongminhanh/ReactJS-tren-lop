import React from 'react'
import './Banner.css'
import img from '../assets/hero-img.png'
const Banner = () => {
    const handleImg = () => {
        let img = document.querySelector('.image')
        console.log(img);
    }
    return (
        <div class="banner-container">
            <div class="banner-left">
                <h1>Better Solutions For Your Business</h1>
                <h3>We are team of talented designers making websites with Bootstrap</h3>
                <div class="get-started">
                    <button>Get Started</button>
                    <div class="video">
                        <i class="fa-regular fa-circle-play"></i>
                        <span>Watch Video</span>
                    </div>
                </div>
            </div>
            <div class="banner-right">
                <img className="image" src={img}></img>
            </div>
        </div>
    )
}

export default Banner