'use client'
import React, {useContext} from 'react'
import {AppContext} from "../../context/AppContext"
const Page = () => {
  return (
    <div className='bg-[#FF8500] h-screen flex flex-col justify-center items-center'>
        <div className='p-[1rem] w-full h-[40rem] flex flex-col justify-center items-center'>
            <div className='flex w-full gap-[4rem] bg-[#E8C430] overflow-y-scroll h-full border-[3px] shadow-xl flex-col pt-[2rem] pb-[2rem] rounded-xl items-center border-black'>
                <h1 className='text-[2.5rem] font-nunito font-[700] p-[10px] rounded-full drop-shadow-xl'>WELCOME TO RAMPAGE</h1>
            </div>
        </div>
    </div>
  )
}

export default Page