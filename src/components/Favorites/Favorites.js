
import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

function Favorites(props) {

  const { myFavorites } = props;

  return (
    <div>
      {myFavorites.map((character) => (
        <Card key={character.id} {...character} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites
  };
};

export default connect(mapStateToProps)(Favorites);