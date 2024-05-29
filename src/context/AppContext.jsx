"use client";

import React, { useState, useEffect } from "react";
import { BOB_MAINNET, IceRouterAbi } from "../utils/constants";
import {
  addNetwork,
  changeNetwork,
  connectContract,
  unixToGeneralTime,
  connectMetamask,
  getChainId,
  getEthBalance,
  walletSign,
  swapExactEthToToken,
  swapExactTokenToEth,
  swapExactTokenToToken,
  getSwapData,
} from "../utils/hooks";
import { ethers } from "ethers";
import { supportedList } from "@/configs/config";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const IceRouterAddress = "0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083";
  const [user, setUser] = useState({});
  const [act, setAct] = useState(0);
  const [states, setStates] = useState({
    mobileMenuOpen: false,
    contentsSubmenuOpen: false,
  });
  const [fusionData, setFusionData] = useState({});
  const [dexStates, setDexStates] = useState({
    amountOut: "",
    amountIn: "",
    tokenIn: "eth",
    tokenOut: "usdt",
    type: "NATIVE",
  });
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    try {
      const chain = await getChainId();
      const accounts = await connectMetamask();

      if (accounts.wallet) {
        const res = walletSign(
          "BOTS OF BITCOIN wants you to sign in and confirm wallet ownership. ARE YOU FRIKKIN READY TO RAMPAGE !!?",
          accounts.wallet
        );
        res
          .then(() => {
            setUser({ ...user, wallet: accounts.wallet });
          })
          .catch((err) => {
            console.log(err);
          });

        await resolveChain(chain);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const resolveChain = async (chain) => {
    try {
      if (chain != BOB_MAINNET[0].chainId) {
        await addNetwork(BOB_MAINNET);
        await changeNetwork(BOB_MAINNET[0].chainId);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const openMobileMenu = () => {
    if (states.mobileMenuOpen) {
      setStates({ ...states, mobileMenuOpen: false });
      console.log(false);
    }
    if (!states.mobileMenuOpen) {
      setStates({ ...states, mobileMenuOpen: true });
      console.log(true);
    }
  };

  const getFusionData = async () => {
    try {
      const res = await fetch("https://fusion-api.gobob.xyz/partners");
      const data = await res.json();
      setFusionData({ ...fusionData, data: data, ok: res.ok });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  ///////ICE CREAM SWAP CALLS /////////////////

  /////helpers////////
  ////////////////////

  const WETH = async () => {
    try {
      const contract = iceRouterObj();
      const WETH = await contract.WETH();
      return WETH;
    } catch (error) {
      console.log(error);
    }
  };

  const getAmountsOut = async (amountIn, path) => {
    try {
      if (user.wallet && window.ethereum) {
        console.log("USER WALLET :", user.wallet, "ROUTER :", IceRouterAddress);
        const contract = await connectContract(
          IceRouterAddress,
          IceRouterAbi,
          user.wallet
        );
        console.log("CA :", contract);
        const amountOut = await contract.getAmountsOut(amountIn, path);
        return amountOut;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getAmountsIn = async (amountOut) => {
    try {
      const contract = await connectContract(
        IceRouterAddress,
        IceRouterAbi,
        user.wallet
      );
      const amountIn = await contract.getAmountsIn(amountOut, path);
      return amountIn;
    } catch (error) {
      console.log(error);
    }
  };

  const executeSwap = async () => {
    const tokenIn = supportedList[dexStates.tokenIn];
    const tokenOut = supportedList[dexStates.tokenOut];
    if (!tokenIn || !tokenOut || !user.wallet) {
      return;
    }

    const amountIn = ethers.utils.parseEther(dexStates.amountIn || "0");
    const path = [tokenIn.address, tokenOut.address];
    const swapData = await getSwapData(user.wallet, amountIn, path);

    if (!swapData) {
      return;
    }

    console.log("swap data", swapData);

    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [{ ...swapData.tx, gasPrice: "0x4a817c800", gas: "0x76c0" }],
      });
    } catch (e) {
      console.log("tx send issue:", e);
    }
  };

  ////////////////////////////////////////////

  return (
    <>
      <AppContext.Provider
        value={{
          connectWallet,
          user,
          act,
          fusionData,
          setAct,
          states,
          setStates,
          openMobileMenu,
          getFusionData,
          resolveChain,
          dexStates,
          setDexStates,
          getAmountsIn,
          getAmountsOut,
          WETH,
          executeSwap,
        }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};
