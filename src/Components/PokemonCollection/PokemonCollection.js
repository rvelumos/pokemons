import React, {useEffect, useState} from 'react';
import './PokemonCollection.css';
import axios from "axios";
import PokemonItems from "./PokemonItems/PokemonItems";
import Loader from "../Loader/Loader";

const PokemonCollection = (props) => {

    const [error, setError] = useState(false);
    const [pokemonItems, setPokemonItems] = useState("");
    const [loading, toggleLoading] = useState(false);

    const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20')
    const [nextUrl, setNextUrl] = useState('')
    const [previousUrl, setPreviousUrl] = useState('')

    function handleNextButton() {
        setCurrentUrl(nextUrl);
        console.log(currentUrl);
    }
    function handlePreviousButton(){
        setCurrentUrl(previousUrl);
    }

    useEffect(() => {
        async function getPokemon() {

            setError(false);
            toggleLoading(true);

            //setCurrentUrl(url);

            console.log(currentUrl);
            try {
                const response = await axios.get(currentUrl);
                setPokemonItems(response.data.results);
                setNextUrl(response.data.next)
                setPreviousUrl(response.data.previous)

                toggleLoading(false);
            } catch (e) {
                console.error(e);
                setError(e);
                toggleLoading(false);
            }
        }

        getPokemon();
    }, [currentUrl, props])

    return(
        <>
            <div className="PokemonOverview">
                {loading ? <Loader /> : <PokemonItems pokemon_items={pokemonItems} currentUrl={currentUrl} previousUrl={previousUrl} nextUrl={nextUrl} />}
                {error && <p>{error}</p> }
            </div>
            <div className="buttonContainer">
                <div>
                    <button onClick={handlePreviousButton}>Vorige</button>
                    <button onClick={handleNextButton}>Volgende</button>
                </div>
            </div>
        </>
    )
}

export default PokemonCollection;