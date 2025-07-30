const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const searchInput = document.getElementById('searchInput');
const cardsContainer = document.getElementById('cardsContainer');
const errorMessage = document.getElementById('errorMessage');

// Mostrar varios Pokémon al iniciar (limit=20)
async function fetchInitialPokemonList() {
    try {
        const response = await fetch(`${API_BASE_URL}?limit=50`);
        const data = await response.json();

        // Obtener detalles de cada Pokémon individual
        const pokemonPromises = data.results.map(pokemon =>
        fetch(pokemon.url).then(res => res.json())
        );

        const pokemons = await Promise.all(pokemonPromises);
        renderCards(pokemons);
    } catch (error) {
        showError('Error al cargar la lista de Pokémon.');
    }
}

// Buscar Pokémon por nombre
async function fetchPokemonByName(name) {
    try {
        errorMessage.classList.add('hidden');
        cardsContainer.innerHTML = '<p>Cargando...</p>';

        const response = await fetch(`${API_BASE_URL}/${name.toLowerCase()}`);
        if (!response.ok) throw new Error('No se encontró el Pokémon.');

        const data = await response.json();
        renderCards([data]); // Convertir en array para usar renderCards
    } catch (error) {
        cardsContainer.innerHTML = '';
        showError(error.message);
    }
}

// Renderizar múltiples cartas
function renderCards(pokemons) {
    cardsContainer.innerHTML = pokemons.map(pokemon => `
        <div class="card">
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3>${pokemon.name}</h3>
        <p>Tipo: ${pokemon.types.map(t => t.type.name).join(', ')}</p>
        <p>Altura: ${pokemon.height}</p>
        <p>Peso: ${pokemon.weight}</p>
        </div>
    `).join('');
}

function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.remove('hidden');
}

// Evento de búsqueda
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query !== '') {
        fetchPokemonByName(query);
    } else {
        fetchInitialPokemonList(); // Recargar lista inicial si input está vacío
    }
});

// Mostrar los primeros Pokémon al iniciar
fetchInitialPokemonList();
