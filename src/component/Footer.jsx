import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div class="footer-container">
            <div className="footer-top">
                <h2>Join Our Newsletter</h2>
                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                <div class="subcribe-input">
                    <input type="text"></input>
                    <button class="btn-sub">Subcribe</button>
                </div>
            </div>
            <div class="footer-middle">
                <div className="infor">
                    <h3>ARSHA</h3>
                    <p> A108 Adam Street <br /> New York, NY 535022 <br /> United States <br /><br /> <strong>Phone:</strong> +1 5589 55488 55<br /> <strong>Email:</strong> info@example.com
                        <br /></p>
                </div>
                <div className="links">
                    <h5>Useful Links</h5>
                    <ul>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Home</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>About us</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Services</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Terms of services</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Privacy policy</a>
                        </li>
                    </ul>
                </div>
                <div className="services">
                    <h5>Our Services</h5>
                    <ul>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Web Design</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Web Development</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Product Management</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Marketing</a>
                        </li>
                        <li>
                            <i class="fa-solid fa-chevron-right"></i>
                            <a>Graphic Design</a>
                        </li>
                    </ul>
                </div>
                <div className="networks">
                    <h5>Our Social Networks</h5>
                    <p>Cras fermentum odio eu feulide par naso tierra videa magna derita valies</p>
                    <div class="icons">
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-square-instagram"></i>
                        <i class="fa-brands fa-skype"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div class="copyright"> © Copyright <strong><span>Arsha</span></strong>. All Rights Reserved</div>
                <div class="credits"> Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
            </div>
        </div>
    )
}

export default Footer