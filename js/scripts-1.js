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

document.write(" <ul class = pokemons-list> ");

pokemonList.forEach(function(myPokemonList){
  if (myPokemonList.height >= 1){
  console.log(myPokemonList.name + " (height: " + myPokemonList.height + ")- Wow, that`s big!");
  document.write(" <li class = pokemons-items-list> " + myPokemonList.name + " (height: " + myPokemonList.height + ") - Wow, that`s big!" + "</li>"); 
}

else {
  console.log(myPokemonList.name + " (height: " + myPokemonList.height + ") ");
  document.write(" <li class = pokemons-items-list> " + myPokemonList.name + " (height: " + myPokemonList.height + ") " + "</li>"); 
}

});

document.write(" </ul>")