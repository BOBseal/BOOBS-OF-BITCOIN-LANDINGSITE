"use client";
import React, { useState, useEffect, useContext, useRef} from "react";
import Navbar from "@/components/NAVBAR";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { partnerInfo } from "@/configs/config";
import Image from "../../../node_modules/next/image";
import { supportedList } from "@/configs/config";
import updown from "../../assets/updownarrow.svg";
import { AppContext } from "@/context/AppContext";
import { getEthBalance } from "@/utils/hooks";
import { ethers } from "../../../node_modules/ethers/lib/index";
import { getSwapData } from "@/utils/hooks";

//const web3 = new Web3(`https://rpc.gobob.xyz`);

const Page = () => {
    const {dexStates , setDexStates, getAmountsOut,user, connectWallet} = useContext(AppContext);
    
    const setTokenIn =(e)=>{
        setDexStates({...dexStates, tokenIn:e})
    }

    const setTokenOut=(e)=>{
        setDexStates({...dexStates, tokenOut:e})
    }

    const setAmountIn= async(e)=>{
        setDexStates({...dexStates, amountIn:e})
        const path = [dexStates.tokenIn,dexStates.tokenOut]
        const tokenOut = dexStates.tokenOut;
        const tknOutD = supportedList[tokenOut];
        const decimals = tknOutD ? tknOutD.decimals : 18;
        let amount
        console.log(amount)
        const a = await getSwapData(e.toString(),path)
        console.log(a)
        //if(dexStates.amountIn){
        //  amount = ethers.utils.parseUnits(dexStates.amountIn , decimals)
        //}
        //const amountsOut = await getAmountsOut(amount , path);
        //const amt0 = ethers.utils.formatUnits(amountOut[0],decimals)
        //const amt1 = ethers.utils.formatUnits(amountOut[1],decimals)
       // console.log("REturn val:",amountsOut)
    }
  return (
    <>
      <Navbar />
      <div className="flex h-full min-h-[49rem] md:min-h-[53rem] gap-[2rem] justify-between pt-[3rem] border-b-[3px] border-[#E5BD19] pb-[2rem] items-center bg-[#231F20] bg-cover flex-col p-[1rem] md:p-[4rem] md:pt-[6rem]">
        <div className="w-[95%] lg:w-[40%] md:w-[75%] h-[38rem] rounded-xl bg-[#352f31] bg-cover flex-col border-[#E5BD19] border-b drop-shadow-xl flex">
          <div className="flex bg-[#E5BD19] w-full h-[10%] rounded-t-xl">
            <h1 className="flex items-center w-full justify-center font-fredoka text-[35px] md:text-[45px] font-[700]">
              SWAP
            </h1>
          </div>
          <div className="w-full h-[90%] flex flex-col text-white">
            <div className="h-[90%] w-full flex flex-col justify-between pt-[1rem] pb-[1rem]">
              <div className="flex justify-evenly flex-col h-[45%] pl-[1rem] pr-[1rem]">
                <div className="w-full flex flex-col md:items-center md:flex-row justify-between gap-[2rem]">
                  <div className="flex flex-col md:flex-row md:items-center gap-[1rem] md:w-[60%]">
                    <p className="flex text-[#E5BD19] font-fredoka text-[26px] leading-[20px] drop-shadow-lg">
                      FROM :
                    </p>
                    <select
                    value={dexStates.tokenIn}
                      className="p-[7px] flex bg-black rounded-xl drop-shadow-lg"
                      onChange={(e) => setTokenIn(e.target.value)}
                    >
                      {/* {supportedList.map((obj, key) => (
                        <option key={key}>
                          {obj.name} - {obj.ticker}
                        </option>
                      ))} */}
                      <option value="eth">ETH</option>
                      <option value="usdt">USDT</option>
                      <option value="dai">USDC</option>
                      <option value="wbtc">WBTC</option>
                      <option value="weth">WETH</option>
                    </select>
                  </div>
                  <p className="flex text-[12px] drop-shadow-lg">
                    Balances: 0.00000000001 ETH
                  </p>
                </div>
                <div className="w-full justify-center items-center flex">
                  <input
                    type="text"
                    placeholder="Amount"
                    className="w-full outline-none text-white px-4 bg-black h-[4rem] drop-shadow-lg md:h-[8rem] rounded-xl"
                    value={dexStates.amountIn}
                    onChange={(e) => setAmountIn(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex h-[13%] justify-center items-center">
                <Image
                  src={updown}
                  height={50}
                  width={50}
                  alt="UP DOWN"
                  className="drop-shadow-lg cursor-pointer hover:scale-105"
                />
              </div>
              <div className="flex justify-evenly flex-col h-[45%] pl-[1rem] pr-[1rem]">
                <div className="w-full flex flex-col md:items-center md:flex-row justify-between gap-[2rem]">
                  <div className="flex flex-col md:flex-row md:items-center gap-[1rem] md:w-[50%]">
                    <p className="flex text-[#E5BD19] font-fredoka text-[26px] leading-[20px] drop-shadow-lg">
                      TO :
                    </p>
                    <select
                      className="p-[7px] flex bg-black rounded-xl drop-shadow-lg"
                      value={dexStates.tokenOut}
                      defaultValue="usdt"
                      onChange={(e) => setTokenOut(e.target.value)}
                    >
                      {/* {supportedList.map((obj, key) => (
                        <option key={key}>
                          {obj.name} - {obj.ticker}
                        </option>
                      ))} */}
                      <option value="usdt">USDT</option>
                      <option value="eth">ETH</option>
                      <option value="dai">USDC</option>
                      <option value="wbtc">WBTC</option>
                      <option value="weth">WETH</option>
                    </select>
                  </div>
                  <p className="flex text-[12px] drop-shadow-lg">
                    Balances: 0.00000000001 ETH
                  </p>
                </div>
                <div className="w-full justify-center items-center flex">
                  <input
                    type="text"
                    placeholder="0.0"
                    value={dexStates.amountOut}
                    className="w-full outline-none text-white px-4 bg-black h-[4rem] drop-shadow-lg md:h-[8rem] rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="h-[10%] w-full  justify-center items-center flex pb-[2rem]">
              <div
               
                className="p-[5px] pl-[12px] pr-[12px] text-black rounded-xl text-[22px] font-fredoka bg-[#E5BD19] font-[600]"
              >
                {user.wallet ? <button>SWAP NOW</button> : <button onClick={()=>connectWallet()}>Connect Wallet</button>}
              </div>
            </div>
          </div>
        </div>

        <p className="text-[15px] w-[95%] md:w-auto font-fredoka flex items-center bg-black text-white p-[5px] rounded-2xl ">
          Powered By{" "}
          <Image src={partnerInfo[1].logo} height={100} width={200} />{" "}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Page;