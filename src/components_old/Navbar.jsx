'use client'
import React, { useState } from 'react';
import '../styles/navbar.css';
import line from '../assets/threelinemenu.svg';
import Image from '../../node_modules/next/image';
import lgo from "../assets/dp.jpg"
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    const smallScreenElements = document.querySelectorAll('.small-screen');
    smallScreenElements.forEach(element => {
      element.classList.toggle('show');
    });
  };

  const handleScroll =(yValue)=>{
    try {
      window.scrollTo({
        top:0,
        behavior:'smooth'
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="nav-container flex justify-between w-full font-fredoka">
        <div className='absolute left-[1rem] md:left-[2rem] lg:left-[4rem] md:w-[35%]'>
          <div className='flex w-full gap-[1rem] justify-start items-center'>
            <div className='h-[50px] w-[50px] md:h-[70px] md:w-[70px]'>
              <Image src={lgo} height={1000} width={1000} alt="logo" className='rounded-full object-cover'/>
            </div>
             <h1 className='text-[1.55rem] mt-[5px] md:mt-0 lg:text-[2.2rem] md:ml-0 font-nunito'>BOTS OF BITCOIN</h1>
          </div>
        </div>
        <div className="nav-list-box md:w-[60%] md:ml-[20rem] lg:ml-[40rem]">

          {/*  CAN USE ROUTER TO NAVIGATE THROUGH DIFFERENT PAGES IN FUTURE */}
          <Image className='icon' src={line} alt="" onClick={toggleMenu} />

        
          <button className='list-items small-screen' onClick={()=> alert("Coming Soon")}>Lottery</button>
          <button className='list-items small-screen' onClick={()=> alert("Coming Soon")}>Rampage</button>
          <button className='list-items small-screen' onClick={()=> alert("Coming Soon")}>Vaults</button>
          <button className='list-items small-screen ' onClick={()=> alert("Coming Soon!")}>Mint</button>

          {/* 
          <div className="nav-btn list-items">
              Connect Wallet
          </div> */}

        </div>
      </div>
    </>
  );
}