import React from 'react'
import YoutubeItem from './YoutubeItem'
import { YoutubeData } from './YoutubeData'
import "./YoutubeList.css"

const YoutubeList = () => {
  return (
    <div class = "youtube-list">
        {YoutubeData.map((item) =>
            <YoutubeItem key = {item.id} avatar = {item.avatar} name = {item.name}/>
        )}
    </div>
  )
}

export default YoutubeList