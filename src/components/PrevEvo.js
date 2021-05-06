import '../css/App.css';
import React from 'react';

function PrevEvo({selected, speciesPrevEvo}) {
  return (
    <>
    {speciesPrevEvo !== null?
    <>
    <h3 className={selected.types[0].type.name} id="profile-title3">Evolves From</h3> 
    <div id="pokeInfo-prevEvo">
        <h4>{speciesPrevEvo.name}</h4>
        <img 
        className='pokeImg' 
        src={Object.keys(speciesPrevEvo).length !== 0? 
        `https://pokeres.bastionbot.org/images/pokemon/${speciesPrevEvo.url.substr(42,3).replace(/\//g, '')}.png`
        :null} 
        alt={`Pic of ${speciesPrevEvo.name}`}
        />
    </div>
    </>
    : null}
    </>
  );
}

export default PrevEvo;