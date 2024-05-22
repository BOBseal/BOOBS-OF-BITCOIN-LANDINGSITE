"use client";
import React, { useState, useEffect } from "react";
import Navbar from "@/components/NAVBAR";
import Footer from "@/components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import { partnerInfo } from "@/configs/config";
import Image from "../../../node_modules/next/image";
import { supportedList } from "@/configs/config";
import updown from "../../assets/updownarrow.svg";
import Web3 from "web3";
import { getAmountsOut } from "@/utils/hooks";
import { swapExactTokensForTokens } from "@/utils/hooks";

const web3 = new Web3(`https://rpc.gobob.xyz`);

const Page = () => {
  const [amountIn, setAmountIn] = useState("");
  const [amountOut, setAmountOut] = useState("");
  const [tokenIn, setTokenIn] = useState("eth");
  const [tokenOut, setTokenOut] = useState("usdt");
  const [account, setAccount] = useState("");

  const tokenAddresses = {
    eth: "0x4200000000000000000000000000000000000006", // WETH
    usdt: "0x05D032ac25d322df992303dCa074EE7392C117b9",
    btc: "0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3", // WBTC
  };
  const tokenDecimals = {
    eth: 18,
    usdt: 6,
    dai: 18,
    btc: 8,
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            setAccount(accounts[0]);
            web3.eth.defaultAccount = accounts[0];
            console.log("Account set:", accounts[0]);
          } else {
            alert("No accounts found. Please connect your wallet.");
          }
        })
        .catch((error) => {
          console.error("Error fetching accounts: ", error);
          alert("Please connect your Ethereum wallet.");
        });

      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setAccount(accounts[0]);
          web3.eth.defaultAccount = accounts[0];
          console.log("Account changed:", accounts[0]);
        } else {
          setAccount("");
          console.log("Account disconnected");
        }
      });

      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });
    }
  }, []);

  const getQuote = async () => {
    if (!amountIn || isNaN(amountIn) || parseFloat(amountIn) <= 0) {
      setAmountOut("");
      return;
    }

    const decimalsIn = tokenDecimals[tokenIn];
    const decimalsOut = tokenDecimals[tokenOut];
    const path = [tokenAddresses[tokenIn], tokenAddresses[tokenOut]];

    const amountInRounded = (
      parseFloat(amountIn) * Math.pow(10, decimalsIn)
    ).toString();
    const amountInWei = web3.utils.toBN(amountInRounded);

    try {
      const amountsOut = await getAmountsOut(amountInWei, path);
      const amountOutWei = amountsOut[1];

      const amountOutFormatted = amountOutWei / Math.pow(10, decimalsOut);
      setAmountOut(amountOutFormatted);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setAmountOut("Error");
    }
  };

  useEffect(() => {
    getQuote();
  }, [amountIn, tokenIn, tokenOut]);

  const handleSwap = async () => {
    const decimalsIn = tokenDecimals[tokenIn];
    const decimalsOut = tokenDecimals[tokenOut];
    const path = [tokenAddresses[tokenIn], tokenAddresses[tokenOut]];

    const amountInRounded = (
      parseFloat(amountIn) * Math.pow(10, decimalsIn)
    ).toFixed(0);
    const amountInWei = web3.utils.toBN(amountInRounded);

    const amountOutMinRounded = (
      parseFloat(amountOut) *
      0.95 *
      Math.pow(10, decimalsOut)
    ).toFixed(0);
    const amountOutMinWei = web3.utils.toBN(amountOutMinRounded);

    try {
      console.log("Account:", account);
      console.log("Amount In (Wei):", amountInWei.toString());
      console.log("Amount Out Min (Wei):", amountOutMinWei.toString());

      await swapExactTokensForTokens(
        account,
        amountInWei,
        amountOutMinWei,
        path
      );
      alert("Swap successful!");
    } catch (error) {
      console.error("Swap failed:", error);
      alert("Swap failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-full min-h-[49rem] md:min-h-[53rem] gap-[2rem] justify-between pt-[3rem] border-b-[3px] border-[#E5BD19] pb-[2rem] items-center bg-[#231F20] bg-cover flex-col p-[1rem] md:p-[4rem] md:pt-[6rem]">
        <div className="w-[95%] lg:w-[50%] md:w-[80%] h-[38rem] rounded-xl bg-[#352f31] bg-cover flex-col border-[#E5BD19] border-b drop-shadow-xl flex">
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
                      className="p-[7px] flex bg-black rounded-xl drop-shadow-lg"
                      value={tokenIn}
                      onChange={(e) => setTokenIn(e.target.value)}
                    >
                      {/* {supportedList.map((obj, key) => (
                        <option key={key}>
                          {obj.name} - {obj.ticker}
                        </option>
                      ))} */}
                      <option value="eth">ETH</option>
                      <option value="usdt">USDT</option>
                      <option value="dai">DAI</option>
                      <option value="btc">BTC</option>
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
                    className="w-full outline-none text-white rounded-[12px] h-14  px-4 bg-black h-[3rem] drop-shadow-lg md:h-[5rem] rounded-xl"
                    value={amountIn}
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
                      value={tokenOut}
                      onChange={(e) => setTokenOut(e.target.value)}
                    >
                      {/* {supportedList.map((obj, key) => (
                        <option key={key}>
                          {obj.name} - {obj.ticker}
                        </option>
                      ))} */}
                      <option value="eth">ETH</option>
                      <option value="usdt">USDT</option>
                      <option value="dai">DAI</option>
                      <option value="btc">BTC</option>
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
                    activeField={false}
                    value={amountOut}
                    className="w-full outline-none text-white rounded-[12px] h-14  px-4 bg-black h-[3rem] drop-shadow-lg md:h-[5rem] rounded-xl"
                  />
                </div>
              </div>
            </div>
            <div className="h-[10%] w-full  justify-center items-center flex pb-[2rem]">
              <button
                onClick={handleSwap}
                className="p-[5px] pl-[12px] pr-[12px] text-black rounded-xl text-[22px] font-fredoka bg-[#E5BD19] font-[600]"
              >
                SWAP NOW
              </button>
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
