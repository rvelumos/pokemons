import React from 'react';
import './App.css';
import PokemonCollection from "./Components/PokemonCollection/PokemonCollection";
import PokemonItemDetails from "./Components/PokemonCollection/PokemonItems/PokemonItem/PokemonItemDetails/PokemonItemDetails";

import {
    Switch,
    Route,
} from 'react-router-dom';


function App() {
  return (
    <div className="pokemonContainer">
     <Switch>
         <Route path='/pokemon/:name'>
             <PokemonItemDetails />
         </Route>

         <Route path='/'>
            <PokemonCollection />
         </Route>
     </Switch>
    </div>
  )
}

export default App;
