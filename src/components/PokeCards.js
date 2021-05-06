import '../css/App.css';
import React from 'react';

function PokeCards({pokedex, handleSelected}) {
  return (
    <>
      {pokedex.map((pokemon,key) => (
        <div 
        className={`pokeCard ${pokemon.types[0].type.name}-card`} 
        key={key}
        onClick={() => handleSelected(pokemon)}>
          <img 
            className='pokeImg' 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} 
            alt={`Pic of ${pokemon.name}`}
          />

          <span>#{pokemon.id.toString().padStart(3, "0")}</span>
          <span>{pokemon.name}</span>

          <div className="type">
            {pokemon.types.map((type,key) => (
              <span key={key} className={type.type.name}>{type.type.name}</span>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default PokeCards;