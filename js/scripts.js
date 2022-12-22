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

for (let i = 0; i < pokemonList.length; i++) { 
    if (pokemonList[i].height > 1) {
       console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow that`s big!"); 
       document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ") - Wow that`s big!" + " <br> "); 
       continue; 
} 

    else  {
       console.log(pokemonList[i].name + " (height: " + pokemonList[i].height + ")"); 
       document.write(pokemonList[i].name + " (height: " + pokemonList[i].height + ")" + " <br> "); 
}
/*the <br> tags are here to help each item on the list be displayed on a new line*/      
}
