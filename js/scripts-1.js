let pokemonRepository = (function () {
  let pokemonList = [
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
      types: ["fire"],
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

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    getAll: getAll,
    add: add,
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({
  name: "Pikachu",
  attack: 120,
  HP: 70,
  height: 0.8,
  number: 319,
  types: ["electric"],
});
console.log(pokemonRepository.getAll());

document.write("<ul class=pokemons-list> ");

pokemonRepository.getAll().forEach(function (pokemon) {
  if (pokemon.height >= 1) {
    console.log(
      pokemon.name + " (height: " + pokemon.height + ")- Wow, that`s big!"
    );
    document.write(
      " <li class = pokemons-items-list> " +
        pokemon.name +
        " (height: " +
        pokemon.height +
        ") - Wow, that`s big!" +
        "</li>"
    );
  } else {
    console.log(pokemon.name + " (height: " + pokemon.height + ") ");
    document.write(
      " <li class = pokemons-items-list> " +
        pokemon.name +
        " (height: " +
        pokemon.height +
        ") " +
        "</li>"
    );
  }
});

document.write(" </ul>");