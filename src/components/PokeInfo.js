import '../css/App.css';
import React from 'react';
import {useState, useEffect} from 'react';
import {FaRegArrowAltCircleLeft} from 'react-icons/fa';
import BaseStats from './BaseStats';
import PrevEvo from './PrevEvo';
import Profile from './Profile';
import Loading from './Loading';
import Moves from './Moves';

function PokeInfo({selected, visibility, handleSelected}) {

  const [speciesDesc, setSpeciesDesc] = useState({});
  const [speciesHabitat, setSpeciesHabitat] = useState({});
  const [speciesPrevEvo, setSpeciesPrevEvo] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchSpeciesInfo = () => {
      setLoading(true);
      fetch(selected.species.url)
      .then(res => res.json())
      .then(data => {
        const englishDesc = data.flavor_text_entries.filter( entry => {
          return entry.language.name === "en";
        })
        setSpeciesDesc(englishDesc[englishDesc.length - 1]);
        setSpeciesHabitat(data.habitat);
        setSpeciesPrevEvo(data.evolves_from_species);
        setLoading(false);
      })
    }
    if(Object.keys(selected).length !== 0){
      fetchSpeciesInfo()
    }
  }, [selected])

  return (
    <div id="pokeInfo-wrapper" className={Object.keys(selected).length !== 0? 
    `slideOut-${visibility} ${selected.types[0].type.name}`: `slideOut-${visibility}`}>

      <FaRegArrowAltCircleLeft id="returnArrow" className={Object.keys(selected).length !== 0? 
      `${selected.types[0].type.name}-card`: null} onClick={() => handleSelected(selected)}/>
      
      <div id="pokeInfo" className={Object.keys(selected).length !== 0? 
        `slideOut-${visibility} ${selected.types[0].type.name}-card`: `slideOut-${visibility}`}>

        {Object.keys(selected).length !== 0 && !loading?
        <>
        <div id="pokeInfo-Title">
          <h1>{selected.name.toUpperCase()}</h1>
          <h2>#{selected.id.toString().padStart(3, "0")}</h2>
        </div>

        <div id="pokeInfo-subWrapper">
          <div id="pokeInfo-imgAndstats">
            <img 
            className='pokeImg' 
            src={`https://pokeres.bastionbot.org/images/pokemon/${selected.id}.png`} 
            alt={`Pic of ${selected.name}`}
            />
            <BaseStats selected={selected}/>
          </div>

          <Profile 
          selected={selected} 
          speciesHabitat={speciesHabitat} 
          speciesDesc={speciesDesc}
          />
        </div>

        <PrevEvo 
        selected={selected} 
        speciesPrevEvo={speciesPrevEvo}
        />

        <Moves selected={selected}/>
        </>
        : 
        <Loading wrapper={'loading-pokeInfo-wrapper'}/> }
      </div>
    </div>
  );
}

export default PokeInfo;