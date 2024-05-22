import React from 'react'
import Navbar from '@/components/NAVBAR'
import HM from "@/components/HM"
import TxtSlider from "@/components/TxtSlider"
import Partners from "@/components/Partners"
import Team from "@/components/Team"
import Footer from "@/components/Footer"
import FusionInvite from '@/components/Banners/FusionInvite'
const CSS = {

}

const HomeV2 = () => {
  return (
    <div className={`flex flex-col w-full justify-center h-full`}>
      <Navbar/>
      <>
      <HM/>
      <TxtSlider />
      <Partners />
      <FusionInvite/>
      <Team />
      <Footer />
      </>
    </div>
  )
}

export default HomeV2