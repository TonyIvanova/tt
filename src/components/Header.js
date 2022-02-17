import React from 'react'; 
//images
import cart from '../images/cart.svg';
import logo from '../images/logo.svg'; 
const Header = () => {


    return (
        <>
        <div className='header container'>
        <div className='col-left'>
        <img src={logo} alt='logo' className="logo"/>
        <p>TAKOY TIPICHNY</p>
        </div>
         
        <div className='col-right'>
        <p className='menu'>HOME / SHOP / ABOUT / CONTACT</p>
        <img src={cart} alt='cart' className="icon-img"/>
        </div>
        
        </div>
        </>

    )
};


export default Header; 