import { combineReducers } from 'redux'

import MarketInfoReducer from '../marketInfo/marketInfoReducer'
import DashboradReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    market: MarketInfoReducer,
    dashboard: DashboradReducer
})

export default rootReducer