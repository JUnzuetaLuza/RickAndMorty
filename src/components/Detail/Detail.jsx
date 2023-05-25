import style from './Detail.module.css'
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Detail(){

    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div>
            <Link to="/home">
            <button>Go Back</button>
            </Link>
            <div className={style.totalDetail}>
                <div className={style.detailImg}>
                    <img src={character.image} alt={character.name}/>
                </div>
                <div className={style.detailInfo}>
                    <h1>{character.name}</h1>
                    <h2>{character.species}</h2>
                    <h2>{character.gender}</h2>
                    <h2>{character.status}</h2>
                    <h2>{character.origin?.name}</h2>
                </div>
            </div>
        </div>
    );
}