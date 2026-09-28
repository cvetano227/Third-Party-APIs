const rickAndMorty = require("../pkg/rickandmorty");

const getCharacters = async (req, res) => {
  try {
    const result = await rickAndMorty.getCharacters();

    return res.status(200).send(result);
  } catch (err) {
    console.log(err);

    return res.status(500).send("Internal Server Error");
  }
};

const getCharacter = async (req, res) => {
  try {
    const result = await rickAndMorty.getCharacter(req.params.id);

    return res.status(200).send(result);
  } catch (err) {
    console.log(err);

    return res.status(500).send("Internal Server Error");
  }
};

const getLocations = async (req, res) => {
  try {
    const result = await rickAndMorty.getLocations();

    return res.status(200).send(result);
  } catch (err) {
    console.log(err);

    return res.status(500).send("Internal Server Error");
  }
};

const getEpisodes = async (req, res) => {
  try {
    const result = await rickAndMorty.getEpisodes();

    return res.status(200).send(result);
  } catch (err) {
    console.log(err);

    return res.status(500).send("Internal Server Error");
  }
};

module.exports = {
  getCharacters,
  getCharacter,
  getLocations,
  getEpisodes,
};
