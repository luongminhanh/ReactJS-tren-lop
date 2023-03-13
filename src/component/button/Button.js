import React, {useState} from 'react'
import "./Button.css"
const Button = (props) => {
    console.log("hello", props);
  return (
    
    <div>
        <button class="button">{props.children}</button>
    </div>
  )
}

export default Button