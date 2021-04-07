import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import "./PokemonItemDetails.css";
import axios from "axios";

const PokemonItemDetails = (props) => {

    const [pokemonItemDetails, setPokemonItemDetails] = useState("");
    const [loading, toggleLoading] = useState(false);

    let {name} = useParams();

    if(name===undefined) {
        name=props.name;
    }

    useEffect(() => {
        async function getPokemonStats() {
            toggleLoading(true);

            let url = `https://pokeapi.co/api/v2/pokemon/${name}`;

            try {
                const response = await axios.get(url);

                setPokemonItemDetails(response.data);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                toggleLoading(false);
            }
        }

        getPokemonStats();
    }, [name])

    function PokemonOutput() {

        return (
            <div key={name} className="PokemonDetails">
                <h3 className="pokemonName">{pokemonItemDetails.name}</h3>
                {/*<img src={pokemonItemDetails.sprites.front_default} alt='' />*/}
                <p><b>Weight</b> {pokemonItemDetails.weight}</p>
                <p>
                </p>
                {/*<p>{pokemonItemDetails.moves.length}</p>*/}
            </div>
        )
    }

    return (

        <>
            { loading ? null : <PokemonOutput />}
        </>
    )
}

export default PokemonItemDetails;