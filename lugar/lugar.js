const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    const encodedUrl = encodeURI ( direccion);


    const instance = axios.create({
    baseURL:  `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl}`,
    headers: {'X-RapidAPI-Key': '304c64ef5bmshf9d87641437c3fdp19b563jsndae54511019d'}
    });

    const resp = await instance.get();

    if( resp.data.Results.length === 0){
        throw new Error(`No hay resultados para ${ direccion }`);
    }
    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}