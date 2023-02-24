let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon
    ) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector('.pokemon-list');
    let listpokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listpokemon.appendChild(button);
    pokemonList.appendChild(listpokemon);
    button.addEventListener('click', function () { pokemonRepository.showDetails(pokemon) })
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(error);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types.map((type) => type.type.name);
    }).catch(function (e) {
      console.error(e);
    });
  }
  //function shows details
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon.name, pokemon.height, pokemon.imageUrl, pokemon.types);
    });
  };

  function hideModal() {
    let modalContainer = document.querySelector("#modal-container");

    modalContainer.innerHTML = "";
    modalContainer.classList.remove("is-visible");

    window.addEventListener('keydown', (e) => {
      let modalContainer = document.querySelector("#modal-container");
      if (e.key === 'Escape' && modalContainer.classList.contains("is-visible")) {
        hideModal();
      }
    });
    modalContainer.addEventListener('click', (e) => {
      // Since this is also triggered when clicking inside the modal
      // We only want to close if the user clicks directly on the overlay
      let target = e.target;
      if (target === modalContainer) {
        hideModal();
      }
    });
  }

  function showModal(title, text, imageUrl, types) {
    let modalContainer = document.querySelector("#modal-container");

    modalContainer.innerHTML = "";
    const modal = document.createElement('div');
    modal.classList.add("modal");

    let closeButtonElement = document.createElement('button');
    closeButtonElement.addEventListener('click', hideModal);

    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "close";

    let titleElement = document.createElement("h2");
    titleElement.innerText = title;

    let contentElement = document.createElement("p");
    contentElement.innerText = text;

    let pokemonImage = document.createElement("img");
    pokemonImage.classList.add("pokemon-img");
    pokemonImage.src = imageUrl;

    let pokemonType = document.createElement("type");
    pokemonType.innerText = types;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(pokemonImage);
    modal.appendChild(pokemonType);


    modalContainer.appendChild(modal);

    modalContainer.classList.add("is-visible");
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});