import React from 'react'
import Navbar from '@/components/NAVBAR'
import HM from "@/components/HM"
import TxtSlider from "@/components/TxtSlider"
import Partners from "@/components/Partners"
import Team from "@/components/Team"
import Footer from "@/components/Footer"
import FusionInvite from '@/components/Banners/FusionInvite'
import SobBanner from "@/components/Banners/SobBanner.jsx"
import RampageHome from "@/components/RampageHome.jsx"
import NFTHover from "@/components/NavbarDropdowns/NftButtonDesktop"
const CSS = {

}

const HomeV2 = () => {
  return (
    <div className={`flex flex-col w-full h-full`}>
      <Navbar/>
      <>
      <HM/>
      <RampageHome/>
      <Partners />
      <TxtSlider />
      <FusionInvite/>
      <Team />
      <Footer />
      </>
    </div>
  )
}

export default HomeV2