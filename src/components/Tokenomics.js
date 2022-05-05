import React from 'react'
import './Tokenomics.css'
import tokenomics1 from '../assets/Group 3.svg'
import tokenomics2 from '../assets/Group 4.svg'



const Tokenomics = () => {
    return (
        <div className='Tokenomics'>
            <div className='container'>
                {/* Left Side */}
                <div className='left'>
                    <h2>Tokenomics</h2>
                    <p>The total supply of the Mountanaz token is 50M as it is distributed as follows: </p>
                    
                </div>

                <div className='tokenomics-img'>
                     <img src={tokenomics1}  alt='tokenomics-img' />
                     <img src={tokenomics2}  alt='tokenomics-img' />
                    
                </div>
            </div>
        </div>
    )
}

export default Tokenomics
