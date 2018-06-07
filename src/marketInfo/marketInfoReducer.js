const INITIAL_STATE = { marketInfo: { name:"Bitcoin", symbol:"btc", percentChange1h: 1, percentChange24h: -0.5, percentChange7d: 2.5}}

export default function(state = INITIAL_STATE , action){
    switch(action.type){
        case 'MARKET_INFO_FETCHED':          
            return {...state, marketInfo: action.payload.data}
        default:
            return state
    }
}   