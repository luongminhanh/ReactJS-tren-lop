import React from 'react'
import './Header.css'
const Header = () => {
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 0) {
      header.classList.add('header-scroll');
    } else {
      header.classList.remove('header-scroll');
    }
  })

  // let bar = document.querySelector('.fa-bars');
  // let close = document.querySelector('.fa-solid.fa-xmark');
  // let nav = document.getElementById('nav');

  // window.addEventListener("resize", function (event) {
  //   console.log(document.body.clientWidth);
  //   if ((document.body.clientWidth < 991) && (!close.classList.contains('show')))
  //     bar.classList.add('show');
  //   else bar.classList.remove('show');
  // })

  // bar.addEventListener('click', () => {
  //   nav.classList.add('show');
  //   bar.classList.remove('show');
  //   close.classList.add('show');
  // })

  // close.addEventListener('click', () => {
  //   nav.classList.remove('show');
  //   bar.classList.add('show');
  //   close.classList.remove('show');
  // })

  return (
    <div class="header">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" />
      <div class="header-container">
        <h1>
          ARSHA
        </h1>
        <nav>
          <ul id="nav">
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Portfolio</li>
            <li>Team</li>
            <li className="drop-down-1">
              <span>Drop Down</span>
              <i className="fa-solid fa-chevron-down"></i>
              <ul className="drop-down-1-child">
                <li>Drop Down 1</li>
                <li className="drop-down-2">
                  <span>Deep Drop Down</span>
                  <i className="fa-solid fa-chevron-right"></i>
                  <ul className="drop-down-2-child">
                    <li>Deep Drop Down 1</li>
                    <li>Deep Drop Down 2</li>
                    <li>Deep Drop Down 3</li>
                    <li>Deep Drop Down 4</li>
                    <li>Deep Drop Down 5</li>
                  </ul>
                </li>
                <li>Drop Down 3</li>
                <li>Drop Down 4</li>
                <li>Drop Down 5</li>
              </ul>
            </li>
            <li>
              Contact
            </li>
            <li>
              <button className="btn-header">Get Started</button>
            </li>
          </ul>
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-xmark"></i>
        </nav>
      </div>
    </div>
  )
}

export default Header