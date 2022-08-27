import React, { useState } from 'react'; 
import axios from 'axios'; 
import './App.css'; 
 
const App = () => { 
 const [pokemonName, setpokemonName] = useState(""); 
 const [pokemon, setPokemon] = useState({ 
  name: "", 
  species: "", 
  img: "", 
  attack: "", 
  defense: "", 
  type: "" 
 }) 
 
 const fetchPokemon = () => { 
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 
  .then((res) => { 
   setPokemon({ 
    name: pokemonName, 
    species: res.data.species.name, 
    img: res.data.sprites.front_default, 
    attack: res.data.stats[1].base_stat, 
    defense: res.data.stats[2].base_stat, 
    type: res.data.types[0].type.name 
   }); 
   console.log(res) 
  }) 
  .catch(() => { 
   console.error("Error!") 
  }) 
 } 
 
 return ( 
  <> 
  
   <div className="searchArea">
    <input  
     className="search" 
     type="text"
     placeholder='Name' 
     onChange={(event) => { 
      setpokemonName(event.target.value); 
     }} 
    /> 
   </div>
     <button className='searchBtn'  onClick={fetchPokemon}>Search</button> 
 
   <div className="resultCard"> 
    <div className="card"> 
     <h1>{pokemon.name}</h1> 
     <img src={pokemon.img} /> 
     <p>Species: {pokemon.species}</p> 
     <h3>Attack: {pokemon.attack}</h3> 
     <h4>Protection: {pokemon.defense}</h4> 
     <p>Type: {pokemon.type}</p> 
    </div> 
   </div> 
  </> 
 ); 
}; 
 
export default App;