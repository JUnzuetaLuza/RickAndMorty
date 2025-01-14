import style from './Favorites.module.css'
import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

function Favorites({ myFavorites, onClose}) {

  return (
    <div className={style.cardsAll}>
      {myFavorites &&
        myFavorites.map((character, index) => {
          return (
            <div key={index} className={style.cardNew}>
            <Card
              id = {character.id}
              name = {character.name}
              status = {character.status}
              species = {character.species}
              gender = {character.gender}
              origin = {character.origin}
              image = {character.image}
              onClose = {onClose}
              key = {index}
            />
            </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);