import React from 'react'

export default function Footer() {
  return (
    <div className='h-[30vh]'>
       <div className=' flex justify-between text-center  mt-[50px] px-[130px] h-[13vh]  bg-white  '>
           <div className=''>
             <h1 className='text-[#1b1e20] text-[20px] font-bold'>List<span className='text-[orangered]'>Race</span></h1>
          </div>
          <div>
            <ul className='flex gap-[40px] '>
            <li className='uppercase  hover:text-orange-600 cursor-pointer  text-[#8a949c] '>how it works</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer  text-[#8a949c]'>explore</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer  text-[#8a949c]'>review</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer text-[#8a949c]'>blog</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer text-[#8a949c]'>contact</li>
            <li className='uppercase hover:text-orange-600 cursor-pointer text-[#8a949c]'>my account</li>
          </ul> 
        </div> 
      
      </div>     
         <div className='flex justify-between mt-[30px] px-[130px]'>
            <p className='text-[12px]'>©Copyright. Designed and Developed By Themesine</p>
            <div className=' '>
              <i className='pi pi-phone hover:text-[#ff0000] '><span classname='text-[8px]'>+1 (222) 777 8888</span></i>  
             <i className='pi pi-facebook bg-[#eef2f6] cursor-pointer rounded-full  group hover:text-white group hover:bg-[#ff0000] mx-[30px] p-[12px]'><a href=""></a></i>
             <i className='pi pi-twitter  bg-[#eef2f6] cursor-pointer rounded-full  group hover:text-white group hover:bg-[#ff0000]  p-[12px]'><a href=""></a></i>
             <i className='pi pi-linkedin bg-[#eef2f6] cursor-pointer  rounded-full  group hover:text-white group hover:bg-[#ff0000] mx-[30px] p-[12px]'><a href=""></a></i>
             <i className='pi pi-google  bg-[#eef2f6] cursor-pointer rounded-full  group hover:text-white group hover:bg-[#ff0000] p-[12px]'><a href=""></a></i>
             </div>

            
          </div>
        
    </div>
    
     
  )
}
