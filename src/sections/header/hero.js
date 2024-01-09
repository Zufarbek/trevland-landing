import React from 'react'
import './hero.css'
import DangerBtn from '../../components/buttons/danger-btn'

export default function Hero() {
  return (
    <div className='container2'>
        <p className='hero_title'>Railtrips To Here, <br/> There And Everywhere!</p>
        <p className='hero_description'>
            We all wish to start our year the best way possible and also according to a common belief if you have a great start to your.
        </p>
        <div className='explore_btn'>
            <DangerBtn title="Explore more" padding={{top: 18, right: 46, bottom: 17, left: 47}}/>
        </div>
    </div>
  )
}
