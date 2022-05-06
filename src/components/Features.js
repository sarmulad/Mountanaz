import React from 'react'
import './Features.css'
import userIcon from '../assets/Icons/Simplified User Interface Icon.svg'
import Scaleability from '../assets/Icons/Scaleability Icon.svg'
import Decentralization from '../assets/Icons/Decentralization Icon.svg'
import Community from '../assets/Icons/Community Icon.svg'
import ReadMore from './ReadMore'

const Features = () => {
    return (
        <div className='features'>
            <h1>Our Features</h1>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={userIcon}  alt='Simplified User Interface Icon' />
                    <h2>Stake your tokens</h2>
                    <ReadMore text={'You may earn interest and the chance to vote on critical issues affecting the ecosystem by owning and staking the Mountanaz token. The staking protocol creates liquidity pools, with pools of staked earning incentives divided proportionally among liquidity suppliers or stakers.'} />
                </div>

                {/* right */}
                <div className='right'>
                    <img src={Scaleability}  alt='Scaleability Icon' />
                    <h2>Scalability</h2>
                    <ReadMore text={'Most existing DeFi projects hit a scaling roadblock they couldnt escape. Every transaction must be made public and recorded on the blockchain for blockchain technology to work. This restricts the number of transactions that may be completed at any one moment. Mountanaz is built on a blockchain technology that processes numerous transactions quickly'} />
                    <p></p>
                </div>

            </div>

            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Decentralization}  alt='Simplified User Interface Icon' />
                    <h2>Sustainability in Decentralization</h2>
                    <ReadMore text={'To adequately safeguard the wealth it hosts, the platform would be wholly decentralized both in the short and long term. The platform and the community as a whole are to be open and permissionless. There is a strong emphasis on decentralization and participation. Both technology and community governance methods should allow for practical iteration while avoiding long-term capture by any one party to ensure sustainability.'} />
                </div>

                {/* right */}
                <div className='right'>
                    <img src={Community}  alt='Simplified User Interface Icon' />
                    <h2>Large Global Community</h2>
                    <p>Join our large community of active users from all around the world! Connect and collaborate with various individuals from diverse knowledge and background. Our community welcomes everyone from all walks of life</p>
                </div>

            </div>

        </div>
    )
}

export default Features
