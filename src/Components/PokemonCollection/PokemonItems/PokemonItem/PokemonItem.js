import React from 'react';

const PokemonItem = (props) => {

    const {name} = props;
    let url="/pokemon/" + name + "/";

    return (
        <div key={name} className="Product">
            <a href={url}><h3 className="pokemonName">{name}</h3></a>
        </div>
    )
}

export default PokemonItem;