import axios from 'axios'
const BASE_URL = 'https://api.coinmarketcap.com/v2/ticker/'
let timer = null
export function getMarketInfo(){
    return dispatch=>{        
        clearInterval(timer)
        timer = setInterval(()=>dispatch(getMarketData()), 30000)
        dispatch(getMarketData())
    }  
}
/**
 * pairs{
 *  baseCoin, targetCoin
 * }
*/
export function getTopExchangesByPair(pairs){    
    return dispatch=>{        
        let resp =[]
        let axiosRequests =[]
        pairs.forEach(async(pair, i)=>{
            let url = `https://min-api.cryptocompare.com/data/top/exchanges?fsym=${(pair.targetCoin).toUpperCase()}&tsym=${(pair.baseCoin).toUpperCase()}&limit=100`
            axiosRequests.push(
                axios.get(url)
            )         
            // 
            // 
        })
        Promise.all(axiosRequests)
            .then(data=>{
                data.forEach((response)=>{
                    resp.push(response.data.Data)
                })                
                dispatch({ type: 'EXCHANGE_DATA_FETCHED', payload: resp })
                dispatch(fitTopExchangesByPair())
            })     
    }
}
export function fitTopExchangesByPair(){
    return (dispatch, getState)=>{    
        let data = getState().market.exchangeData   
        let tree = []                
        data.forEach((value)=>{
            let totalAmount =0
            let innerChild = []
            value.forEach((exchange)=>{
                totalAmount += exchange.volume24h
                innerChild.push({value: exchange.volume24h, name: exchange.exchange, path: exchange.toSymbol + "/" + exchange.exchange})
            })
            tree.push({value: totalAmount, name:value[0].toSymbol, path: value[0].toSymbol, children:innerChild })
        })
        dispatch({type: 'TOP_EXCHANGES_FETCHED', payload: tree})  
    }
}
export function getMarketData(){   
    return dispatch => {
        const request = axios.get(`${BASE_URL}?limit=100`)
            .then(resp => (dispatch({ type: 'MARKET_INFO_FETCHED', payload: toArray(resp.data.data) })))
            .then(resp => (dispatch(setVariationData())))

    }
    function toArray(obj) {
        
        let data = []
        for (var key in obj) {
            data.push(obj[key])
        }
        data = data.sort((a, b)=>{
            return a.rank -b.rank
        })

        return data
    } 
}

export function setVariationData(){
    return(dispatch, getState)=>{        
        let data = getState().market.marketInfo
        let variation = {
            labels: [],
            symbols:[],
            names:[],
            percentChange1h: [],
            percentChange24h: [],
            percentChange7d: []
        }     
        data.map((value, i)=>{
            variation.symbols.push((value.symbol).toLowerCase())
            variation.names.push((value.name).replace(/ /g, '').replace(/\./g, 'Dot'))
            variation.percentChange1h.push(value.quotes.USD.percent_change_1h)
            variation.percentChange24h.push(value.quotes.USD.percent_change_24h)
            variation.percentChange7d.push(value.quotes.USD.percent_change_7d)
        })
        dispatch({type: 'MARKET_VARIATION_FETCHED', payload: variation})
    }
}

export function setCoinAmount(coinAmount){
    return dispatch=>{
        dispatch({type:'COIN_AMOUNT_CHANGED', payload: coinAmount})
    }
}
