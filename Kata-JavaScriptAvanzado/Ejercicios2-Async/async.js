fetch('https://pokeapi.co/api/v2/pokemon/1') // Bulbasaur
    .then(response => response.json())
    .then(data => {
        console.log("Nombre:", data.name);
        console.log("Tipos:");
        data.types.forEach(tipo => {
        console.log("- " + tipo.type.name);
        });
    });



function peticionLibro(titulo) {
    const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(titulo)}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const libro = data.docs[0];
        console.log("Título:", libro.title);
        console.log("Autores:", libro.author_name.join(", "));
    });
}



function librosPorAutor(autor) {
    const url = `https://openlibrary.org/search.json?author=${encodeURIComponent(autor)}`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(`Libros de ${autor}:`);
        data.docs.forEach(libro => {
            console.log("- " + libro.title);
        });
    });
}



fetch('https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay')
.then(response => response.json())
.then(data => {
    const banda = data.artists[0];
    console.log("Banda:", banda.strArtist);
    console.log("Género:", banda.strGenre);
});



fetch('https://swapi.dev/api/people/1/')
.then(response => response.json())
.then(async data => {
    console.log("Personaje:", data.name);
    console.log("Películas:");
    for (let url of data.films) {
        const res = await fetch(url);
        const pelicula = await res.json();
        console.log("- " + pelicula.title);
    }
});



const apiKey = "DEMO_KEY";
const hoy = new Date();
const ayer = new Date(hoy);
ayer.setDate(hoy.getDate() - 1);
const haceUnaSemana = new Date(hoy);
haceUnaSemana.setDate(hoy.getDate() - 7);

const format = date => date.toISOString().split('T')[0];

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${format(haceUnaSemana)}&end_date=${format(ayer)}&api_key=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {
    const asteroides = [];
    for (let fecha in data.near_earth_objects) {
        data.near_earth_objects[fecha].forEach(asteroide => {
            if (asteroide.is_potentially_hazardous_asteroid) {
                asteroides.push(asteroide.name);
            }
        });
    }
    console.log("Asteroides peligrosos:", asteroides);
});



async function obtenerPrimeros151Pokemon() {
    const pokemons = [];
    
    for (let i = 1; i <= 151; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        
        pokemons.push({
            nombre: data.name,
            tipos: data.types.map(t => t.type.name),
            moves: data.moves.map(m => m.move.name),
            altura: data.height,
            peso: data.weight
        });
    }
    
    console.log(pokemons);
}




peticionLibro("i robot");
librosPorAutor("asimov");
obtenerPrimeros151Pokemon();