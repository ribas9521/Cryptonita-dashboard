const INITIAL_STATE={
    apps: {
        percentChange1h: false,
        percentChange24h: false,
        percentChange7d: false,
        volumeByExchange: false
    }
}

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
        case 'APP_CHECK_CHANGED':            
            return {...state, apps: action.payload}
        default:
            return state
        
    }
}