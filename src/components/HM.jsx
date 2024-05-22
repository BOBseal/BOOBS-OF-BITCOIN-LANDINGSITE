'use client'
import React,{useContext} from 'react'
import Image from '../../node_modules/next/image'
import img1 from "../assets/haha.gif"
import img2 from "../assets/10.png"
import img3 from "../assets/11.png"
import { AppContext } from '@/context/AppContext'
import {motion , AnimatePresence} from "framer-motion"

const HM = () => {
    const {states} = useContext(AppContext);
 const st = {
    main : `flex flex-col gap-[1rem] md:gap-[2rem] justify-between items-center h-full pt-[10px] pb-[50px] bg-gradient-to-b from-[#E5BD19] to-[#FFEB99]`,
    h1:`md:text-[96px] lg:text-[130px] text-[38px] font-extrabold drop-shadow-2xl font-fredoka text-black font-outline-1`,
    imgBox:`flex flex-col md:flex-row-reverse justify-center items-center md:justify-between w-[85%] md:w-[80%] lg:w-[55%] gap-[2rem]`,
    img:`w-[250px] md:w-[450px] lg:w-[500px] object-cover drop-shadow-2xl`,
    h2:`md:text-[24px] uppercase text-[18px] leading-[30px] font-nunito text-black drop-shadow-2xl`
 } 
  
 return (<>
    <AnimatePresence>
        <motion.div
          initial ={{opacity:60 , y:-30 }}
         animate={{
          opacity:1,
          y:0
         }}
         transition={{ ease: "easeInOut", duration: 0.8 }}
        >
    <div className={`${st.main} ${states.mobileMenuOpen ? "blur-md" : ""}`} >
        <div>
            <h1 className={`${st.h1} font-`}>BOTS OF BITCOIN</h1>
        </div>
        <div className={`${st.imgBox}`}>
            <Image src={img1} height={1000} width={1000} className={`${st.img}`} alt="Bots Of Bitcoin"/>
            <h2 className={st.h2}>
            BOTS OF BITCOIN is a Collection of 10k Unique Revenue Sharing BOT PFPs with Utility on BOB. Mint one and Earn 6.9% Royalties on your Minted PFPs Forever and a Bonus Airdrop of Platform Tokens!
            </h2>    
        </div>
    </div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default HM