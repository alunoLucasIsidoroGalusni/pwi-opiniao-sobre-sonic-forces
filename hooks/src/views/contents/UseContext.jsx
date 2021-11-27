import './UseContext.css'
import React, { useContext } from "react"

import { AppContexto } from '../../data/Store.jsx'

const UseContext = props => {


    return (
        <div>
            <div className="titulo">
                <h1>Sobre</h1>
            </div>
            <h2>É um projeto sobre um aplicativo
                 em que fãs do jogo sonic forces querem saber a opiniao das pessoas sobre a gameplay 
                 e a historia do jogo</h2>
                 <h3>Lucas isidoro Galusni</h3>

            
        </div>
    )
}
export default UseContext