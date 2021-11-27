import './Menu.css'
import React from "react"
import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li> 
                    <Link to="/">inicio</Link>
                </li>
                <li> 
                    <Link to="/UseState">sobre</Link>
                </li>
                <li> 
                    <Link to="/UseEffect">detalhes</Link>
                </li>                                
                <li> 
                    <Link to="/UseContext">Opnião sobre o jogo</Link>
                </li>
                                           
            </ul>
        </nav>
    </aside>
)
export default Menu
