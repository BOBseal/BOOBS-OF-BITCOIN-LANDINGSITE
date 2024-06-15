'use client'
import { supportedList } from "@/configs/config"
import React, {useState , useEffect} from "react"
import {BOB_MAINNET, IceCream, IceRouterAbi } from "../utils/constants"
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
    swapExactTokenToToken,
    getIceContract,
    getErc20CA,
    getErc20Balances
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
        tokenIn:'WETH',
        tokenOut:'USDT',
        type:'NATIVE',
        outBalance:'',
        inBalance:''
    })
    const [loading , setLoading] = useState(false);
    const findTokenByTicker = (ticker) => {
        return Object.values(supportedList).find(token => token.ticker === ticker);
    };
    const connectWallet = async()=>{
        try {
            const chain = await getChainId();
            const accounts = await connectMetamask();
            await resolveChain(chain)
            
            if(accounts.wallet){
                const res = await walletSign("BOTS OF BITCOIN wants you to sign in and confirm wallet ownership. ARE YOU FRIKKIN READY TO RAMPAGE !!?" , accounts.wallet);                
                console.log(res);
                if(res){
                    setUser({...user , wallet:accounts.wallet});
                    const tokenIn = findTokenByTicker(dexStates.tokenIn);
                    const tokenOut = findTokenByTicker(dexStates.tokenOut);
                    const tokenInBalances = await getErc20Balances(tokenIn.address,accounts.wallet);
                    const tokenOutBalances = await getErc20Balances(tokenOut.address,accounts.wallet);
                    console.log(tokenInBalances,tokenOutBalances)
                    setDexStates({...dexStates,outBalance:tokenOutBalances , inBalance:tokenInBalances})
                }
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

    const getAmountsOut = async(path)=>{
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

    const executeSwap=async(dataObj,token,amount)=>{
        try {
            const ca = await getIceContract(user.wallet);
           
            if(!dataObj){
                alert("Enter Amount")
                return
            }
            const caTkn = await getErc20CA(token,user.wallet);
            
            console.log(caTkn)
            const ss =await caTkn.allowance(user.wallet,IceCream[0].contract);
            const intSs = parseInt(Number(ss));
            const intAm = parseInt(Number(amount));
            console.log(intSs,intAm,"Allowances")
            if(intSs < intAm){
                const tt = await caTkn.approve(IceCream[0].contract, amount);
            tt.wait(1).then(async (receipt) => {
                alert(`Approve Successful hash : ${tt.hash}`)
            //tt.then(async()=>{
                const exec = await ca.swap(dataObj.tx.to,dataObj.tx.data,token,amount,{value:dataObj.tx.value, gasLimit:300000});
                exec.wait(1).then(async(a)=>{alert(`swap complete txhash: ${exec.hash}`);})
                return exec
                //console.log(exec)
            //}).catch(e=>{
                //console.log(e);
            //})
        })} else {
            const execs = await ca.swap(dataObj.tx.to,dataObj.tx.data,token,amount,{value:dataObj.tx.value});
            execs.wait(1).then(async(a)=>{alert(`swap complete txhash: ${execs.hash}`);})
        }
        } catch (error) {
            console.log(error)
        }
    }

    ////////////////////////////////////////////

    return(
        <>
        <AppContext.Provider value={{connectWallet, user, act , fusionData,setAct, states, setStates, openMobileMenu, getFusionData, resolveChain , dexStates , setDexStates , getAmountsOut, WETH, executeSwap}}>
            {children}
        </AppContext.Provider>
        </>
    )
}