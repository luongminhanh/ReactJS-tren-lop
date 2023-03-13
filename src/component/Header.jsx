import React from 'react'
import './Header.css'
const Header = () => {
    return (
        <div class="container">
            <div class="left">
                <img src="./logo192.png"></img>
                React
            </div>
            <div >
                <ul class="list1">
                    <li>Docs</li>
                    <li>Tutorial</li>
                    <li>Blog</li>
                    <li>Community</li>
                </ul>
            </div>
            <div class="right">
                <input type="text" placeholder="Search"></input>
                <ul class="list2">
                    <li>v18.2.0</li>
                    <li>Languages</li>
                    <li>Github</li>
                </ul>
            </div>
           
        </div>
    )
}

export default Header