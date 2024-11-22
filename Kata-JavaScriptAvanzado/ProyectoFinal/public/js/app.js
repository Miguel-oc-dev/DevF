// Función para obtener los Pokémon de la API y mostrarlos en la interfaz
async function fetchPokemons() {
    const pokemonContainer = document.getElementById('pokemon-container');
    const pokemonCount = 50; // Número de Pokémon a mostrar

    for (let i = 1; i <= pokemonCount; i++) {
        try {
            const response = await fetch(`/api/pokemon/${i}`);
            const data = await response.json();

            const pokemonCard = document.createElement('div');
            pokemonCard.classList.add('pokemon-card');

            pokemonCard.innerHTML = `
                <img src="${data.sprites.front_default}" alt="${data.name}">
                <h3>${data.name}</h3>
                <p>ID: ${data.id}</p>
                <p>Tipo(s): ${data.types.map(type => type.type.name).join(', ')}</p>
            `;

            pokemonContainer.appendChild(pokemonCard);
        } catch (error) {
            console.error('Error al obtener el Pokémon:', error);
        }
    }
}

// Ejecutamos la función al cargar la página
window.onload = fetchPokemons;
