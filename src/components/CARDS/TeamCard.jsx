'use client'
import React from 'react'
import Image from 'next/image'
import twit from "../../assets/Vector1.svg"
import linkedIn from "../../assets/Vector.svg"
const TeamCard = ({item}) => {
  const link = false;
  return (
    <div className='flex p-[1rem] h-full flex-col gap-[1rem] justify-center items-start font-nunito text-black'>
        <Image src={item.picture} height={100} width={100} alt ={item.name} className="rounded-full border-black border flex justify-center drop-shadow object-cover"/>
        <p className='text-[20px] md:text-[20px] font-semibold h-[3rem] drop-shadow-2xl'>@{item.name}</p>
        <p className='text-[20px] md:text-[20px] font-semibold h-[3rem] drop-shadow-2xl'>{item.designation}</p>
        <div className='flex gap-4'>
            {link ? <Image src={twit} height={30} width={30} className="bg-black p-1" alt="Linked In"/>:<div className='w-full h-full flex justify-start'>
            <p className='text-[15px] over md:text-[14px] h-[7rem] md:h-[6rem] lg:w-[50%] drop-shadow-2xl'>{item.desc}</p>
            </div>}
        </div>
    </div>
  )
}

export default TeamCard