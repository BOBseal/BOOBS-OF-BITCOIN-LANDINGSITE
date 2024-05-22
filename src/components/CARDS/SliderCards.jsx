'use client'
import React from 'react'
import Image from 'next/image'

const SliderCard =({data, index})=>{

    return(
        <div className='h-full w-full p-[1rem] pb-[3rem] gap-[1rem] flex flex-col overflow-y-auto'>
            {data.h1 ? <div className='text-[#E5BD19] leading-[30px] md:leading-[60px] font-fredoka text-[22px] md:text-[55px] flex justify-start font-bold uppercase md:w-[90%]'>{data.h1}</div>:""}
            {data.p1? <div className='w-[90%] text-white uppercase font-nunito mt-[20px] text-[15px]'>{data.p1}</div>:""}
            {data.h1a?<div className=''>
                {data.h1a.map((data,key)=>(
                    
                    <li className='w-full text-white uppercase mt-[20px] text-[15px] font-nunito' key={key}>{data}</li>
                    
                ))}
            </div>:""}
            {data.h2?<div className='text-[#E5BD19] font-fredoka leading-[30px] md:leading-[50px] mt-[20px] text-[18px] md:text-[35px] font-bold uppercase md:w-[90%]'> {data.h2}</div>:""}
            {data.p2?<div className='w-[90%] text-white uppercase text-[15px] font-nunito'>{data.p2}</div>:""}
            {data.h2a?<div>
                {data.h2a.map((data,key)=>(
                    
                    <li className='w-full text-white mt-[20px] text-[15px] uppercase font-nunito' key={key}>{data}</li>
                    
                ))}
            </div>:""}
            {data.h3?<div className='text-[#E5BD19] font-fredoka leading-[30px] md:leading-[50px] mt-[20px] text-[18px] md:text-[35px] font-bold uppercase md:w-[90%]'> {data.h3}</div>:""}
            {data.p3?<div className='w-[90%] text-white text-[15px] font-nunito uppercase'>{data.p3}</div>:""}
            {data.h3a?<div>
                {data.h3a.map((data,key)=>(
                    
                    <li className='w-full text-white mt-[20px] text-[15px] font-nunito uppercase' key={key}>{data}</li>
                    
                ))}
            </div>:""}
            {data.h4?<div className='text-[#E5BD19] font-fredoka leading-[30px] md:leading-[50px] mt-[20px] text-[18px] md:text-[35px] font-bold uppercase md:w-[90%]'> {data.h4}</div>:""}
            {data.p4?<div className='w-[90%] text-white uppercase text-[15px] font-nunito'>{data.p4}</div>:""}
            {data.h4a?<div>
                {data.h4a.map((data,key)=>(
                    
                    <li className='w-full text-white mt-[20px] uppercase text-[15px] font-nunito' key={key}>{data}</li>
                    
                ))}
            </div>:""}
            {data.p5?<div className='w-[90%] text-white text-[15px] font-nunito uppercase'>{data.p5}</div>:""}
            
        </div>
    )
}

export default SliderCard