import React from 'react'
import e1 from '../images/e1.jpg';
import person from '../images/person.png';
import e2 from '../images/e2.jpg';
import e3 from '../images/e3.jpg';
import e4 from '../images/e4.jpg';
import e5 from '../images/e5.jpg';
import e6 from '../images/e6.jpg';

export default function Explore() {

const exploreItem = [
 {
    image1: e1,
    text1: 'Tommy Helfinger Bar',
    num1: '5.0',
    text2:'10 ratings',
    text3: 'form 5$-300$',
    word: 'Resturent',
    image2: person ,
    word2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    word3: 'Close Now',
    icons1: 'pi pi-arrow-circle-down',
    icons2: 'pi pi-download',
    icons3: 'pi pi-heart-fill'
 },

 {
    image1: e2,
    text1: 'Swim and Dine Resort',
    num1: '4.5',
    text2:'8 ratings',
    text3: 'form 5$-300$',
    word: 'Resturent',
    image2: person ,
    word2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    word3: 'Open Now',
    icons1: 'pi pi-arrow-circle-down',
    icons2: 'pi pi-download',
    icons3: ' pi pi-heart-fill'
 },

  {
    image1: e3,
    text1: 'Tommy Helfinger Bar',
    num1: 3.9,
    text2:'10 ratings',
    text3: 'form 5$-300$',
    word: 'Resturent',
    image2: person ,
    word2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    word3: 'Close Now',
    icons1: 'pi pi-arrow-circle-down',
    icons2: 'pi pi-download',
    icons3: 'pi pi-heart-fill'

 },

  {
    image1: e4,
    text1: 'Tommy Helfinger Bar',
    num1: 4.1,
    text2:'10 ratings',
    text3: 'form 5$-300$',
    word: 'Resturent',
    image2: person ,
    word2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    word3: 'Close Now',
    icons1: 'pi pi-arrow-circle-down',
    icons2: 'pi pi-download',
    icons3: 'pi pi-heart-fill'
 },

  {
    image1: e5,
    text1: 'Tommy Helfinger Bar',
    num1: 3.1,
    text2:'10 ratings',
    text3: 'form 5$-300$',
    word: 'Resturent',
    image2: person ,
    word2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    word3: 'Open Now',
    icons1: 'pi pi-arrow-circle-down',
    icons2: 'pi pi-download',
    icons3: 'pi pi-heart-fill'
 },

   {
    image1: e6,
    text1: 'Tommy Helfinger Bar',
    num1: 5.1,
    text2:'10 ratings',
    text3: 'form 5$-300$',
    word: 'Resturent',
    image2: person ,
    word2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua....',
    word3: 'Close Now',
    icons1: 'pi pi-arrow-circle-down',
    icons2: 'pi pi-download',
    icons3: 'pi pi-heart-fill'
 } 


]


 const getWord = (word3) => {
   if (word3 == 'Open Now') return 'text-green-500'

   if (word3 == 'Close Now') return 'text-orange-500'

  return 'text-blue-500'

 }

function getRating(num1) {
   if (num1 >= 5.1) return 'bg-blue-500'
   if (num1 >= 4.1) return 'bg-orange-500'
   if (num1 >= 3.1) return 'bg-purple-500'

   return 'bg-white-500'
}

  return (
    <div className=' bg-[#f8fafb] text-center'>
        <div className='pt-[100px] text-neutral-600 '>
            <h1 className='text-[30px] '>EXPLORE</h1>
            <p className='pt-[15px]'>Explore New place, food, culture around the world and many more</p>
        </div>

        <div className=' md:flex  flex-wrap gap-[30px]  m-[80px]   '>
     {
        exploreItem.map((eachexplore)=>(
            <div className='shadow-sm md:w-[30%] my-[30px] w-[100%]  bg-white' > 
                <img src={eachexplore.image1} alt=""  className='w-[100%]'/>
                <h2 className='my-[25px] justify-self-start px-[20px] font-bold cursor-pointer'>{eachexplore.text1}</h2>
                <div className=' flex  '>
                <span className={`${getRating(eachexplore.num1)} shadow-sm w-[10%] mx-[9px]  text-white rounded-[2px]`}>{eachexplore.num1}</span>
                <p className=' border-r-1 px-[10px] border-indigo-500 cursor-pointer'>{eachexplore.text2}</p>
                <p className=' border-r-1 px-[10px] border-indigo-500 '>{eachexplore.text3}</p>
                <p className='px-[10px] cursor-pointer'>{eachexplore.word}</p>
                </div>
                <div className='flex mt-[30px] mx-[20px] '>
                <img className='w-[50px] h-[50px] cursor-pointer' src={eachexplore.image2} alt="" />
                <p className='text-[14px] leading-[1.8] '>{eachexplore.word2}</p>
                </div>
                <div className=' mt-[50px] border-b-1 mx-[20px] border-indigo-500'>
                </div>
                <div className='mt-[40px] mx-[20px] pb-[30px] flex justify-between  cursor-pointer  '>
                  <h2 className={`${getWord(eachexplore.word3)} text-[14px]`} >{eachexplore.word3}</h2>
                  <div className=' flex gap-[30px]'>
                  <i  className={`${eachexplore.icons1} `}></i>
                  <i className={`${eachexplore.icons2}`}></i>
                  <i className={`${eachexplore.icons3}`}></i>
                  </div>

                </div>
                

            </div>

        ))
     }

    </div>

    </div>
  )
}



