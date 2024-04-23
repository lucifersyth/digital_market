import React from 'react'
import DashNav from './DashNav'

function ProductDetails() {
    return (
        <>
            <DashNav></DashNav>
            <div className='bg-black pl-[20rem] flex py-[20rem] gap-12 flex-col px-20 text-white justify-center'>

                <h1 className='font-bold text-[1.5rem]'>Enter Details:-</h1>
                <form action="" className='flex flex-col gap-[2rem] p-[2rem] w-[70%] border-2 rounded-lg border-white'>
                    <div className='flex flex-col'>
                        <label htmlFor="">Title</label>
                        <input type="text" className='bg-secondary_black border-2 py-2 w-[70%] rounded-sm' placeholder='Short Sleeve T-shirt' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="">Description</label>
                        <textarea type="text" className='bg-secondary_black border-2 py-2 w-[70%] rounded-sm h-[10rem]' placeholder='Short Sleeve T-shirt' />
                    </div>
                </form>



                <form action="" className='flex flex-col gap-[2rem] p-[2rem] w-[70%] border-2 rounded-lg border-white'>
                    <div className='text-white gap-[2rem] flex flex-col'>
                        <label htmlFor="" className='font-semibold text-[1.3rem]'>Media</label>
                        <input type="file" className='border-2 bg-secondary_black border-dashed w-[70%] h-[10rem] border-white' />
                    </div>
                </form>



                <form action="" className='flex flex-col gap-[2rem] p-[2rem] w-[70%] border-2 rounded-lg border-white'>
                    <div className='text-white flex flex-col gap-10'>
                        <label htmlFor="" className='font-semibold text-[1.3rem]'>Pricing</label>
                        <div className='flex gap-10 '>
                            <div className='flex flex-col gap-2'>
                                <p>Price</p>
                                <input type="text" placeholder='$ 0.00' className='border-2 bg-secondary_black w-[70%] border-white' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p>Compare at price</p>
                                <input type="text" className='border-2 bg-secondary_black  w-[70%]  border-white' placeholder='$ 0.00' />
                            </div>
                        </div>
                        <div className='flex'>
                            <div className='flex flex-col gap-2'>
                                <p>Cost per item</p>
                                <input type="text" className='border-2 bg-secondary_black  w-[70%] border-white' placeholder='$ 0.00' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p>Profit</p>
                                <input type="text" className='border-2 bg-secondary_black  w-[70%] border-white' placeholder='$ 0.00' />
                            </div>
                            <div className='flex flex-col gap-2'>
                                <p>Margin</p>
                                <input type="text" className='border-2 bg-secondary_black  w-[70%] border-white' placeholder='$ 0.00' />
                            </div>
                        </div>
                    </div>
                </form>

                <div className='flex gap-10 px-10'>
                    <button type='submit' className='bg-white text-black px-4 py-1 rounded-md'>Save</button>
                    <button  className='bg-white text-black px-4 py-1 rounded-md'>Discard</button>
                </div>

            </div>
        </>
    )
}

export default ProductDetails