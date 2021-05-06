import '../css/App.css';
import React from 'react';

function Profile({selected, speciesHabitat, speciesDesc}) {
  return (
    <div id="pokeInfo-profile">
        <div id="profile-type">
            {selected.types.map( (type,key) => (
            <span key={key} className={type.type.name}>{type.type.name}</span>
            ))}
        </div>

        <div id="profile-desc">
            {Object.keys(speciesDesc).length !== 0? 
            speciesDesc.flavor_text.charAt(0).toUpperCase()+speciesDesc.flavor_text.slice(1):
            null}
        </div>

        <div>
          <h3 className={selected.types[0].type.name} id="profile-title">Abilities</h3>
          <div id="profile-abilities">
          {selected.abilities.map( (ab,key) => (
            <span key={key}>{ab.ability.name} {ab.is_hidden? "(Hidden)": null}</span>
          ))}
          </div>
        </div>

        <div>
        <h3 className={selected.types[0].type.name} id="profile-title2">Profile</h3>
        <div id="profile-attributes">
          <div>
            <span>Height: {(selected.height*3.937).toFixed(2)}"</span>
            <span>Weight: {(selected.weight/4.535).toFixed(2)} lbs</span>
          </div>
          {speciesHabitat !== null?
          <div>
            <span>Habitat: {Object.keys(speciesHabitat).length !== 0? speciesHabitat.name: null}</span>
          </div>
          :null}
        </div>
        </div>
    </div>
  );
}

export default Profile;