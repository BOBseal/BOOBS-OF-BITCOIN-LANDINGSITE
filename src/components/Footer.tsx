'use client'
import React from 'react'
import twit from '../assets/Vector1.svg'
import Image from 'next/image'
import telegram from "../assets/telegram.svg"
import Link from 'next/link'

const Footer:React.FC = () => {
  const al =()=>{
    alert ("coming soon")
  }
  const tnc =()=>{
    alert ("Announcements soon")
  }
  return (
    <div className='bg-[#231F20] p-[2rem] md:p-[4rem] text-white flex flex-col justify-center items-center gap-[2rem]'>
        <div className=' grid gap-[4rem] items-center w-[80%] md:w-[50%] lg:w-[30%] justify-items-center justify-center grid-cols-2'>
          <div className='flex flex-col gap-[1rem]'>
            <p>Docs</p>
            <p>Contact Us</p>
            <Link href={'/faq'} target="_blank">
            <p>FAQs</p>
            </Link>
            <Link href={'https://t.me/botsofbtc'} target="_blank">
            <Image src={telegram} className={`text-white bg-white rounded-full`} height={30} width={30} alt="Telegram"/>
            </Link>
          </div>

          <div className='flex flex-col gap-[1rem]'>
            <p onClick={()=>al()}>Vaults</p>
            <p onClick={()=>al()}>Mint</p>
            <p onClick={()=>al()}>Lottery</p>
            <Link href={'https://twitter.com/BotsOfBtc'} target="_blank">
            <Image src={twit} height={30} width={30} className={``} alt="Twitter / X"/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default Footer