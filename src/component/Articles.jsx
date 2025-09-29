import React from 'react'
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';


export default function Articles () {
  
    const articlesItem = [
       {
         image1: b1,
         text1: ' How to find your Desired Place more quickly',
         text2: 'Posted by ADMIN',
         date: 'March 2018',
         text3: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
       },

       {
        image1: b2,
         text1: ' How to find your Desired Place more quickly',
         text2: 'Posted by ADMIN',
         date: 'March 2018',
         text3: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
       },

       {
        image1: b3,
         text1: ' How to find your Desired Place more quickly',
         text2: 'Posted by ADMIN',
         date: 'March 2018',
         text3: 'Lorem ipsum dolor sit amet, consectetur de adipisicing elit, sed do eiusmod tempore incididunt ut labore et dolore magna.'
       },

       

       
   






    ]

    











  return (
    <div className=' '>
      <div className=' text-center mt-[120px] '>
        <h1 className='text-[24px] '>NEWS AND ARTICLES</h1>
        <p className='mt-[15px] text-[16px] '>Always upto date with our latest News and Articles</p>
      </div>

     <div className='md:flex mt-[100px] mx-[70px] gap-[30px] '>
     {
        articlesItem.map((eachItem)=>(
          <div className='shadow-sm  w-[100%] mb-[30px] '>
            <img src={eachItem.image1} alt="" className='w-[100%]' />
            <div className='py-[50px] px-[30px] '> 
               <h2 className='cursor-pointer hover:text-orange-400 text-[17px] '>{eachItem.text1}</h2>
               <div className='flex pt-[10px] gap-[12px] '>
                <p >{eachItem.text2}</p>
                <p>{eachItem.date}</p>
            </div>
            <p className='pt-[15px] text-[15px] leading-[1.8]'>{eachItem.text3}</p>
            </div>
          </div>

        ))
        }
     </div>

    </div>
  )
}
