window.onload = () => {
  printCharacters();
};

const getAllCharacters = async () => {
  const url = "https://rickandmortyapi.com/api/character";

  return fetch(url)
    .then((data) => data.json())
    .then((data) => data);
};

const printCharacters = async () => {
  const _characters = await getAllCharacters();
  const characters = _characters.results;
  const div = document.getElementById("characters");
  let pene = "";
  characters.forEach((character) => {
    pene += `
    <div class="card my-3" style="width: 18rem;">
        <img src="${character.image}" class="card-img-top" alt="Me gusta el Nesquik">
        <div class="card-body">
        <h5 class="card-title">${character.name}</h5>
        <a href="./personaje.html?id=${character.id}" class="btn btn-primary">Ver información completa</a>
        </div>
    </div>`;
  });
  div.innerHTML = pene;
};
