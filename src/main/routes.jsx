import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Arbitrage from '../arbitrage/arbitrage'
import MarketChanges  from '../marketInfo/marketChanges/marketChanges'
import Volumebyexchange  from '../marketInfo/volumeByExchange/volumeByExchange'


export default props => (
    <div className='main-content bgc-grey-100'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/arbitrage' component={Arbitrage} />
            <Route path='/marketinfo/marketchages' component={MarketChanges} />
            <Route path='/marketinfo/volumebyexchange' component={Volumebyexchange} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)