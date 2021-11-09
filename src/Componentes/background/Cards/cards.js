import './cards.css';

export function Cards({ pokemon }) {

    const types = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD',
    }



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
        <div className="cardsPika" style={{ backgroundColor: types[pokemon.type_1 || pokemon.type_2] }}>
            {console.log(pokemon)}
            <p className="numero">{generateID(pokemon.pokedex_id)}</p>
            <h2>{pokemon.name}</h2>
            <img src={images} alt="pokemon" className="figurinhas" />
            <p className="typesText">{pokemon.type_1 && pokemon.type_2 ?
                `${pokemon.type_1} / ${pokemon.type_2}` : `${pokemon.type_1}`}</p>
        </div>
    )
};



export default Cards;

