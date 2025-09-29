import React from 'react'

export default function Container() {
   const contItems = [
    {
     icons: 'pi pi-sun',
     text1: 'Choose what to Do',
     text2: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
     btn1: 'Read More'
    },
    {
      icons: 'pi pi-discord',
     text1: 'Find what you want',
     text2: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
     btn1: 'Read More' 

    },
    {
    icons: 'pi pi-money-bill',
     text1: 'Explore amazing Place',
     text2: 'Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod tempor incididunt ut laboremagna aliqua.',
     btn1: 'Read More'
    },

   ]



  return (
    <div className='md:flex  justify-center md:h-[80vh] h-[110vh] gap-9 bg-white' >
       {
        contItems.map((eachcont)=>(
            <div className=' shadow-sm h-[400px] md:w-[28%] w-[100%] bg-white text-center  rounded-[6px] p-[50px] group hover:bg-[#ff0000] '>
                <i className={`${eachcont.icons} text-4xl bg-[#eef2f6] p-[20px] rounded-full  group-hover:text-red-500 group-hover:bg-white  ` }></i>
                <h1 className='mt-[30px] text-[20px] group-hover:text-white'>{eachcont.text1}</h1>
                <p className='mt-[20px]  group-hover:text-white'>{eachcont.text2}</p>
                <button className='border border-gray-400  px-3 py-2 mt-[20px]  group-hover:text-red-500 group-hover:bg-white'><a href="">{eachcont.btn1}</a></button>
            </div>

        ))
       } 
    </div>
  )
}
 