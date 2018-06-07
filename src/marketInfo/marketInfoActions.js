import axios from 'axios'
const BASE_URL = 'https://api.coinmarketcap.com/v2/ticker/'


export function getMarketInfo(){
    const request = axios.get(`${BASE_URL}?limit=0`)
    return{
        type: 'MARKET_INFO_FETCHED',
        payload: request
    }
}