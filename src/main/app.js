import React from 'react'
import '../assets/styles/index.scss'
import Sidebar from '../common/template/sidebar/sidebar'
import Header from '../common/template/header/header'



export default props=>(
    <div>
        <Sidebar/>        
        <div className="page-container">
            <Header/>
        </div>
    </div>
)