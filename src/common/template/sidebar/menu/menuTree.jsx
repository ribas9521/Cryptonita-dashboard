import React from 'react'
import MenuItem from './menuItem'


export default props=>(
    <li className="nav-item dropdown mT-20">
        <a className="dropdown-toggle" href="javascript:void(0);">
            <span className="icon-holder">
                <i className={`c-${props.color} ti-${props.icon}`}></i>
            </span>
            <span className="title">{props.desc}</span>
            <span className="arrow">
                <i className="ti-angle-right"></i>
            </span>
        </a>
        <ul className="dropdown-menu">
            {props.children}            
        </ul>
    </li>
)
    
  



