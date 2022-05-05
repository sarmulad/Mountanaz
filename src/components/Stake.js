import React from 'react'
import './Stake.css'
import Stake from '../assets/Staking.png'
import Yield from '../assets/Yield.png'
import Swap from '../assets/Exchange .png'
import { BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom'


const stake = () => {
    return (
        <div className='stake'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Stake} alt='staking-img' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Stake your tokens</h2>
                    <p>You may earn interest and the chance to vote on critical issues affecting the ecosystem by owning and staking the Mountanaz token. The staking protocol creates liquidity pools, with pools of staked earning incentives divided proportionally among liquidity suppliers or stakers.</p>
                    <div className='btn-container'>
                    <Link to='/Benefit' ><button className='btn view'>Learn More <BsChevronRight/> </button></Link>
                    </div>
                </div>

            </div>

            <div className='container'>
                {/* right */}
                <div className='right'>
                    <h2>Participate in yield farming!</h2>
                    <p>With this service, users will have access to enhanced liquidity, clear interest rates, and lowers speculative risks. It also simplifies the loan process without the need for a counterparty</p>
                    <div className='btn-container'>
                    <Link to='/Benefit' > <button className='btn view'>Learn More <BsChevronRight/></button></Link>
                    </div>
                </div>

                {/* left */}
                <div className='left order'>
                    <img src={Yield} alt='staking-img' />
                </div>

            </div>

            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Swap} alt='staking-img' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Swap other digital tokens at no cost at all!</h2>
                    <p>Mountanaz identifies the best possible routes to fulfill trades across blockchain ecosystems. Thereby easing the burden for existing blockchain users and removing some barriers to entry for newbies.</p>
                    <div className='btn-container'>
                       <Link to='/Benefit' ><button className='btn view'>Learn More <BsChevronRight/></button></Link>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default stake
