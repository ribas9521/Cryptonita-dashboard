const INITIAL_STATE = {
    marketInfo: { 
        data:[], 
        metadata:{}
    },
    variation: {
        labels:[],
        percentChange1h: [],
        percentChange24h: [],
        percentChange7d: [],
        symbols:[],
        names:[]        
    },
    tree:{       
    },
    exchangeData:{},
    coinAmount:{
        amount:10,
        type: 'all'
    },
    coinSortType:{
        '1h': 'Rank',
        '24h':'Rank',
        '7d':'Rank'
    },
    activeComponent: 'all'
}

export default function(state = INITIAL_STATE , action){

    //   let tree= {
    //         labels: ['bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin', 'bitcoin'],
    //         percentChange1h: [1,2,3,4,5,6,7,8,9,10],
    //         percentChange24h: [-0.5, -4.85, -3.67, -5.34, -5.07, -6.65, -7.58, -6.46, -5.02, -3.68],
    //         percentChange7d: [50, 0, 0, 0, 0, -1, -1, -1, -1, -1],
    //         symbols: ['btc', 'btc', 'btc', 'btc', 'btc', 'btc', 'btc', 'btc', 'btc', 'btc',]
    //     }
    switch(action.type){
        case 'MARKET_INFO_FETCHED':          
            return { ...state, marketInfo: action.payload }
        case 'MARKET_VARIATION_FETCHED':
            return {...state, variation: action.payload}
        case 'TOP_EXCHANGES_FETCHED':
            return {...state, tree: action.payload}
        case 'EXCHANGE_DATA_FETCHED':
            return {...state, exchangeData: action.payload}
        case 'COIN_AMOUNT_CHANGED':
            return {...state, coinAmount: action.payload}
        case 'COIN_SORT_TYPE_CHANGED':
            return { ...state, coinSortType: action.payload}
        case 'ACTIVE_COMPONENT_CHANGED':
            return { ...state, activeComponent: action.payload}
        default:
            return state
    }
}   