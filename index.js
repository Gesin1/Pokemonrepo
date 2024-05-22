const searchInput = document.getElementById("search-input");
const serachBtn = document.getElementById("search-button");
const pokemonName = document.getElementById("pokemon-name");
const pokemonId = document.getElementById("pokemon-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specAttack = document.getElementById("special-attack");
const specDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");
const img = document.getElementById("sprite");

const pokemonApi = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon ";

const pokemonData = async () => {
  let datafound = false;
  try {
    const response = await fetch(pokemonApi);
    const data = await response.json();

    const { results } = data;

    for (let i = 0; i < results.length; i++) {
      if (
        results[i].name === searchInput.value.toLowerCase() ||
        results[i].id == searchInput.value
      ) {
        const getUrlResult = await fetch(results[i].url);
        const showResultUrl = await getUrlResult.json();
        pokemonName.textContent = showResultUrl.name.toLowerCase();
        pokemonId.textContent = `#${showResultUrl.id}`;
        weight.textContent = `Weight: ${showResultUrl.weight}`;
        height.textContent = `Height: ${showResultUrl.height}`;
        img.src = showResultUrl.sprites.front_default;

        types.innerHTML = " ";
        showResultUrl.types.forEach((typeObj) => {
          const divElement = document.createElement("div");
          divElement.textContent = typeObj.type.name.toUpperCase();
          types.appendChild(divElement);
          types.classList.add("types");
        });

        hp.textContent = showResultUrl.stats[0].base_stat;
        attack.textContent = showResultUrl.stats[1].base_stat;
        defense.textContent = showResultUrl.stats[2].base_stat;
        specAttack.textContent = showResultUrl.stats[3].base_stat;
        specDefense.textContent = showResultUrl.stats[4].base_stat;
        speed.textContent = showResultUrl.stats[5].base_stat;

        datafound = true;
        break;
      }
    }

    if (!datafound) {
      alert("Pokémon not found");
    }
  } catch (err) {
    console.log("Error loading", err);
  }
};

serachBtn.addEventListener("click", pokemonData);
