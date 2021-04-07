import React from 'react';
import PokemonItemDetails from "./PokemonItem/PokemonItemDetails/PokemonItemDetails";

const PokemonItems = ({pokemon_items}) => {

    const getPokemonItems = () => {
        if(pokemon_items.length  > 0) {
            return (
                pokemon_items.map((pokemon_item) => {
                        return(
                            <PokemonItemDetails name={pokemon_item.name} />
                        )
                })
            )
        }
    }

    return(
        <>
            {getPokemonItems()}
        </>
    )
}

export default PokemonItems;