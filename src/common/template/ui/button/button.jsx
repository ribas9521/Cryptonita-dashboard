import React from 'react'
import './button.scss'
export default props =>(
    <button 
        type="button" 
        className={`btn btn-default btn-${props.shape}`}
        data-toggle={props.dataToggle} 
        data-target={props.dataTarget}>
        <i className={`fa fa-${props.icon}`} aria-hidden="true"></i>
    </button>
)

