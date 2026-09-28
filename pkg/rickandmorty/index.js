const axios = require("axios");

const getCharacters = async () => {
  const response = await axios.get(`${process.env.RICK_MORTY_URL}/character`);

  return response.data;
};

const getCharacter = async (id) => {
  const response = await axios.get(
    `${process.env.RICK_MORTY_URL}/character/${id}`,
  );

  return response.data;
};

const getLocations = async () => {
  const response = await axios.get(`${process.env.RICK_MORTY_URL}/location`);

  return response.data;
};

const getEpisodes = async () => {
  const response = await axios.get(`${process.env.RICK_MORTY_URL}/episode`);

  return response.data;
};

module.exports = {
  getCharacters,
  getCharacter,
  getLocations,
  getEpisodes,
};
