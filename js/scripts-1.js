let pokemonRepository = (function () {
let repository = [
  {
    name: "Bulbasaur",
    attack: 49,
    HP: 45,
    height: 0.7,
    number: 1,
    types: ["grass", "poison"],
  },
  {
    name: "Squirtle",
    attack: 48,
    HP: 44,
    height: 0.5,
    number: 7,
    types: ["water"],
  },
  {
    name: "Ponyta",
    attack: 85,
    HP: 50,
    height: 1,
    number: 77,
    types: "fire",
  },
  {
    name: "Sharpedo",
    attack: 120,
    HP: 70,
    height: 1.8,
    number: 319,
    types: ["dark", "water"],
  },
];

function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
    ) {
      repository.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }
  
  function getAll() {
    return repository;
  }

  function addListItem(pokemon){
  let pokemonList = document.querySelector('.pokemon-list');
  let listpokemon = document.createElement('li');
  let button = document.createElement('button');
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  listpokemon.appendChild(button);
  pokemonList.appendChild(listpokemon);
  }
  
  return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
  };
})();
  

pokemonRepository.add({name: "Pikachu", height: 0.7, types: ["dark", "water"] });

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});