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
    },
    tree:{
        value: 0,
        name: '',
        path: '',
        children: []
    },
    exchangeData:{}
}

export default function(state = INITIAL_STATE , action){
    switch(action.type){
        case 'MARKET_INFO_FETCHED':          
            return { ...state, marketInfo: action.payload }
        case 'MARKET_VARIATION_FETCHED':
            return {...state, variation: action.payload}
        case 'TOP_EXCHANGES_FETCHED':
            return {...state, tree: action.payload}
        case 'EXCHANGE_DATA_FETCHED':
            return {...state, exchangeData: action.payload}
        default:
            return state
    }
}   