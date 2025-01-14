import { useEffect, useState } from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';


export function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         props.removeFav(props.id);
      } else {
         setIsFav(true);
         props.addFav(props);
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);
   
   return (
      <div className={style.cardTotal}>
      {
         isFav ? (
         <button onClick={handleFavorite}>❤️</button>
         ) : (
         <button onClick={handleFavorite}>🤍</button>
         )
      }
      <button onClick={props.onClose} className={style.buttonClose}>X</button>
      <Link to={`/detail/${props.id}`}>
      <div className={style.card}>
      <div className={style.divCard}>
         <div className={style.cardFront}>
            <img src={props.image} alt='' />
            <h2 className={style.hName}>{props.name}</h2>
         </div>
         <div className={style.cardBack}></div>
      </div>
      </div>
      </Link>
      </div>
   );
}

export function mapStateToProps(state) {
   return {
      myFavorites: state.myFavorites,
   }
}

export function mapDispatchToProps(dispatch) {
  return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
