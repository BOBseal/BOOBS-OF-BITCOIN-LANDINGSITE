//import A from "./IceCreamRouter.json"
import cc from "./ABIS/Sp_IcyExecutioner.json"
import JJ from "./ABIS/ERC20.json"

export const BOB_MAINNET = [
    {
        chainId:"0xed88",
        chainName:"BOB",
        rpcUrls:["https://rpc.gobob.xyz"],
        nativeCurrency:{
         name: "ETH",
         symbol:"ETH",
         decimals: 18,   
        },
    }
]

//export const IceRouterAbi = A.abi

export const IERC20ABI = JJ.abi

export const IceRouterAddress = "0x698a912F8CA34Df9b46E6Ea4A2B2DB0B7151b083" 

export const IceCream = [
    {contract:"0xCD14F844b2252acd557cd7AE1C915FA12f9254af",abi:cc.abi}
]