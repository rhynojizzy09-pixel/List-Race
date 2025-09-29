import React from 'react'

export default function NavBar() {
  return (
    <>
      <div className='flex justify-between items-center px-[40px] h-[10vh] shadow-lg bg-white'>
        <div>
          <h1 className='text-[#1b1e20] text-[20px] font-bold'>List<span className='text-[orangered]'>Race</span></h1>
        </div>
        <div>
          <ul className='md:flex hidden gap-[40px] '>
            <li className='uppercase  cursor-pointer text-[orangered]'>home</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer  text-[#8a949c]'>how it works</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer  text-[#8a949c]'>explore</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer text-[#8a949c]'>review</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer text-[#8a949c]'>blog</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer text-[#8a949c]'>contact</li>
          </ul>
        </div>

        <div className='md:hidden'>
          <i className='pi pi-bars'></i>
          
        </div>
    </div>
    </>
  )
}
