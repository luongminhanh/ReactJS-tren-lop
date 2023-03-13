import React from 'react'
// import "./YoutubeItem.css"

const YoutubeItem = (props) => {
  return (
    <div class="youtube-item">
      <img src={props.avatar} alt="avatar image">
      </img>
      <p>{props.name}</p>
    </div>
  )
}

export default YoutubeItem