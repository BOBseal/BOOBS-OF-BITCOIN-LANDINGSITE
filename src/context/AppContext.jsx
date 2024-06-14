'use client'

import React, {useState , useEffect} from "react"
import {BOB_MAINNET, IceRouterAbi } from "../utils/constants"
import { ethers } from "../../node_modules/ethers/lib/index"
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
    swapExactTokenToToken
 } from "../utils/hooks"

export const AppContext = React.createContext();

export const AppProvider =({children})=>{
    const IceRouterAddress = "0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083" 
    const [user , setUser] = useState({});
    const [act , setAct] = useState(0);
    const [states, setStates] = useState({
        mobileMenuOpen: false ,
        contentsSubmenuOpen: false,
      })
    const [fusionData, setFusionData] = useState({})
    const [dexStates , setDexStates] = useState({
        amountOut:'',
        amountIn:'',
        tokenIn:'0x4200000000000000000000000000000000000006',
        tokenOut:'0x05D032ac25d322df992303dCa074EE7392C117b9',
        type:'NATIVE'
    })
    const [loading , setLoading] = useState(false);
    
    const connectWallet = async()=>{
        try {
            const chain = await getChainId();
            const accounts = await connectMetamask();
            await resolveChain(chain)
            
            if(accounts.wallet){
                const res = walletSign("BOTS OF BITCOIN wants you to sign in and confirm wallet ownership. ARE YOU FRIKKIN READY TO RAMPAGE !!?" , accounts.wallet);                
                res.then(()=>{
                    setUser({...user , wallet:accounts.wallet});
                }).catch((err)=>{
                    console.log(err)
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const resolveChain=async(chain)=>{
        try {
            if(user.wallet){
                if(chain != BOB_MAINNET[0].chainId){
                    addNetwork(BOB_MAINNET);
                    changeNetwork(BOB_MAINNET[0].chainId)
                }
            }
        } catch (error) {
            console.log(error)
        }
    }

    const openMobileMenu=()=>{
        if(states.mobileMenuOpen){
          setStates({...states,mobileMenuOpen:false})
          console.log(false)
          
        }
        if(!states.mobileMenuOpen){
          setStates({...states,mobileMenuOpen:true})
          console.log(true)
        }
    }

    const getFusionData=async()=>{
    try {
        const res = await fetch("https://fusion-api.gobob.xyz/partners");
        const data = await res.json();
        setFusionData({...fusionData, data: data, ok: res.ok})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    }

    ///////ICE CREAM SWAP CALLS /////////////////

    /////helpers////////
    ////////////////////

    const WETH =async()=>{
        try {
            const contract = iceRouterObj();
            const WETH = await contract.WETH();
            return WETH
        } catch (error) {
            console.log(error)
        }
    }

    const getAmountsOut = async(amountIn, path)=>{
        try {
            if(user.wallet && window.ethereum){
                console.log("USER WALLET :",user.wallet , "ROUTER :", IceRouterAddress)
                const contract = await connectContract(IceRouterAddress, IceRouterAbi, user.wallet)
                console.log("CA :" , contract)
                const amountOut =await contract.getAmountsOut(amountIn, path);
                return amountOut
            }
        } catch (error) {
            console.log(error);
        }
    }

    

    const getAmountsIn = async(amountOut) =>{
        try {
            const contract = await connectContract(IceRouterAddress, IceRouterAbi, user.wallet)
            const amountIn = await contract.getAmountsIn(amountOut, path);
            return amountIn
        } catch (error) {
            console.log(error)
        }
    }

    const executeSwap=async()=>{
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    ////////////////////////////////////////////

    return(
        <>
        <AppContext.Provider value={{connectWallet, user, act , fusionData,setAct, states, setStates, openMobileMenu, getFusionData, resolveChain , dexStates , setDexStates , getAmountsIn , getAmountsOut, WETH}}>
            {children}
        </AppContext.Provider>
        </>
    )
}