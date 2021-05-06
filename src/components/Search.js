import '../css/Search.css';
import React from 'react';

function Search({handleChange, visibility}) {
  return (
    <div id="search" className={`slideOut-${visibility}`}>
      <label className="field field_v1">
        <input 
        className="field__input" 
        placeholder="e.g. Pikachu or 025" 
        onChange={(e) => handleChange(e)}
        type='text'/>
        <span className="field__label-wrap">
          <span className="field__label">Search Pokemon</span>
        </span>
      </label>
    </div>
  );
}

export default Search;