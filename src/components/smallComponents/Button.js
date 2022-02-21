import React from 'react'; 
import { Link } from "react-router-dom";
//images

const Button = ({text, classCSS, link, linkStyle, ...rootDOMAttributes}) => {


    return (
        <>
         <Link to={link} className={linkStyle}>
        <button className={classCSS} {...rootDOMAttributes}>
       
        
     <h2>{text}</h2>
    

        
        </button>
        </Link>
        </>

    )
};


export default Button; 