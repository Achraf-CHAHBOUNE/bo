import React from 'react'
import "./Hero.css"
import Slider from "./Slider/Slider"
import Panel from './Panel/Panel'
import Rouler from './Rouler/Rouler'

function Hero(props) {
  return (
      <div className='Hero'>
      <Slider className='slide_p' images={props.imgs}/>
      <Panel />
      <Rouler/>
    </div>
  )
}

export default Hero