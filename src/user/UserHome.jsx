import React from 'react'
import Navigation from './components/Navigation'
import { userbg } from '../assets'
import Circle from './components/Circle'
import { circleData } from '../constant'

function UserHome() {
  return (
    <>
      <div className='flex flex-col gap-20 bg-black'>
        <Navigation></Navigation>
        <img src={userbg} alt="" width={1600} />
        <div className='flex bg-black gap-20 px-20 font-bold text-[1.3rem]'>
          {circleData.map((content, index) => (
            <Circle key={index} title={content.title} img={content.img} />
          ))}
        </div>
      </div>
    </>
  )
}

export default UserHome