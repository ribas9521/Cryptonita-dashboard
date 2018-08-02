const INITIAL_STATE={
    apps: {
        percentChange1h: true,
        percentChange24h: true,
        percentChange7d: true,
        volumeByExchange: true
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