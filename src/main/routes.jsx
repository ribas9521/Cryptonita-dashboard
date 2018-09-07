import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import Arbitrage from '../arbitrage/arbitrage'
import MarketChanges  from '../marketInfo/marketChanges/marketChanges'
import Volumebyexchange  from '../marketInfo/volumeByExchange/volumeByExchange'
import Registration from '../sign/register/register'
import Login from '../sign/login/login'
import ConfirmEmail from '../sign/confirmEmail/confirmEmail'
import Funds from '../funds/funds'


export default props => (
    <div className='main-content bgc-grey-100'>
        <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/arbitrage' component={Arbitrage} />
            <Route path='/marketinfo/marketchages' component={MarketChanges} />
            <Route path='/marketinfo/volumebyexchange' component={Volumebyexchange} />
            <Route path='/register' component={Registration} />
            <Route path='/login' component={Login} />
            <Route path='/confirmemail' component={ConfirmEmail} />
            <Route path='/funds' component={Funds} />
            <Redirect from='*' to='/' />
        </Switch>
    </div>
)