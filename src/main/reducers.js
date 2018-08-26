import { combineReducers } from 'redux'

import MarketInfoReducer from '../marketInfo/marketInfoReducer'
import DashboradReducer from '../dashboard/dashboardReducer'
import { reducer as formReducer } from 'redux-form'
import SignReducer from '../sign/signReducer'

const rootReducer = combineReducers({
    market: MarketInfoReducer,
    dashboard: DashboradReducer,
    form: formReducer,
    sign: SignReducer
})

export default rootReducer