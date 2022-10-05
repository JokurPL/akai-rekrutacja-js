/*
  1. W pliku data.js pod zmienna "pokemons" znajduje się tablica zawierająca dane wielu pokemonów, masz do niej dostęp również w tym pliku. 
  Chciałbym, abyś użył jej do wyświetlenia wszystkich pokemonów w naszym Pokedexie. 
  W tym celu dla każdego z nich możesz stworzyć nowy element drzeewa DOM i umieścić w nim informacje o Pokemonie (możesz zawrzeć tam jego nazwę, zdjęcie, a na kontener w którym się znajduje nadać specjalną klasę zależnie od typu)
*/

// tutaj złapiemy sekcję, do której będziemy dodawać pokemony
const pokemonsContainer = document.querySelector(".pokemons");

function renderPokemons(pokemons) {
  // uzupełnij tutaj
  pokemonsContainer.innerHTML = "";

  pokemons.forEach((pokemon) => {
    const pokemonDiv = document.createElement("div");
    pokemonDiv.classList.add("pokemon");

    const pokemonHeader = document.createElement("h1");
    pokemonHeader.innerText = pokemon.name;

    const pokemonImg = document.createElement("img");
    pokemonImg.src = pokemon.image;

    const pokemonTypesGroup = document.createElement("div");
    pokemonTypesGroup.classList.add("pokemon-types-group");
    pokemon.types.map((type) => {
      const pokemonTypes = document.createElement("span");
      pokemonTypes.innerText = type;
      pokemonTypes.classList.add(type);
      pokemonTypesGroup.appendChild(pokemonTypes);
    });

    pokemonDiv.appendChild(pokemonHeader);
    pokemonDiv.appendChild(pokemonImg);
    pokemonDiv.appendChild(pokemonTypesGroup);

    pokemonsContainer.appendChild(pokemonDiv);
  });
}

// następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
renderPokemons(pokemons);

/*
  2. Przeglądanie całej listy pokemonów może okazać się trochę uciążliwe. Fajnie byłoby skorzystać z filtrów, które już znajdują sie w pliku html. 
  Napisz ciało funkcji które pozwoli nam na:
  - filtrowanie po typie
  - filtrowanie po nazwie (wpisany fragment zawiera się w nazwie pokemona)
*/

function filterPokemons(pokemons) {
  // uzupełnij tutaj
  // zwróć odfiltrowaną tablicę pokemonów
  const choosedTypesInputs = [
    ...document.querySelectorAll("input[type=checkbox]:checked"),
  ];
  const pokemonName = document.querySelector("#pokemon-name").value;

  const choosedTypes = choosedTypesInputs.map((input) => input.id);

  let filteredPokemons = [];
  pokemons.forEach((pokemon) => {
    if (
      pokemonName !== undefined &&
      pokemonName !== null &&
      pokemonName !== ""
    ) {
      if (pokemon.name.toLowerCase().indexOf(pokemonName.toLowerCase()) != -1) {
        filteredPokemons.push(pokemon);
      }
    } else {
      pokemon.types.forEach((element) => {
        if (choosedTypes.filter((type) => type == element).length > 0)
          filteredPokemons.push(pokemon);
      });
    }
  });

  return filteredPokemons;
}
// console.log(filterPokemons(pokemons));
const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault();
  // następnie wykonaj uzupełnioną metodę z tablicą pokemons, aby sprawdzić czy wszystko działa
  renderPokemons(filterPokemons(pokemons));
}

form.addEventListener("submit", submitForm);

/*
  3. Pokedex powinien wyglądać trochę lepiej, niż ten tutaj. W folderze znajdziesz plik style.css, w którym możesz ulepszyć wygląd naszego pokedexa
  Liczymy na Twoją kreatywność 😉
*/
