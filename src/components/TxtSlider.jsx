'use client'
import React,{useContext, useState} from 'react'
import {sectionText} from "../configs/config.jsx"
import Image from '../../node_modules/next/image.js'
import l from "../assets/leftArrow.png"
import r from "../assets/rightArrow.png"
import SliderCard from "./CARDS/SliderCards"
import { motion, AnimatePresence } from "framer-motion"
import { AppContext } from '@/context/AppContext.jsx'

const TxtSlider = () => {
    const {act , setAct, states} = useContext(AppContext);
    const [exitVariants , setActiveVariants] = useState({
        hidden: { opacity: 25, x: 100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
    })

    const goRight =()=>{
        if(act == 6){
            return
        }
        const s = act
        setAct(s +1);
    }

    const goLeft =()=>{
        if(act == 0){
            return
        }
        const s = act
        setAct(s -1);
    }

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
    <div className={`bg-[#231F20] flex justify-center md:flex-row md:justify-between items-center h-[600px] md:h-[600px] pt-[2rem] pb-[2rem] border-b border-white ${states.mobileMenuOpen ? "blur-md" : ""}`} >
        <button className='text-white md:ml-[30px] flex' onClick={()=> goLeft()}><Image src={l} height={20} width={20} alt="pcbutton" className="hover:scale-125"/></button>
        
        <AnimatePresence mode="wait">
                <motion.div
                    key={act}
                    className={`h-[89%] flex flex-col md:w-[70%] lg:w-[55%] w-[85%]`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={exitVariants}
                >
                            <SliderCard data={sectionText[act]}/>
                </motion.div>
            </AnimatePresence>

        <button className='text-white md:mr-[30px] flex' onClick={()=> goRight()}><Image src={r} height={20} width={20} alt="pcbutton" className="hover:scale-125"/></button>
    </div>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default TxtSlider