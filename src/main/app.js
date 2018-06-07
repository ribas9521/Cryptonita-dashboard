import React from 'react'
import '../assets/styles/index.scss'
import '../assets/styles/master.scss'

import {  HashRouter } from 'react-router-dom'

import Sidebar from '../common/template/sidebar/sidebar'
import Header from '../common/template/header/header'
import Footer from '../common/template/footer/footer'
import Routes from './routes'

export default props=>(
    <HashRouter>
        <div>
            <Sidebar/>        
            <div className="page-container">
                <Header/>
                <Routes/>
                <Footer color = "grey-600" / >
            </div>
        </div>   
    </HashRouter >
)