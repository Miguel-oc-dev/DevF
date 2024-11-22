const pokemonContainer = document.getElementById('pokemon-container');
const searchBar = document.getElementById('search-bar');

async function fetchPokemon() {
    try {
        const response = await fetch('/api/pokemon');
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        console.error('Error al cargar los Pokémon', error);
    }
}

async function searchPokemon() {
    const query = searchBar.value.trim().toLowerCase();
    if (query === "") {
        fetchPokemon(); // Si no hay búsqueda, mostrar todos los Pokémon
    } else {
        const response = await fetch(`/api/pokemon/${query}`);
        const data = await response.json();
        if (data.name) {
            displayPokemon([data]);
        } else {
            pokemonContainer.innerHTML = '<p>No se encontró ese Pokémon.</p>';
        }
    }
}

function displayPokemon(pokemonList) {
    pokemonContainer.innerHTML = ''; // Limpiar contenedor

    pokemonList.forEach(pokemon => {
        const pokemonCard = document.createElement('div');
        pokemonCard.className = 'pokemon-card';
        
        const pokemonImg = document.createElement('img');
        pokemonImg.src = pokemon.sprites.front_default;

        const pokemonName = document.createElement('h3');
        pokemonName.textContent = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        const pokemonTypes = document.createElement('p');
        pokemonTypes.textContent = `Tipo: ${pokemon.types.map(type => type.type.name).join(', ')}`;

        pokemonCard.appendChild(pokemonImg);
        pokemonCard.appendChild(pokemonName);
        pokemonCard.appendChild(pokemonTypes);
        pokemonContainer.appendChild(pokemonCard);
    });
}

fetchPokemon();
