import React from 'react'

export default function Card() {
 const cardItem = [
  {
    icons: 'pi pi-home',
    title: 'Resturent',
    num:'150 listings',
  },
  {
    icons: 'pi pi-briefcase',
     title: 'Destination',
     num:'214 listings',
  },
  {
    icons: 'pi pi-building',
    title:'Hotels',
    num:'185 listings',
  },
  {
    icons: 'pi pi-ban',
    title: 'Healthcaree',
    num: '200 listings',
  },

  {
    icons: 'pi pi-car',
    title: 'Automotion',
    num: '120 listings',
  }
 ]

  return (
    <div className='flex flex-wrap w-[75%] mx-[100px] gap-4 mt-[-90px]  ' >
      {
        cardItem.map((eachcard)=>(
          <div className='shadow-sm bg-white  w-[20%]  p-7 text-center cursor-pointer group hover:bg-[#ff0000] group hover:text-white'>
           <i className={`${eachcard.icons} text-4xl`}></i>
            <h2 className='font-bold mt-2'>{eachcard.title}</h2>
            <p className='mt-2'>{eachcard.num}</p>
          </div>
        ))
      }
    </div>
    
  )
}
