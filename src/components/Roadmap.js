import React from 'react'
import './Roadmap.css'




const Roadmap = () => {
    return (
        <div className='Roadmap'>
            <div className='container'>
                {/* Left Side */}
                <div className='center'>
                    <h2>Roadmap</h2>
                    <p className='center-p'>We are committed to scaling up our operations regularly. Therefore we have planned out a roadmap to keep us on our toes.</p>
                </div>

                <div className='phase-container'>
                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>Phase 1: <span style={{color:'white'}}>Creation of Website</span></h2>
                            <p>The first stage will focus on creating and launching the official website of Mountanaz. The website will serve as the ecosystem and marketplace where users and token holders can buy the native token, stake tokens, exchange tokens, etc.</p>

                        </div>
                    </div>

                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>Phase II:  <span style={{color:'white'}}>Release of Whitepaper</span></h2>
                             <p>This next stage will be primarily dedicated to releasing and publishing project documentation. This publication contains all the relevant information you need to know about the project.</p>
                        </div>
                    </div>

                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>Phase III:  <span style={{color:'white'}}>Private Sale</span></h2>
                            <p>Here, limited investors and interested parties can invest in the project.</p>
                        </div>
                    </div>
                  

                    <div className='phase'>
                        <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>Phase IV: <span style={{color:'white'}}>Public Sale</span></h2>
                            <p>The general public would have the option of purchasing the Mountanaz token.</p>
                        </div>
                    </div>
                    <div className='phase'>
                            <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>Phase V: <span style={{color:'white'}}>Exchange Listing</span></h2>
                            <p>The native tokens will be listed on major centralized and decentralized exchanges. </p>

                        </div>
                    </div>
                    <div className='phase'>
                         <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>Phase VI: <span style={{color:'white'}}>Staking and Liquidity Pool Protocol</span></h2>
                            <p>This phase will focus on releasing the staking and liquidity pool protocols.</p>

                        </div>
                    </div>
                    <div className='phase'>                       
                            <div className='circle'></div>
                        <div className='phase-item'>
                            <h2>Phase VII: <span style={{color:'white'}}>Yield Farming Launch</span></h2>
                            <p>At this stage, token holders can take advantage of the yield farming service.</p>

                        </div>
                    </div>
                    <div className='phase'>    
                        <div className='circle'></div>                         
                        <div className='phase-item'>
                            <h2>Phase VIII: <span style={{color:'white'}}>Marketing</span></h2>
                            <p>Intensive marketing will be carried out to create more awareness of the ecosystem. We will employ various marketing strategies, including engaging famous crypto influencers’, getting a listing on coinmarketcap, coingecko, etc. </p>
                        </div>
                    </div>
                    <div className='phase'>                             
                        <div className='circle'></div>
                        <div className='phase-item'  style={{marginBottom:'0px',padding:'0px', height:'0px'}}>
                            <h2>Phase X: <span style={{color:'white'}}>Multichain Launch</span></h2>
                        </div>
                    </div>

                </div>
            
            </div>
        </div>
    )
}

export default Roadmap
