import bob from "../assets/1.png"
import v from "../assets/30.png"
import deep from "../assets/11.png"
import six from "../assets/12.png"
import partner1Logo from "../assets/BOB_LOGO.png"
import icecream from "../assets/icecreamLogo.png"

export const teamConfig =[
    {id:1 , name : "BOB" , designation:"Founder & CTO", desc:"Web3 Dev with a Vision to Serve the Ecosystem and Grow Along.", link:"", picture: bob},
    {id:2 , name : "S.Agarwal" , designation:"Compliances", desc:"CA with magic-hand in finances & handles compliances.", link:"", picture: six},
    {id:3 , name : "Deep" , designation:"Graphics Lead", desc:"Funny & Obsessed Artist with an eye for details and a punch in his Artworks.", link:"", picture: deep},
    {id:4 , name : "Vishnu" , designation:"COO", desc:"Ex-Yahoo R&D , Co-Operate with founder & team to plan the bigger picture.", link:"", picture: v},
]

export const partnerInfo =[
    {logo:partner1Logo,link:"https://gobob.xyz"},
    {logo:icecream ,link:"https://icecreamswap.com"}
]

export const supportedList={
    eth:{name:"ETHEREUM" , ticker:"ETH", address:"0x4200000000000000000000000000000000000006", logo:null , decimals:18},
    weth:{name:"WRAPPED ETHER" , ticker:"WETH", address:"0x4200000000000000000000000000000000000006", logo:null , decimals:18},
    wbtc:{name:"WRAPPED BTC" , ticker:"WBTC", address:"0x03C7054BCB39f7b2e5B2c7AcB37583e32D70Cfa3", logo:null, decimals:8},
    usdt:{name:"USDT" , ticker:"USDT", address:"0x05D032ac25d322df992303dCa074EE7392C117b9", logo:null, decimals:6},
    usdc:{name:"USDC" , ticker:"USDC", address:"0xe75D0fB2C24A55cA1e3F96781a2bCC7bdba058F0", logo:null, decimals:6},
}

export const sectionText = [
    {
        sectionName :"intro",
        h1: "What is BOTS OF BITCOIN ?",
        p1: "BOTS OF BITCOIN is a Collection of 10k Unique Robotic PFPs and a NFT-FI + De-Fi Protocol on Bitcoin EVM Layer2 Ecosystems. The BOTS OF BITCOIN Collection is the Exclusive NFT Collection for BOTS OF BITCOIN Platform and $BOTS as the Ecosystem token , The platform is set to Incorporate NFT-FI and DE-FI on Bitcoin EVM Layer2 Ecosystems with the Vision to bring new uses to BTC besides being just a Store-Of-Value as well as to Re-Imagive uses of DLT for Trading Purposes. Powered by 'BitEVM' it aims to Fuse Bitcoin Value with Ethereum Utility.",
        h2: "What are BitVMs & Why is it BIG ?",
        h2a: [
            "BitEVMs are one of the Latest Innovations in the Crypto Space making it Possible for the EVM to be Brought over to Bitcoin. It opens up a whole paradigm of Utility to be Brought over to BITCOIN as a Scaling Factor to Bitcoin as well as to Unite the BITCOIN & EVM Ecosystems.",
            "With BitVMs, it will be possible for De-Fi , NFTs , and Literally everything that makes the Ethereum Ecosystem Vibrant would be compatible with Bitcoin through these L2s and would pave way to new Innovations down the road."
        ]
    },
    {
        h1:"WHAT IS BOB (Build on Bitcoin) ?",
        p1:"BOB (Build on Bitcoin) is a first-of-its-kind hybrid Layer-2 powered by the two largest blockchain ecosystems, Bitcoin and Ethereum. BOB is backed by Castle Island Ventures, Coinbase Ventures Mechanism Ventures, Bankless Ventures, and other high-profile VCs and is positioned to become the most secure and accessible Layer-2 for builders and users.",
        h2:"What is SPICE ?",
        p2:"'Spice' is the native ('Point') system of the BOB network, primarily earned by contributing to the network's Total Value Locked (TVL). It's designed to incentivize participation through a referral bonus system, rewarding users for expanding the network's reach.",
        h3:"BOTS OF BITCOIN <> BOB FUSION",
        p3:"As Fusion Partners Users who Interact with BOTS OF BITCOIN's PFP Mints , Lottery Pools and Rampage Event Tasks are eligible to Earn BONUS SPICE along with RP (on certain activities). RP and SPICE is Distributed Actively on any given Interactions. More Details will be announced soon , Stay Tuned !"
    },
    {
        sectionName : "utility",
        h1:"BOTS OF BITCOIN PFP UTILITY & BENIFITS :",
        p1: "The BOTS OF BITCOIN PFP Collection is the Exclusive NFT Collection for BOTS OF BITCOIN Ecosystem and Enjoys a Range of Benifits for Both Holders and OG Minters.",
        h2:"Holder Utility & Benifits :", 
        h2a:[
                "Governance - Along with $BOTS Serving as way for Community Governance of the Platform the BOB PFP Holders also Have a Say in the Decision Making Process.",
                "Exclusive Pass - The BOB Collection is also an Exclusive Pass that gives its holder priority access to  all Services , Products &  Events by Bots Of Bitcoin.",
                "Discounts and Bonuses - BOB Collection holders also enjoy many Discounts on Platform Service Fees and Bonuses on many Events and Products in the Ecosystem.",
                "Platform Revenue Sharing - BOB Collection holders are eligible to earn upto 30% of Platform Revenue through Staking their pfps.",
                "Token Incentives - Upto a Total of 2% Supply Reserved for NFT Holders.",
                "More Added as we Grow & Through Community approvals."
        ],
        h3:"Genesis Minter Benifits :",
        h3a:[
            "6.9% Royalties Forever : All addresses which participate in the Genesis Mint and mints a PFP are eligible to Earn 6.9% Royalty from secondary sales of their minted PFPs Forever!",
            "Early Supporter : Will be counted as an Early Supporter and recieve many benifits in the future.",
            "SPICE Bonus : Minters would be eligible to claim SPICE points based on Minted Count & Referals done."
        ],
    },
    {
        sectionName:"oilpots",
        h1: "OIL POTS (LOTTERY)",
        p1:"Oil Pots are a Simple Raffles where there are Pots (or Rounds ) on which each Pot consists of Varying Capacity for Oil Drops (or Tickets) and Users can Pour one drop at a time into the Current Pot. Each Drop has a Unique Bytes12 Id and an Owner value representing it making each Drop unique Tickets.",
        h2: "How It Works ?",
        p2:"Each User can pour upto max 10 drops into a Pot , each Oil Drop costing from 1$ - 100$. When the Pot is filled , i.e. reaches 500 Drops 10 Random Drops(Tickets) are selected as Winners and the 85% of the Pot is equally distributed among the Owners of the 10 Winning Drops. After this The next Pot (Round) gets activated and User can Claim his Winning Shares. The Rest 15% Of the Pot goes to Platform Revenue.",
        h2a:[
            "Rounds of the Lottery are called'Pots' & Tickers as Oil Drops.",
            "Each Pot can Hold Varying Quantities of Drops.",
            "Drops are unique Tickets representing entry to the Pot for the User.",
            "There can be Varying Number of Winners depending on Pot type.",
            "The System of Starting Ticket Buy , Starting Draw and Transfer of Win Amounts are all Automatic and Admin have no control over funds except fee accrued.",
            "Till TGE 50% of All Fee Generated through Raffles would be Reserved towards Strengthening Token Liquidity.",
        ]
    },
    {
        sectionName : "vaults",
        h1: "Tokenized Vaults",
        p1: "Tokenized ERC-4626 Vaults where User can stake their LSTs, ETH , BTC or Stablecoins to earn Yeild on their Stake. The Yeild will be generated using various strategies such as Trading Bots , LP , Staking , or Hybrid etc. There will be a Selection of Vaults using Different Strategies for Yeild , where user can Stake or Restake their Assets and Get Yeild on top.",
        h2: "Examples of Vaults & Strategies :",
        h2a: [
            "Trading Bot Vault (Auto-Market Making) : Accrues Profits from Deposited Pool of the Vault in a Set Pair by using Market Making Strategy.",
            "Restaking Vault (LP farming LSTs + AMM ) : Utilizes a Dual Strategy of Liquidity Farming of the Staked LSTs (stEth or stBtc for eg) + Trading preset LST pairs with AMM strategy.",
            "Lending/Borrowing : Utilizes Lending/Borrowing to accrue Yield on Staked assets in the Vault.",
            "New Vaults added on Future Community Voted Strategies"
        ],
    },
    {
        sectionName : "bots",
        h1: "BOB BOT FOR TELEGRAM",
        p1: "A Full Suite Trading & Web3 Tooling Utilities through Telegram. Users can Securely Trade & Manage their Web3 Portfolios on Bitcoin l2s seamlessly without needing to exit Telegram Interface. With the goal to provide all sorts of Automations related to Web3 via the Popular Chat app , BOB BOT will make sure you never have to leave the Popular Chat app to Interact with Web3.",
        h2: "Planned Features of BOB BOT :",
        h2a:[
            "Setup & Manage Web3 Wallets through TG , Powered by Account Abstraction , offers a Secure way to Interact with web3 from Telegram Itself.",
            "Trade Various Crypto with Manual & Automated Strategies directly through Telegram.",
            "Setup Sniper to any Upcoming Tokens and Never miss the Best Entry.",
            "Setup Automated Payments to your Employees or Loved Ones and Never forget timely Payments.",
            "Additional Tooling such as LP Mannagement , Vesting , and Token Minting Services."
        ]
    },
    {
        sectionName: "tokenomics",
        h1:"TOKENOMICS",
        p1: "The BOTS OF BITCOIN Ecosystem Have two Primary Tokens , they are :",
        h1a:[
            "BOTS OF BITCOIN PFPs - BOBs",
            "$BOTS ERC20 TOKEN"
        ],
        h2:"Distribution of PFPs",
        h2a : [
            "Total Supply : 10,000 BOBs",
            "Mint Price : TBD",
            "Public Mint : 8000 BOBs"
        ],
        h3: "$BOTS is the Primary token within the Platform with a Max Supply of 690 Million, although it is not used for Fees it serves the following utilities :",
        h3a :[
            "Governance : Along with the PFPs , $BOTS will enable that all users who missed the PFPs have the option to participate in Governance of the BOTS OF BITCOIN Platform.",
            "Reward Token : $BOTS also acts as the Reward token for the Platform where users can Stake their PFPs to Earn Platform Revenue in $BOTS Token. Users can also Stake $BOTS itself to earn 20% of all Platform Revenue as Yield."
        ],
        h4: "Total Supply : 690,000,000 (690 Million) $BOTS",
        p5 :"Upto a total of 50% of all Revenue Generated in the Plaform (in BTC) is used to Buy-Back $BOTS and Distributed back to Ecosystem Contributors such as Stakers. Ecosystem Allocation is Utilized for Liquidity , Partnerships , Future Events and it's Utilization will be decided by Community through Voting."
    },
]

const tokenomics = {
    sectionName: "tokenomics",
    h1:"TOKENOMICS",
    p1: "The BOTS OF BITCOIN Ecosystem Have two Primary Tokens , they are :",
    h1a:[
        "BOTS OF BITCOIN PFPs - BOBs",
        "$BOTS ERC20 TOKEN"
    ],
    h2:"Distribution of PFPs",
    h2a : [
        "Total Supply : 10,000 BOBs",
        "Mint Price : TBD",
        "Public Mint : 8000 BOBs"
    ],
    h3: "$BOTS is the Primary token within the Platform with a Max Supply of 690 Million, although it is not used for Fees it serves the following utilities :",
    h3a :[
        "Governance : Along with the PFPs , $BOTS will enable that all users who missed the PFPs have the option to participate in Governance of the BOTS OF BITCOIN Platform.",
        "Reward Token : $BOTS also acts as the Reward token for the Platform where users can Stake their PFPs to Earn Platform Revenue in $BOTS Token. Users can also Stake $BOTS itself to earn 20% of all Platform Revenue as Yield."
    ],
    h4: "Total Supply : 690,000,000 (690 Million) $BOTS",
    p4 :"Upto a total of 50% of all Revenue Generated in the Plaform (in BTC) is used to Buy-Back $BOTS and Distributed back to Ecosystem Contributors such as Stakers. Ecosystem Allocation is Utilized for Liquidity , Partnerships , Future Events and it's Utilization will be decided by Community through Voting."
}

export const faqlist= [
    {question:"WHEN IS THE MINT ?" , answer:"Mint Date & Time will be announced very soon on our Socials. Be sure to Subscribe to them and turn on Notifications!!"},
    {question:"WHAT IS THE TOTAL SUPPLY OF BOB PFPs ?" , answer:"BOTS OF BITCOIN (BOB) PFPs are set to have a Max Supply of 10k Units."},
    {question:"IS BOTS OF BITCOIN - BOB & BUILD ON BITCOIN SAME ?" , answer:"NO BOTH THE ABOVE 'BOBS' ARE SEPERATE ENTITIES, FORMER BEING A PLATOFRM ON THE LATTER AND ARE NOT AFFILIATED TO ONE ANOTHER."},
    {question:"WILL THERE BE AN ECOSYSTEM TOKEN ?" , answer:"Yes , BOTS OF BITCOIN will have $BOTS as the ECOSYSTEM TOKEN."},
    {question:"WHAT IS RP ?" , answer:"RP is the unique 'Point' Identifier for BOTS OF BITCOIN Rampage Events and is a way to accurately record and reward user contributions later on. Post TGE RP will be made convertible to $BOTS for a Specific Time window for Eligible 'Human' Users."},
    {question:"WHAT IS RAMPAGE ?" , answer:"RAMPAGE is the Genesis Event for BOTS OF BITCOIN Marking its Launch followed by Various Community Centric Events and Campaigns."},
    {question:"IS IT JUST A USELESS PFP PROJECT ?" , answer:"NO ! , We are not only a PFP Project but our Long term Goals revolve around utilizing the EVM on BTCOIN L2s for Various Community Approved NFT-FI , DEFI & Automation (Bot) Features."},
]

export const banners = [
    {a:"HAVEN'T JOINED", b:"BOB FUSION YET ?" , inviteLink: "http://fusion.gobob.xyz/?refCode=lqh3jh"}
]