import React from 'react'; 

//images

const ButtonNoLink= ({text, classCSS, ...rootDOMAttributes}) => {
let arr = text.split(' '); 

    return (
        <>
        
        <button className={classCSS} {...rootDOMAttributes}>
       
        
     <p>{arr[0]}</p>
     <h2>{arr[1]}</h2>

        
        </button>
        
        </>

    )
};


export default ButtonNoLink; 