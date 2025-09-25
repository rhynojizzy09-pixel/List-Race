import React from 'react'

export default function Account() {
  return (
    <div className='h-[70vh] mt-[150px]  text-center bg-[#f8fafb]'>
        <div className='p-[100px] '>
          <h1 className='uppercase'>do you want to add your business listing with us?</h1>
          <p className='pt-[20px]'>Listrace offer you to list your business with us and we very much able to promote your Business.</p>
          <div className='mt-[50px] ' >
            <form action="">
              <input className='w-[450px]  h-[60px] pl-[30px] bg-white rounded-[3px] text-[16px] group hover:bg-[#fff] ' type="email" placeholder='Enter your email here'  />
              <button className='w-[180px] h-[60px] text-white bg-[#ff545a]'>Creat Account</button>
            </form>  
            </div>
         
        </div>
        
         
        
    </div>
  )
}
