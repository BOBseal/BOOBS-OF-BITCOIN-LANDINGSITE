'use client'
import React from 'react'
import Fusion from "../../assets/fusionlogo.svg"
import Image from '../../../node_modules/next/image'
import Link from '../../../node_modules/next/link'
import { banners } from '@/configs/config'
import { AnimatePresence, motion } from 'framer-motion'

const FusionInvite = () => {
  const inv = banners[0].inviteLink
  return (
    <>
    <AnimatePresence>
        <motion.div
          initial ={{opacity:60 , y:-50 }}
         animate={{
          opacity:1,
          y:0
         }}
         transition={{ ease: "easeInOut", duration: 0.8 }}
        >
    <div
    className={`bg-banner bg-cover bg-center gap-[1rem] md:gap-[2rem] flex justify-between flex-col items-center h-full pt-[2rem] pb-[4rem] border-white `}
    >
      <div className='w-full flex justify-center'>
      <Image src={Fusion} alt="BOB FUSION" height={100} width={100} className="w-[80%] md:w-[60%] lg:w-[40%] flex justify-center"/>
      </div>
      <div className='items-center flex text-white text-[30px] md:text-[48px] font-[700] font-fredoka flex-col w-[80%]'>
        <h1>{banners[0].a}</h1>
        <h2>{banners[0].b}</h2>
      </div>
      <Link href={inv} target="_blank">
        <button className='p-[0.5rem] cursor-pointer hover:scale-110 bg-[#FF6400] text-white text-[20px] font-fredoka'>JOIN NOW</button>
        </Link>   
    </div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default FusionInvite