import React from 'react'
import './FeatureItem.css'

const FeatureItem = (props) => {
  return (
    <div class="feature-item">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <h1>{props.title}</h1>
      <img className="img-main" src={props.img_main}></img>
      <img className="img-background" src={props.img_background}></img>
      <p>{props.passage}</p>
      <div className='learn-more'>
        <div>Learn More</div>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  )
}

export default FeatureItem