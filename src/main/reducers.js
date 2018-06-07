import { combineReducers } from 'redux'

import MarketInfoReducer from '../marketInfo/marketInfoReducer'

const rootReducer = combineReducers({
    market: MarketInfoReducer
})

export default rootReducer