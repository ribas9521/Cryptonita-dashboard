import React from 'react'
import MenuItem from './menuItem'

export default props =>(
    <ul className="sidebar-menu scrollable pos-r">
        <MenuItem color="blue-500"
            icon="dashboard"
            desc="Dashboard"
            path = "dashboard"/>
        <MenuItem color="red-500"
            icon="exchange-vertical"
            desc="Arbitrage"
            path = "arbitrage"/>
    </ul>
)