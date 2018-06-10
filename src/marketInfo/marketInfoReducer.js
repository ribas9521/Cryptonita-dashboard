const INITIAL_STATE = {
    marketInfo: { 
        data:[], 
        metadata:{}
    },
    variation: {
        labels:[],
        percentChange1h: [],
        percentChange24h: [],
        percentChange7d: []
    }
}

export default function(state = INITIAL_STATE , action){
    switch(action.type){
        case 'MARKET_INFO_FETCHED':          
            return { ...state, marketInfo: action.payload }
        case 'MARKET_VARIATION_FETCHED':
            return {...state, variation: action.payload}
        default:
            return state
    }
}   