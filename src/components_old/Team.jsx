import React from 'react'
import "../styles/Team.css"
import {teamConfig} from "../configs/config"
import TeamCard from "./CARDS/TeamCard"

const Team = () => {
  return (
    <div className='h-full p-[2rem] min-h-[20rem] flex justify-center items-center border-[3px] border-black'>
      <div className=' w-full h-full justify-between flex flex-col items-center gap-[2rem]'>
        <h1 className='text-black font-bold text-[2rem] md:text-[3rem] font-nunito w-[80%] md:w-auto md:justify-center justify-start'>TEAM</h1>
        <div className='w-full h-full min-h-[19rem] grid-cols-2 md:grid-cols-4 grid gap-[2rem]'>
        {teamConfig.map((item, key)=>(
          <TeamCard item ={item} key={key} className=""/>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Team