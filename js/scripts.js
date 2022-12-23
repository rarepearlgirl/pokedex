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

/*the loop code should be based on the variable length not exceeding it!*/
const pokemonsUl = document.createElement("ul");
pokemonsUl.setAttribute("class","pokemons-list");

document.body.appendChild(pokemonsUl);

for (let i = 0; i < pokemonList.length; i++) {
  const pokemonLi = document.createElement("li");
  pokemonLi.setAttribute("class","pokemons-items-list");
  if (pokemonList[i].height > 1) {
    pokemonLi.innerText =
      pokemonList[i].name +
      " (height: " +
      pokemonList[i].height +
      ") - Wow that`s big!";
    pokemonsUl.appendChild(pokemonLi);
    continue;
  }

  pokemonLi.innerText =
    pokemonList[i].name + " (height: " + pokemonList[i].height + ")";

  pokemonsUl.appendChild(pokemonLi);
}
