import React from 'react'
import './Hero.css'
import binance from '../assets/binance.svg'
import polygon from '../assets/polygonlogo.svg'
import solana from '../assets/solana.svg'
import eth from '../assets/eth.svg'
import cardano from '../assets/cardano.svg'
import { BsChevronRight } from "react-icons/bs";


import Navbar from './Navbar'

const Hero = () => {
    return (
        <div className='hero'>
          <Navbar />
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                    <h1>Experience the Power of a <span className='grey'>Multi-Chain Token</span></h1>
                    <p>Mountanaz is a community-governed DeFi platform focused on Staking, Lending, Governance, and Decentralized</p>
                    <div className='button-container'>
                        <button className='btn buy'>Buy $MON</button>
                        <button className='btn view'>View Charts <BsChevronRight/> </button>
                    </div>
                </div>
            </div>
            <div className='icons'>
                 <img src={binance} alt='logo'  className='logo'/>
                 <img src={polygon} alt='logo'  className='logo'/>    
                 <img src={solana} alt='logo'  className='logo'/>    
                 <img src={eth} alt='logo'  className='logo'/>    
                 <img src={cardano} alt='logo'  className='logo'/>    
            </div>
            
            <div className='text'>
                <p>Don't miss out on your chance to learn, earn and borrow; let your money work for you.</p>
            </div>
        </div>
    )
}

export default Hero
