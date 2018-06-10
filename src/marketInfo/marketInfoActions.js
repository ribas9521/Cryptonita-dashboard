import axios from 'axios'
const BASE_URL = 'https://api.coinmarketcap.com/v2/ticker/'


export function getMarketInfo(){   
    return dispatch=>{        
        const request = axios.get(`${BASE_URL}?limit=10`)
        .then(resp=>(dispatch({type : 'MARKET_INFO_FETCHED', payload: toArray(resp.data.data) })))
        .then(resp=>(dispatch(setVariationData())))
        
    }
    function toArray(obj){
        let data =[]
        for(var key in obj){
            data.push(obj[key])
        }
        return data
    }   
}

export function setVariationData(period){
    return(dispatch, getState)=>{        
        let data = getState().market.marketInfo
        let variation = {
            labels: [],
            percentChange1h: [],
            percentChange24h: [],
            percentChange7d: []
        }     
        data.map((value, i)=>{
            variation.labels.push(value.name)
            variation.percentChange1h.push(value.quotes.USD.percent_change_1h)
            variation.percentChange24h.push(value.quotes.USD.percent_change_24h)
            variation.percentChange7d.push(value.quotes.USD.percent_change_7d)
        })
        dispatch({type: 'MARKET_VARIATION_FETCHED', payload: variation})
        
    }
}
