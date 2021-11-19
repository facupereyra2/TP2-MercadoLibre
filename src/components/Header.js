import React, {useState} from "react";
import logo from '../assets/mercado-libre-logo.png'
import lupa from '../assets/lupa.png'
import '../styles/Header.css'
import { Link } from 'react-router-dom'

const Header = ({setSearch}) => {

     //State del input
     const [inputValue, setInputValue] = useState('')

     const handleInputChange = (e) => {
         setInputValue(e.target.value)
     }
 
     // funcion del submit cuando haga enter del Form
     const handleSubmit = (e) => {
         e.preventDefault();
         
         if(inputValue.trim().length > 1) {
             setSearch(inputValue)
             setInputValue('')
         }
     }

    return (
        <header className="header">
            <div className="header-main">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                </div>


                <form onSubmit={handleSubmit}>
                    <div className='nav'>
                        <input 
                            type="text" 
                            placeholder = "Buscar productos, marcas y más..."
                            name="busqueda"
                            id="busqueda"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button type="submit">
                            <img src={lupa} alt="lupa"/>
                        </button>
                    </div>
                </form>
            </div>
        </header>
     );
};

export default Header;