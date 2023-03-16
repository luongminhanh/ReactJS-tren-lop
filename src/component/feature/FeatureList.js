import React from 'react'
import FeatureItem from './FeatureItem'
import FeatureData from './FeatureData.js'
import './FeatureList.css'
import ellipse1 from '../../assets/ellipse1.png'

const FeatureList = () => {
  
  return (
    <div className='container'>
      <div className='feature-title'>
        <h1>Feature</h1>
        <span>Some of the features and advantages that we provide for those of you who store data in this Data Warehouse.</span>
      </div>
      <div className='feature-list-item'>
        {FeatureData && FeatureData.map((item) =>
          <FeatureItem key={item.id} title={item.title} img_main={item.img_main} img_background={item.img_background} passage={item.passage} />
        )}
      </div>
    </div>
  )
}

export default FeatureList