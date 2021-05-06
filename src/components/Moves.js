import '../css/App.css';
import React from 'react';

function Moves({selected}) {
  return (
    <>
    {selected.moves.length !== 0?
    <>
    <h3 className={selected.types[0].type.name} id="profile-title4">Moves</h3> 
    <div id="pokeInfo-moves">
        {selected.moves.map((move,key) => (
        <div key={key}>
            <h4 className="test">{move.move.name}</h4>
            <span>Learning Method: {move.version_group_details[move.version_group_details.length - 1].move_learn_method.name}</span>
            {move.version_group_details[move.version_group_details.length - 1].move_learn_method.name === "level-up"?
            <span>Level Learned: {move.version_group_details[move.version_group_details.length - 1].level_learned_at}</span>
            : null}
        </div>
        ))}
    </div>
    </>
    : null}
    </>
  );
}

export default Moves;