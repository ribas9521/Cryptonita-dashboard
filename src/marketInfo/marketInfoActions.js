import axios from 'axios'
const BASE_URL = 'https://api.coinmarketcap.com/v2/ticker/'

// export function getMarketInfo(){
//     const request =  axios.get(`${BASE_URL}?limit=0`)
//     return{
//         type: 'MARKET_INFO_FETCHED',
//         payload: request
//     }
// }

export function getMarketInfo(){
    return dispatch=>{
        const request = axios.get(`${BASE_URL}?limit=0`)
        .then(resp => dispatch({type : 'MARKET_INFO_FETCHED', payload: resp.data }))
    }
}