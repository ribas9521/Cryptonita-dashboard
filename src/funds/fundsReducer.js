const INITIAL_STATE = {
    fund: [{
        percentChange1h: 0,
        percentChange24h: 0,
        percentChange7d: 0,
        followers: [],
        fundName: "",
        chart:{}
    }]
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'APP_CHECK_CHANGED':
            return { ...state, apps: action.payload }
        default:
            return state

    }
}