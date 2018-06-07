import React from 'react'
import { Link } from 'react-router-dom'

export default props => (
    <li className="nav-item mT-20 active">
        <Link to={props.path} className="sidebar-link" >
            <span className="icon-holder">
                <i className={`c-${props.color} ti-${props.icon}`}></i>
            </span>
            <span className="title">{props.desc}</span>
        </Link>
    </li>
)