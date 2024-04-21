import React from 'react'
import {logo} from "../assets/index"


export default function Navbar() {
  return (
    <header className='fixed w-full px-20 md:backdrop-blur-[5px] md:bg-transparent'>
        <nav className='flex relative justify-between items-center px-6 py-3'>
        <div>
            <img src={logo}  width={30} alt="" />
        </div>
        <div>
            <ul className='flex gap-10 items text-white text-[1.2rem]'>
                <li>Home</li>
                <li>Benefits</li>
                <li>Pricing</li>
                <li>Referral</li>
            </ul>
        </div>
        <div className='flex gap-7'>
            <button className='text-white'>Sign Up</button>
            <button className='bg-primary_green px-9 py-4 rounded-md'>Sign In</button>
        </div>
    </nav>
    </header>

  )
}

// export default Navbar