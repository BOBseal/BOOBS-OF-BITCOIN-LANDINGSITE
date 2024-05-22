import './globals.css'
import React from 'react'
import {AppProvider} from "../context/AppContext"
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
//import Navbar from '@/components/Navbar'
//import NAVBAR from "../components/NAVBAR"
import {Fredoka , Varela_Round , Saira, Nunito} from 'next/font/google'
//import Footer from '@/components/Footer'

const fredoka = Saira({
  subsets:['latin'],
  variable: "--font-fredoka",
  weight:"500"
})

const nunito = Nunito({
  subsets:['latin'],
  variable:"--font-nunito",
  weight:'800'
})

export const metadata:Metadata = {
  title: 'BOTS OF BITCOIN',
  description: '10k UNIQUE BOTS ON BITCOIN. NFT-FI, De-Fi , Casino & Airdrops Combined into a Fun Platform!',
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode;
} ){
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${nunito.variable}`}>
        <AppProvider>
        {children}
        </AppProvider>
        <Analytics/>
        </body>
    </html>
  )
}
