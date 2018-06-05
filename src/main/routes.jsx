import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Arbitrage from '../arbitrage/arbitrage'


export default props => (
    <div className='main-content bgc-grey-100'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/arbitrage' component={Arbitrage} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)