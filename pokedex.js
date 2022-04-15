const pokemonContainer = document.querySelector(".container");
const searchInput = document.querySelector(".filter");

function fetchPokemon(name){
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => response.json())
    .then((data) => {
    createPokemon(data);
    })
}

function fetchPokemones(number){
    for(let i= 1; i<= number; i++){
        fetchPokemon(i);
    }
}

fetchPokemones(150);

function createPokemon(pokemon){
    const element = document.createElement('div');
    element.classList.add('pokemon_container');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('image_container');
    
    const image = document.createElement('img');
    image.src = pokemon.sprites.front_default;
    imageContainer.appendChild(image);

    
    const number = document.createElement('p');
    number.textContent = `#${pokemon.id}`;
    number.classList.add('id');

    const name = document.createElement('p');
    name.textContent = pokemon.name;
    name.classList.add('name');

    const type = document.createElement('p');
    type.textContent = pokemon.types.map((type) => type.type.name);
    type.classList.add('type');

    element.appendChild(imageContainer);
    element.appendChild(number);
    element.appendChild(name);
    element.appendChild(type);

    pokemonContainer.appendChild(element);
}

document.addEventListener("keyup", e=>{

    if(e.target.matches("#search")){
        document.querySelectorAll(".pokemon_container").forEach(pokemon =>{
            pokemon.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?pokemon.classList.remove("filter")
            :pokemon.classList.add("filter");
        })
    }
})



