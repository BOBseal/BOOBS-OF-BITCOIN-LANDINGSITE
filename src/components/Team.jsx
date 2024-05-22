'use client'
import {teamConfig} from "../configs/config"
import TeamCard from "./CARDS/TeamCard"
import React, {useContext} from 'react'
import { AppContext } from '@/context/AppContext'
import {AnimatePresence , motion} from 'framer-motion'
const Team = () => {
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
    <div className={`h-full bg-[#E5BD19] p-[2rem] pb-[3rem] min-h-[20rem] flex justify-center items-center border-[3px] border-black ${states.mobileMenuOpen ? "blur-md" : ""}`}>
      <div className=' w-full h-full justify-between flex flex-col items-center gap-[1rem] md:gap-[2rem]'>
        <h1 className='text-black font-bold text-[2rem] md:text-[3rem] flex font-nunito w-[80%] md:w-auto justify-center'>TEAM</h1>
        <div className='w-full h-full min-h-[19rem] grid-cols-2 md:grid-cols-4 grid gap-[0.8rem]'>
        {teamConfig.map((item, key)=>(
          <TeamCard item ={item} key={key} className=""/>
        ))}
        </div>
      </div>
    </div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Team