import React, { Component } from 'react'
import './carta.css'
import FlipCard from "react-flipcard-2"

class Carta extends Component {

    render() {
        return (
            <div className="carta">
               <FlipCard>
               <div className="portada">

                </div>
                <div className="contenido">
                    <i className={`fa ${this.props.icono} fa-5x`}></i>
                </div>
               </FlipCard>
            </div>
        )
    }
}

export default Carta