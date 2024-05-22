'use client'
import React,{useState} from 'react'
import Navbar from '@/components/NAVBAR'
import Footer from '@/components/Footer'
import { faqlist } from '@/configs/config'
import {AnimatePresence , motion} from 'framer-motion'
const Page = () => {
    const [openFq, setOpenFq] = useState(1000000);
    const [exitVariants , setActiveVariants] = useState({
        hidden: { opacity:60 , y:-50},
        visible: { opacity:1 , y:0},
        exit: { opacity:60,y:50},
    })

  return (
    <>
    <Navbar/>
    <div className={`bg-[#E5BD19] flex h-full p-[0.2rem] flex-col gap-[2rem] md:gap-[5rem] justify-center items-center pt-[2rem] pb-[2rem] border-b border-white `}>
        <h1 className='text-[#231F20] leading-[30px] md:leading-[60px] font-fredoka text-[22px] mt-[2rem] md:text-[55px] flex justify-start md:justify-center font-bold uppercase md:w-[90%]'>FAQs ABOUT BOTS OF BITCOIN</h1>
        <AnimatePresence>
        <motion.div
          initial ={{opacity:60 , y:-50 }}
         animate={{
          opacity:1,
          y:0
         }}
         className='gap-[2rem] flex flex-col justify-center items-center md:w-[80%] lg:w-[60%] '
         transition={{ ease: "easeInOut", duration: 0.8 }}
        >
        {faqlist.map((object, key)=>(
            <div onClick={()=> setOpenFq(key)} key={key} className={`w-full ${openFq == key? `h-full bg-[#231F20] min-h-[9rem] md:min-h-[11rem] border-[#E5BD19]` :`h-[9rem] md:h-[11rem] border-[#231F20] `} p-[1rem] md:p-[2rem] flex flex-col justify-evenly pl-[1rem] md:pl-[2rem] gap-[1rem] border-[2px] rounded-2xl`}>
                <div className={`font-fredoka leading-[30px] md:leading-[40px] ${openFq == key? `text-[#E5BD19]` :`text-[#231F20]`} text-[18px] md:text-[35px] font-bold uppercase md:w-[90%]`}>{key +1} : {object.question}</div>
                { openFq == key ? <div className={` ${openFq == key? `text-[#E5BD19]` :`text-[#231F20]`} w-full text-[15px] font-nunito`}>{"=> "}{object.answer}</div> :<div className={`w-[90%] ${openFq == key? `text-[#E5BD19]` :`text-[#231F20]`} text-[15px] font-nunito`}>Answer : click to know more...</div>}
            </div>
        ))}
        </motion.div>
        </AnimatePresence>
    </div>
    <Footer/>
    </>
  )
}

export default Page