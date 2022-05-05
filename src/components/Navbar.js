import React, {useState} from 'react'
import logo from '../assets/logo.svg'
import Usflag from '../assets/US.svg'
import {FaBars, FaTimes} from 'react-icons/fa'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";


import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <div>
                    <img src={logo} width='200px' alt='logo'  className='logo'/>    
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>About</a>
                    </li>
                    <li>
                        <a href='/'>Roadmap</a>
                    </li>
                    <li>
                        <a href='/'>Tokenomics</a>
                    </li>
                    <li>
                        <a href='/'>Whitepaper</a>
                    </li>
                    <li>
                        <a href='/'>FAQ</a>
                    </li>
                    <li style={{display:'inline-flex', alignItems:'center', justifyContent:'start', gap:'5px'}}>
                        <div>
                        <img src={Usflag} alt='us flag' width='24px'/>
                        </div>
                        <a href='/'>Eng</a>
                        <AiFillCaretDown/>
                    </li>
                    <li>

                        <div className='btn-group wallet-btn'>
                            <button className='btn wallet-btn'>Connect<AiFillPlusCircle/></button>
                        </div>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes className='centreham' size={20} style={{color: 'white'}}/>) : (<FaBars size={24} style={{color: 'white'}} />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
