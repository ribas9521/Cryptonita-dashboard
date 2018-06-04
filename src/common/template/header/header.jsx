import React from 'react'

export default class Header extends React.Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        $('.sidebar-toggle').on('click', e => {
            $('.app').toggleClass('is-collapsed');
            e.preventDefault();
        });
    }
    
    render(){
        return(
            <div className="header navbar">
                <div className="header-container">
                    <ul className="nav-left">
                        <li>
                            <a id='sidebar-toggle' className="sidebar-toggle" href="javascript:void(0);">
                                <i className="ti-menu"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
