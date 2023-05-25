import style from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar(props) {

   const [character, setCharacter] = useState("");

   const handleChange = e => {
      const {value} = e.target;
      setCharacter(value);
   }

   return (
      <div className={style.container}>
         <input 
         type='search' 
         name='search' 
         id='search' 
         onChange={handleChange} 
         placeholder="Ingresa un ID"/>
         <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
