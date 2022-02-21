import React from 'react'; 
import { Link } from "react-router-dom";
//images
import cart from '../images/cart.svg';
import logo from '../images/logo.svg'; 
const Header = () => {


    return (
        <>
        <div className='header container'>
        <div className='col-left'>
            <Link to='/'><img src={logo} alt='logo' className="logo"/> </Link>
            
        <p>TAKOY TIPICHNY</p>
        </div>
         
        <div className='col-right'>
        <p className='menu'>SHOP / ABOUT / CONTACT</p>
        <img src={cart} alt='cart' className="icon-img"/>
        </div>
        
        </div>
        </>

    )
};


export default Header; 