import React from 'react'

export default props=>(
    <li>
        <li className="search-box">
            <a className="search-toggle no-pdd-right" href="javascript:void(0);">
                <i className="search-icon ti-search pdd-right-10"></i>
                <i className="search-icon-close ti-close pdd-right-10"></i>
            </a>
        </li>
        <li className="search-input">
            <input className="form-control" type="text" placeholder="Search..."/>
        </li>
    </li>
    
)