window.onload = () => {
  printCharacterData();
};

const getSingleCharacter = async (id) => {
  const url = `https://rickandmortyapi.com/api/character/${id}`;
  const div = document.getElementById("characters");
  return fetch(url)
    .then((data) => data.json())
    .then((data) => data);
};
const printCharacterData = async () => {
  const paramId = new URLSearchParams(window.location.search).get("id");
  const character = getSingleCharacter(paramId);
};
