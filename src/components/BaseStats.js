import '../css/App.css';
import React from 'react';

function BaseStats({selected}) {
  return (
    <div id="baseStat">
      <h3 className={selected.types[0].type.name}>Base Stats</h3>
      {selected.stats.map( (stat,key) => (
      <div id="baseStatDiv" key={key}>
        <span>{stat.stat.name.toUpperCase()}</span>
        <div>
          <span 
          id="baseStatBar" 
          className={selected.types[0].type.name} 
          style={{width:`${(stat.base_stat/255)*100}%`}}>
              {stat.base_stat}
          </span>{/*Max 255 */}
        </div>
      </div>
      ))}
    </div>
  );
}

export default BaseStats;