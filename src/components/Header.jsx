import React from 'react';
import './header.css'

const Header = (props)=>{
   return(
     
       <header>
           <div className="titulo">
             React Pareja
           </div>  

           <div>
            <button className="boton-reiniciar">
                Reiniciar
            </button>  
           </div>

            <div className="titulo">
                Intentos: 
            </div>
       </header>
   )
}

export default Header


