import React from 'react'
import person from '../images/person.png'

export default function Reviews() {
  const reviewItems =  [
  {
    text1: 'Shoraib Hussain',
    image: person,
    text2: 'London, UK',
    icons: 'pi pi-star',
    word: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

    {
    text1: 'Shoraib Hussain',
    image: person,
    text2: 'London, UK',
    icons: 'pi pi-star',
    word: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

    {
    text1: 'Shoraib Hussain',
    image: person,
    text2: 'London, UK',
    icons: 'pi pi-star',
    word: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }

  ]
  
 


  return (
    <div className='h-[120vh]'>
      <div className='text-center text-gray-700 bg-white  '>
     <h1 className='uppercase pt-[100px] text-[30px] '>clients reviews</h1>
     <p className='pt-[30px] text-[18px]'>What our client say about us</p>
   </div>

    <div className='flex mt-[80px]'>
      {
        reviewItems.map((eachreview)=>(
          <div className=' shadow-sm w-[449px] mx-[30px]  h-[320px] py-[30px] px-[30px] bg-white text- '>
             <div className='flex gap-[20px] '>
            <img className='h-[50px] w-[50px] mt-[60px]' src={eachreview.image} alt={eachreview.text1} />
            <div className='h-hidden  mt-[35px] leading-[1.7] '>
             <h2 className='text-[18px] font-bold'>{eachreview.text1}</h2>
            <p>{eachreview.text2}</p>
            <i className={eachreview.icons}></i>
            </div>

            </div>
            <div>
            <p className='mt-[10px] text-[14px]'>{eachreview.word}</p>
            </div>
          </div>
        ))
      }
    </div>
    </div>
    
    
    
  )
}
