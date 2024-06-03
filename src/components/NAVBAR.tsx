'use client'
import React,{useContext, useState} from 'react'
import Image from 'next/image'
import lgo from "../assets/dp.jpg"
import menu from "../assets/threelinemenu.svg"
import { AppContext } from '@/context/AppContext'
import { AnimatePresence , motion } from 'framer-motion'
import Link from '../../node_modules/next/link'

interface NavbarProps {
  openMobileMenu: () => void;
  userWallet : String;
  connectWallet : () => void;
}

const Navbar: React.FC<NavbarProps> = () => {
  const {connectWallet , user, states, setStates, openMobileMenu} = useContext(AppContext);
  const [exitVariants , setActiveVariants] = useState({
    hidden: { opacity:60, y: 100 },
    visible: { opacity:1, y: 0 },
    exit: { opacity:60,  y: -100 },
})

  const scrollToHeight = () => {
    window.scrollBy({
      top: 700, // Number of pixels to scroll vertically
      behavior: 'smooth' // For smooth scrolling
    });
  };

  const al =()=>{
    alert("Coming Soon");
  }
  return (
    <div className="flex justify-between items-center border-b-[2px] border-black bg-[#E5BD19] w-full p-[0.7rem] lg:pr-[6rem] lg:pl-[6rem]">
        <div className='flex justify-center gap-[0.5rem] md:gap-[1rem] lg:gap-[1.6rem] items-center'>
          <div className='h-[50px] w-[50px] md:h-[70px] md:w-[70px]'>
              <Image src={lgo} height={1000} width={1000} alt="logo" className='rounded-full border border-black object-cover'/>
          </div>
          <div> 
            <h1 className='font-fredoka leading-[40px] text-[23px] md:text-[35px] lg:text-[45px] font-[700] hidden md:flex'>BOTS OF BITCOIN</h1>
          </div>
        </div>

        <div className="md:hidden flex">
          {!states.mobileMenuOpen ? <button className='h-[70px] w-[70px] md:h-[80px] md:w-[80px] cursor-pointer' onClick={()=>openMobileMenu()}>
            <Image src={menu} height={1000} width={1000} alt="menu" className='object-cover'/>
          </button> : 
          <AnimatePresence>
            <motion.div
            key={states.mobileMenuOpen}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ ease: "easeInOut", duration: 0.8 }}
            variants={exitVariants}
            >
             <MobileNav openMobileMenu={openMobileMenu} userWallet={user.wallet} connectWallet={connectWallet}/>
            </motion.div>
          </AnimatePresence>
          }
        </div>
        
        <div className ="md:flex gap-[30px] md:gap-[15px] lg:gap-[35px] hidden text-black">
          <Link href={'/'}>
          <button className='lg:text-[22px] md:text-[18px] font-nunito font-semibold hover:scale-105'>Home</button> 
          </Link>
          <button className='lg:text-[22px] font-nunito font-semibold md:text-[18px] hover:scale-105' onClick={()=> scrollToHeight()}>Mint</button>
          <button className='lg:text-[22px] font-nunito font-semibold md:text-[18px] hover:scale-105' onClick={()=> al()}>Pots</button>
          <button className='lg:text-[22px] font-nunito font-semibold md:text-[18px] hover:scale-105' onClick={()=> al()}>Vaults</button>
          <Link href={'https://botsofbtc.notion.site/BOTS-OF-BITCOIN-27ab822513f5459d861d07a6f11271ba?pvs=4'} target={'_blank'}>
          <button className='lg:text-[22px] font-nunito font-semibold md:text-[18px] hover:scale-105'>Docs</button>
          </Link>
        </div>

        <button className='md:flex hidden text-[22px] md:text-[18px] hover:scale-105 font-nunito p-[10px] pl-[20px] pr-[20px] text-white font-semibold bg-black rounded-full'>
          {user.wallet ? <div>0x...{user.wallet.slice(38)}</div>: <div className='flex justify-center ' onClick={()=> connectWallet()} >LOG IN</div>}
        </button>
    </div>
  )
}


const MobileNav :React.FC <NavbarProps>=({openMobileMenu , userWallet, connectWallet})=>{
  const al =()=>{
    openMobileMenu();
    alert("Coming Soon");
  }
  return(
    <div className='absolute md:hidden top-0 left-0 bg-[#E5BD19] h-[35rem] w-full z-50'>
      <div className='flex flex-col h-full border-b-[20px] border-black w-full justify-evenly items-center'>
        <div className='flex flex-col h-[80%] justify-center gap-[2rem]'>
        <Link href={'/'}>
          <button className=' font-nunito text-black text-[20px]' onClick={()=>openMobileMenu()}>Home</button> 
          </Link>
          <p onClick={()=> al()} className=' font-nunito text-black text-[20px]'>Mint</p>
          <p onClick={()=> al()} className=' font-nunito text-black text-[20px]'>Lottery</p>
          <p onClick={()=> al()} className=' font-nunito text-black text-[20px]'>Vaults</p>
          <Link href={'https://botsofbtc.notion.site/BOTS-OF-BITCOIN-27ab822513f5459d861d07a6f11271ba?pvs=4'} target={'_blank'}>
          <p className=' font-nunito text-black text-[20px]'>Docs</p>
          </Link>
          <button className='text-black font-nunito text-[22px]'>{userWallet ? <div>0x...{userWallet.slice(37)}</div>:<div onClick={()=>connectWallet()} >LOGIN</div>}</button>
        </div>
        <button className='h-[4rem] font-nunito text-[22px] text-black p-[1rem] w-[12rem] justify-center flex ' onClick={()=>openMobileMenu()}>CLOSE</button>
      </div>
    </div>
  )
}

export default Navbar