import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin']
})

function page() {
  return (
    <div className={poppins.className}>
        {/* Landing Hero */}
        <div className='grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:px-20 px-8 gap-12 lg:gap-0 mb-24'>
            <div className='flex flex-col justify-center items-center gap-12'>
                <div className='lg:w-3/4 flex flex-col gap-4'>
                    <h1 className='lg:text-5xl text-4xl font-extrabold tracking-wide'>UNLEASH THE FLAVORFUL SPIRIT OF <span className='text-[#fb7a5e]'>TWOTUGS</span></h1>
                    
                    <p className='font-regular'>
                        Explore our diverse lineup of handcrafted brews, each bottle encapsulating the essence of our commitment to quality. 
                        Welcome to the heart of brewing excellence!
                    </p>
                </div>

                <div className='lg:w-3/4 w-full text-start flex items-center gap-6'>
                    <button className='bg-[#fb7a5e] text-white px-5 py-4 rounded-3xl hover:drop-shadow-[0_10px_10px_rgba(252,199,187,1)] transition ease duration-300'>Become a reseller</button>

                    <a href="" className='text-[#fb7a5e] flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                        </svg>
                        Watch video
                    </a>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <div className='img-wrap'>
                    <img src="bannerImg2.png" alt="" />
                </div>
            </div>
        </div>     

        {/* The Flavors */}

        <div className='flex flex-col gap-24 justify-center items-center lg:px-20 px-8'>
           
            <div className='lg:w-1/2 flex flex-col gap-4 text-center'>
                <h2 className='lg:text-4xl text-3xl font-extrabold tracking-wide leading-normal'>Our <span className='text-[#fb7a5e]'>Flavored</span> Spirits</h2>
                <p className='font-regular'> Explore our diverse lineup of handcrafted brews, each bottle encapsulating the essence of our commitment to quality.</p>
            </div>

            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-24'>
                <div className='flex flex-col items-center gap-8'>
                    <img src="beer1.png" alt="" className='w-1/4' />

                    <div className='flex flex-col items-center gap-4'>
                        <h3 className='font-bold text-2xl'>Sunset <span className='text-[#3e965a]'>Citrus</span></h3>
                        <p className='px-8 lg:text-sm text-center'>
                         Infused with zesty orange and grapefruit notes, this brew evoke the warmth of a setting sun
                        </p>
                    </div>
                </div>




            </div>
        
        </div> 
    
    </div>

  )
}

export default page