const axios = require('axios');

const getClima = async (lat , lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=metric&appid=ee3263e6ecd7c17d25ce9cfda5958004`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}