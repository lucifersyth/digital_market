import { rocket_path,rocket,stars } from "../assets";

import React from 'react'

function Path() {
  return (
    <>
    <div className="bg-primary_black">
        <div className="flex flex-col items-center justify-center">
            <img src={stars} width={3000} height={3000} alt="" />
            <div className="absolute">
                <img src={rocket_path} width={600} alt="" />
            </div>
            <div className="text-center">
            <p className="text-white font-bold text-[3rem] md:w-[600px]">SendOwl sellers have made multiple</p>
            <p className="text-primary_green font-bold text-[3rem] md:w-[600px]"> billions of dollars</p>
            </div>
            <div className="absolute right-[25rem]">
            <img src={rocket} width={160} alt="" />
            </div>
            <img src={stars} width={3000} height={3000} alt="" />
        </div>
    </div>
    </>
  )
}

export default Path