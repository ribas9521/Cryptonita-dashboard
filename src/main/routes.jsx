import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Arbitrage from '../arbitrage/arbitrage'
import MarketChanges  from '../marketInfo/marketChanges/marketChanges'


export default props => (
    <div className='main-content bgc-grey-100'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/arbitrage' component={Arbitrage} />
            <Route path='/marketchanges' component={MarketChanges} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)