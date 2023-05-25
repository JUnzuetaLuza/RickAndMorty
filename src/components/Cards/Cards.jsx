import Card from '../Card/Card.jsx';
import style from './Cards.module.css'


export default function Cards(props) {
   const {characters} = props;
   return (
      <div className={style.cardsAll}>
         {
            characters.map((character,index) => {
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
                  onClose = {() => props.onClose(character.id)}
               />
               </div>
               )
            })
         }
      </div>
   )
}
