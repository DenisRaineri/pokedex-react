import React from "react-dom";
import "./pokeshow.css";
// import { api } from './services/api';


const Pokeshow = (props, { pokemon }) => {
    const { showPokemon } = props;

    // const getPokemonsInfo = async () => {
    //     await
    //         api.get(`/pokemon/${searchPokemon}`)
    //             .then((response) => (response.data))
    //     setIsLoading(false)
    // };
    // useEffect(() => {
    //     setIsLoading(true)
    //     getPokemonsInfo();
    // }, [])


    const generateID = (id) => {
        const diff = 3 - pokemon.pokedex_id.toString().length;
        let resp = id;
        let i = 0;
        while (i < diff) {
            resp = "0" + resp;
            i++;
        }
        return resp;

    };
    const images = `/images/${generateID(pokemon.pokedex_id)}.png`


    return (
        <>
            {(showPokemon === "Pokemon") &&
                <div className="backgroundPoke">
                    <p className="numero">{generateID(pokemon.pokedex_id)}</p>
                    <p className="numeroGen">{pokemon.generation}</p>
                    <h2>{pokemon.name}</h2>
                    <img src={images} alt="pokemon" className="imagemPoke" />
                    <p className="typesText">{pokemon.type_1 && pokemon.type_2 ?
                        `${pokemon.type_1} / ${pokemon.type_2}` : `${pokemon.type_1}`}</p>
                    <p className="status">Attack: {pokemon.attack}</p>
                    <p className="status">Defense: {pokemon.defense}</p>
                    <p className="status">Speed Attack: {pokemon.speed_attack}</p>
                    <p className="status">Speed Defense: {pokemon.speed_defense}</p>
                    <p className="status">Speed: {pokemon.speed}</p>
                </div>
            }
        </>
    )
}



export default Pokeshow;