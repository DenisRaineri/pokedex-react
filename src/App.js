import React, { useState, useEffect } from 'react';
import { api } from './services/api.js';
import { Cards } from './Componentes/background/Cards/cards';
// import Pokeshow from './Componentes/Pokeshow/pokeshow';
import './Styles/app.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searchPokemon, setSearchPokemon] = useState("");
  const [isLoading, setIsLoading] = useState('false');
  const [showPokemon, setShowPokemon] = useState([])


  const getPokemons = async () => {
    await api
      .get('get/pokemon')
      .then((response) => setPokemons(response.data))
    setIsLoading(false)
  };
  useEffect(() => {
    setIsLoading(true)
    getPokemons();
  }, [])

  const handleSubmit = async (e) => {
    if (!searchPokemon) {
      return;
    }
    setIsLoading(true);
    try {
      const response = await api.get(`/pokemon/${searchPokemon}`);
      console.log(response.data)
      setPokemons(response.data);
      setIsLoading(false);
    } catch (error) {
      alert('Pokémon não encontrado, isso não é um Digimon?');
      setIsLoading(false);
    }
  }

  function handleClearInput() {
    setSearchPokemon("");
    getPokemons();
  }

  const cards = pokemons.map((pokemon, i) => {
    return (
      <Cards key={i} pokemon={pokemon} onClick={() => setShowPokemon("Pokemon")} />
    )
  })

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input value={searchPokemon} onChange={(e) => setSearchPokemon(e.target.value)} id="name" placeholder="Search Pokémon">
        </input>
        <button onClick={() => handleSubmit()}>Search</button>
        <button onClick={handleClearInput} >Clear</button>
      </form>
      <div className="centralizeContent">
        {
          cards
        }
      </div>
      {/* <Pokeshow showPokemon={showPokemon} /> */}
    </>
  )

}


export default App;