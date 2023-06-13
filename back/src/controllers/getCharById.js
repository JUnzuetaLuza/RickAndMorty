const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/"

async function getCharById(req, res) {
    const { id } = req.params;
    try {
    const response = await axios.get(URL + id);
    const character = {
        id: response.data.id,
        name: response.data.name,
        gender: response.data.gender,
        species: response.data.species,
        origin: response.data.origin?.name,
        image: response.data.image,
        status: response.data.status,
    };
    res.status(200).json(character);
    } catch (error) {
        res.status(500).json(error.message);
    }

}

module.exports = { getCharById }