'use client'
import React, {useContext} from 'react'
import Image from '../../node_modules/next/image'
import { partnerInfo } from '@/configs/config'
import { AppContext } from '@/context/AppContext'
import { AnimatePresence ,  motion} from 'framer-motion'
import partner1Logo from "../assets/BOB_LOGO.png"
import Link from '../../node_modules/next/link'

const Partners = () => {
  const {states} = useContext(AppContext)

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
    <div className={`bg-[#231F20] border-b-[3px] border-[#E5BD19]  flex p-[2rem] md:pb-[4rem] md:pt-[3rem] gap-[2rem] flex-col items-center ${states.mobileMenuOpen ? "blur-lg" : ""}`}>
        <p className='text-white font-nunito underline underline-offset-3'>Partners & Integrations</p>
        <div className='w-full lg:w-[70%] flex flex-col justify-evenly gap-[2rem] items-center md:flex-row'>
        {partnerInfo.map((o,k)=>(
        <div key={k} className='flex justify-center items-center'>
        <Link href={o.link} target={'_blank'}>
          <Image src={o.logo} width={200} height={200} alt="BOB Logo" className={`w-[${o.imgSizeData.sm}]  h-[${o.imgSizeData.sm}] transition duration-400 ease-linear transform hover:scale-105 md:w-[${o.imgSizeData.md}] md:h-[${o.imgSizeData.md}] lg:w-[${o.imgSizeData.lg}] lg:h-[${o.imgSizeData.lg}] flex justify-center cursor-pointer`}/>
        </Link>
        </div>
        ))}
        </div>
      </div>
      {/*<p className='text-white font-nunito underline underline-offset-3'>Ecosystem Partners</p>
      <Image src={partnerInfo[1].logo} width={180} height={180} alt="BOB Logo" className='w-[100px] md:w-[180px]'/>*/}
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Partners
