import React ,{Component} from 'react'
import './tablero.css'
import Carta from './Carta'

class Tablero extends Component {

    render(){

       return(
           <div className="tablero">
               {
                   this.props.baraja.map((carta)=>(
                       <span key={carta}><Carta icono={carta.icono} /></span>
                   ))
               }
           </div>
       )   
   }

}

export default Tablero