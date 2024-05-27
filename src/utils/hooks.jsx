import React from "react";
import { ethers } from "ethers";

export const changeNetwork =async(chainId)=>{
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params:[{chainId}]
        });
    } catch (error) {
        console.log(error);
    }
}

export const addNetwork =async(networkConfig)=>{
    try {
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: networkConfig
        });
    } catch (error) {
        console.log(error);
    }
}


export const getSwapData = async(amount,path)=>{
    try {
        const baseLink = 'https://aggregator.icecreamswap.com/60808'
        const from = path[0]
        const to = path[1]
        console.log(amount)
        const data  = await fetch(`${baseLink}?src=${from}&dst=${to}&amount=${amount}`);
    } catch (error) {
        console.log(error)
    }
}

export const connectContract = async (address, abi, account) => {
    try {

        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create a new Web3 provider and signer
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner(account);

        // Connect to the contract
        const contract = new ethers.Contract(address, abi, signer);
        return contract;
    } catch (error) {
        console.error("Failed to connect to contract:", error);
        return null;
    }
};

export const connectMetamask = async()=>{
    try {
        if(window.ethereum){
            const array = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            let object = {wallet:array[0], accounts: array};
            return object;
        } else return null       
    } catch (error) {
        console.log(error)
    }
}

export const getChainId = async()=>{
    try {
        if(window.ethereum){
            const chainId = await window.ethereum.request({ method: "eth_chainId" });
            return chainId;
        }
        else return false;
    } catch (error) {
        console.log(error)     
    }
}

export const getEthBalance=async(account)=>{
    try {
        if(window.ethereum){
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const balance = await provider.getBalance(account);
            const balanceInEth = ethers.utils.formatEther(balance);
//            console.log(balanceInEth);
            return balanceInEth
        }
    } catch (error) {
        console.log(error)
    }
}

export const walletSign = async(message , from)=>{
    try {
        const msg = `0x${Buffer.from(message, "utf8").toString("hex")}`;
        const sign = await window.ethereum.request({
            method: "personal_sign",
            params: [msg, from],
        });
        return sign;
    } catch (error) {
        console.log(error);
        alert("Sign In failed");
    }
}

export function unixToGeneralTime(seconds)

{
    // Save the time in Human
    // readable format
    let ans = "";

    // Number of days in month
    // in normal year
    let daysOfMonth = [ 31, 28, 31, 30, 31, 30,
                          31, 31, 30, 31, 30, 31 ];

    let currYear, daysTillNow, extraTime,
        extraDays, index, date, month, hours,
        minutes, secondss, flag = 0;

    // Calculate total days unix time T
    daysTillNow = parseInt(seconds / (24 * 60 * 60), 10);
    extraTime = seconds % (24 * 60 * 60);
    currYear = 1970;

    // Calculating current year
    while (true) {
    if (currYear % 400 == 0
        || (currYear % 4 == 0 && currYear % 100 != 0)) {
        if (daysTillNow < 366) {
            break;
        }
        daysTillNow -= 366;
    }
    else {
        if (daysTillNow < 365) {
            break;
        }
        daysTillNow -= 365;
    }
    currYear += 1;
}

    // Updating extradays because it
    // will give days till previous day
    // and we have include current day
    extraDays = daysTillNow + 1;

    if (currYear % 400 == 0 ||
       (currYear % 4 == 0 &&
        currYear % 100 != 0))
        flag = 1;

    // Calculating MONTH and DATE
    month = 0; index = 0;
    if (flag == 1)
    {
        while (true)
        {
            if (index == 1)
            {
                if (extraDays - 29 < 0)
                    break;

                month += 1;
                extraDays -= 29;
            }
            else
            {
                if (extraDays -
                    daysOfMonth[index] < 0)
                {
                    break;
                }
                month += 1;
                extraDays -= daysOfMonth[index];
            }
            index += 1;
        }
    }
    else
    {
        while (true)
        {
            if (extraDays - daysOfMonth[index] < 0)
            {
                break;
            }
            month += 1;
            extraDays -= daysOfMonth[index];
            index += 1;
        }
    }

    // Current Month
    if (extraDays > 0)
    {
        month += 1;
        date = extraDays;
    }
    else
    {
        if (month == 2 && flag == 1)
            date = 29;
        else
        {
            date = daysOfMonth[month - 1];
        }
    }

    // Calculating HH:MM:YYYY
    hours = parseInt(extraTime / 3600, 10);
    minutes = parseInt((extraTime % 3600) / 60, 10);
    secondss = parseInt((extraTime % 3600) % 60, 10);

    ans += date.toString();
    ans += "/";
    ans += month.toString();
    ans += "/";
    ans += currYear.toString();
    ans += " ";
    ans += hours.toString();
    ans += ":";
    ans += minutes.toString();
    ans += ":";
    ans += secondss.toString();

    // Return the time
    return ans;
}

