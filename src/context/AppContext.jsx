'use client'

import React, {useState , useEffect} from "react"
import {BOB_MAINNET, IceRouterAbi , IceRouterAddress} from "../utils/constants"
import ethers from 'ethers'
import { 
    addNetwork,
    changeNetwork,
    connectContract,
    unixToGeneralTime,
    connectMetamask,
    getChainId,
    getEthBalance,
    walletSign
 } from "../utils/hooks"

export const AppContext = React.createContext();

export const AppProvider =({children})=>{

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
        fromToken:'',
        toToken:'',
        fromNative:false
    })
    
    const connectWallet = async()=>{
        try {
            const chain = await getChainId();
            const accounts = await connectMetamask();
            await resolveChain()
            console.log(accounts)
            if(accounts.wallet){
                const res = walletSign("BOTS OF BITCOIN wants you to sign in and confirm wallet ownership. ARE YOU FRIKKIN READY TO RAMPAGE !!?" , accounts.wallet);                
                res.then(()=>{
                    setUser({...user , wallet: accounts.wallet});
                }).catch((err)=>{
                    alert("Sign In failed")
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    const resolveChain=async()=>{
        try {
            if(user.wallet){
                if(chain != BOB_MAINNET[0].chainId){
                    addNetwork(BOB_MAINNET);
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
        setFusionData({...fusionData, apiResponse: data, ok: res.ok})
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    }

    ///////ICE CREAM SWAP CALLS /////////////////

    /////helpers////////
    const iceRouterObj =async()=>{
        try {
            if(user.wallet){
                const contract = await connectContract(IceRouterAddress, IceRouterAbi, user.wallet)
                return contract   
            }
        } catch (error) {
            console.log(error)
        }
    }
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

    ////////////////////////////////////////////

    return(
        <>
        <AppContext.Provider value={{connectWallet, user, act , fusionData,setAct, states, setStates, openMobileMenu, getFusionData, resolveChain}}>
            {children}
        </AppContext.Provider>
        </>
    )
}