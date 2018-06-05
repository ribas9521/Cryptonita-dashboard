import React from 'react'
import Menu from './menu/menu'
import './index'

export default props=>(
    <div className="sidebar">
        <div className="sidebar-inner">
            <div className="sidebar-logo">
                <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="index.html">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src="assets/static/images/logo.png" alt=""/>
                      </div>
                    </div>
                    <div className="peer peer-greed">                      
                        <img className="lh-1 mB-0 logo-text" src="assets/static/images/logo-name.png" alt="" />                      
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <a href="" className="td-n">
                    <i className="ti-arrow-circle-left"></i>
                  </a>
                </div>
              </div>
            </div>
            </div>
            <Menu/>
        </div>
    </div>
)