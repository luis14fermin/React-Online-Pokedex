import '../css/App.css';
import React from 'react';
import pokeball from '../images/pokeball.png';

function Loading({wrapper}) {
  return (
    <div id={wrapper}>
      <img id="loading-img" src={pokeball} alt='Rotating Pokeball'/>
    </div>
  );
}

export default Loading;