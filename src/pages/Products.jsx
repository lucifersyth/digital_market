import React from 'react'
import DashNav from './components/DashNav'
import { plus, shoes } from '../assets'
import { Link } from 'react-router-dom'

function Products() {
    return (
        <>
            <div className='bg-black h-screen px-20'>
                <DashNav></DashNav>
                <h1 className='text-white py-7 px-20 font-bold text-[2rem]'>
                    Products
                </h1>
                <div className='px-[10rem] py-[2rem] border-[0.1rem] border-white'>
                    <div className=' flex flex-col text-white gap-10 justify-between'>
                        <p className='font-semibold text-[1.2rem]'>Add Your Products</p>
                        <p>Start by stocking your store with products your customers will love</p>
                        <div className='flex justify-between'>
                            <div className='flex border-2 w-[10%] items-center h-[20%]'>
                                <img src={plus} alt="" />
                                <Link to="/productdetails">
                                    <button>
                                        Add Products
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <img src={shoes} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products