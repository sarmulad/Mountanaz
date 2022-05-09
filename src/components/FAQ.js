import React from "react";
import Accordion from "../components/Accordion";
import './FAQ.css'
import coingecko from '../assets/coingecko.svg'
import coinmarketcap from '../assets/coinmarketcap.svg'
import pancakeswap from '../assets/pancakeswap.svg'
import gecko from '../assets/Vectorgecko.svg'
import cmc from '../assets/cmc.svg'
import pancake from '../assets/pancake.svg'

const FAQ = () => {
    return (
        <div className="FAQ">
            <div className="container">
                <h1>Frequently Asked Questions</h1>
            <Accordion
                title="What is Mountanaz?"
                content="Mountanaz is a multi-chain platform that acts as a bridge that links current blockchain ecosystems to overcome the constraints of previous decentralized technologies."
             />
              <Accordion
                title="How does the multi-chain system work in Mountanaz?"
                content="Mountanaz is a multi-chain platform that acts as a bridge that links current blockchain ecosystems to overcome the constraints of previous decentralized technologies."
             />
              <Accordion
                title="How will scams be prevented in the ecosystem? "
                content="Smart contracts are an essential aspect of the blockchain ecosystem, and they are used extensively. A smart contract is a programming technique that uses digital technology to facilitate, verify, or enforce an agreement. Smart contracts allow for the execution of secure transactions without the involvement of a third party."
             />
              <Accordion
                title="How does Staking Work?"
                content="Staking on the Mountanaz entails locking your tokens for a fixed amount of time on the Protocol."
             />
              <Accordion
                title="How does Yield Farming Work?"
                content="When you make your crypto accessible on the ecosystem, the system automatically finds who needs to borrow the tokens. You get to earn passive income in the form of interest and a share of the revenue made."
             />
              <Accordion
                title="How do I know I will get my tokens back from the borrower?"
                content="Just like you cannot get a loan from a traditional financial system without collateral, the system does not just grant or borrow your assets to just anybody. "
             />
            <div className="faq-icons">
                <div className='icons-mobile'>
                    <img src={gecko} width='40px' alt='logo'  /> 
                    <img src={cmc} width='40px' alt='logo'  />
                    <img src={pancake} width='40px' alt='logo'  />    
                </div>

                <div className='icons-desktop'>
                    <img src={coingecko} width='200px' alt='logo'  /> 
                    <img src={coinmarketcap} width='200px' alt='logo'  />
                    <img src={pancakeswap} width='200px' alt='logo'  />    
                </div>

              </div>
            </div>
        </div>
    )
}

export default FAQ
