import './UseState.css'
import React, { useState, useContext } from "react"

import { AppContexto } from '../../data/Store.jsx'

const UseState = props => {
    
    const {contextoNome, setContextoNome} = useContext(AppContexto)

    const [ OpiniaoHistoria, setOpiniaoHistoria ] = useState("")
    const [ OpiniaoGameplay, setOpiniaoGameplay ] = useState("")
    const [ mensagem, setMensagem ] = useState("")

    function alteraNomeContexto(nome){
        setContextoNome(nome)
    }

    return (
        <div>
            <div className="titulo">
                <h1>Olá</h1>
                <h2>Somos os desenvolvedore do jogo sonic forces, gostariamos de saber o que achou do jogo para sabermos o que deveriamos melhorar</h2>
            </div>

            <div className="conteudo">
                <input
                className="campo"
                type="text" value={OpiniaoHistoria}
                placeholder="o que achou da historia do jogo?"
                onChange={ e => setOpiniaoHistoria(e.target.value) }
                />
                <input 
                className="campo"
                type="text"
                value={OpiniaoGameplay}
                placeholder="O que achou da Gameplay?"
                onChange={ e => setOpiniaoGameplay(e.target.value) }
                />

                <button
                className="botao"
                onClick={ () => setMensagem('Obrigado pelo feedback!') }
                >Ok</button>

                <p className="mensagem">{mensagem}</p>

                
            </div>
        </div>
    )
}
export default UseState