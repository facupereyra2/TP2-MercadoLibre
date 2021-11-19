import axios from 'axios';


const axios = require('axios')

async function get(url){
    try{
        var result = await axios.get(url);
        return result.data;
    }
    catch(error){
        console.error(error);

    };
};

export const searchItems = async(query) => {
    return await get(
        `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4#options`
    );
};

export const getItem = async (id) => {
    return await get (`https://api.mercadolibre.com/items/${id}`)
}

export const getItemDescription = async (id) => {
    return await get (`https://api.mercadolibre.com/items/${id}/description`)
};

