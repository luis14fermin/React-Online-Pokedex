import React from 'react';
import './css/App.css';
import {useState, useEffect} from 'react';
import PokeCards from './components/PokeCards';
import PokeInfo from './components/PokeInfo';
import Loading from './components/Loading';
import Search from './components/Search';

function App() {
  const [pokedex, setPokedex] = useState([]);
  const [input, setInput] = useState('');
  const [selected, setSelected] = useState({});
  const [visibility, setVisibility] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllPokemon = () => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")//898 for all
      .then(res => res.json())
      .then( data => {
        let results = data.results;
        let promisesArray = results.map( result => {
          return fetch(result.url).then(response => response.json());
        })
        return Promise.all(promisesArray);
      })
      .then(data => {
        setPokedex([...data]);
        setLoading(false);
      })
    }

    fetchAllPokemon()
  }, [pokedex])

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  }

  const handleSelected = (selectedCard) => {
    setSelected(selectedCard);
    setVisibility(!visibility);
  }

  const filteredPokedex = pokedex.filter( 
    pokemon => pokemon.name.includes(input) || pokemon.id.toString().padStart(3, "0").includes(input)
  );
  
  if(visibility){
    document.body.style.overflowY="hidden"
  } else{
    document.body.style.overflowY="auto"
    document.body.style.overflowX="hidden"
  }

  if(loading){
    return <Loading wrapper={'loading-app-wrapper'}/>
  }
  return (
    <>
    <h1 id='pokedex-title'>The Pokedex</h1>
    
    <Search handleChange={handleChange} visibility={visibility}/>

    <div id='wrapper' className={`slideOut-${visibility}`}>
      <PokeCards 
      pokedex={filteredPokedex}
      handleSelected={handleSelected}
      />
    </div>

    <PokeInfo 
    selected={selected}
    visibility={visibility}
    handleSelected={handleSelected}
    />
    </>
  );
}

export default App;
