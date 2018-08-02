import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'
import MenuTreeItem from './menuTreeItem'

export default props =>(
    <ul className="sidebar-menu scrollable pos-r">
        <MenuItem color="blue-500"
            icon="dashboard"
            desc="Dashboard"
            path = "/dashboard"/>
        {/* <MenuItem color="red-500"
            icon="exchange-vertical"
            desc="Arbitrage"
            path = "/arbitrage"/> */}
        <MenuTree desc="Market info" color="purple-500" icon="bar-chart">
            <MenuTreeItem path="/marketinfo/marketchages" desc="Market Changes"/>
            <MenuTreeItem path="/marketinfo/volumebyexchange" desc="Volume by exchange"/>
        </MenuTree>
    </ul>
)