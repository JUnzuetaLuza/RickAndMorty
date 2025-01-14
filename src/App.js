import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';

function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)
   const location = useLocation();
   const navigate = useNavigate();
   const EMAIL = "ft38b@gmail.com";
   const PASSWORD = "326159487";

   async function login(userData) {
      try{
         if (userData.password === PASSWORD && userData.email === EMAIL) {
            setAccess(true);
            await navigate('/home');
         }
      } catch (error) {
         console.log(new Error(error))
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   async function onSearch(id) {
      try {
         const response = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         if (response.data.name) {
            setCharacters((oldChars) => [...oldChars, response.data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      } catch (error) {
         console.log(new Error(error))
      }
   }

   const onClose = id => {
      setCharacters(characters.filter(character => character.id !== id))
   }

   return (
      <div className='App'>
         {location.pathname!=='/'?<Nav onSearch={onSearch}/>:null}
         <Routes>
            <Route path='/' element={ <Form login={login}/> }/>
            <Route path='/home' element={ <Cards onClose={onClose} characters={characters}/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/favorites' element={ <Favorites/> }/>
            <Route path='/detail/:id' element={ <Detail/> }/>
         </Routes>
      </div>
   );
}

export default App;
