import style from './Detail.module.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Detail(){

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={style.container}>
            <div className={style.totalDetail}>
                <div className={style.detailImg}>
                    <img src={character.image} alt={character.name}/>
                </div>
                <div className={style.detailInfo}>
                    <h1>{character.name}</h1>
                    <h2>Specie: {character.species}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Status: {character.status}</h2>
                    <h2>{character.origin ? `Origin: ${character.origin.name}` : ""}</h2>
                </div>
            </div>
            
            <Link to="/home">
            <button>Go Back</button>
            </Link>
        </div>
    );
}