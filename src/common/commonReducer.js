const INITIAL_STATE = {
    coinsLogo: ['bitcoin.png']
}

export default function (state = INITIAL_STATE, action) {
    switch(action.type){
        case 'COINS_LOGO_FETCHED':
            return {...state, coinsLogoCheck: action.payload}
        default:
            return state
    }
}