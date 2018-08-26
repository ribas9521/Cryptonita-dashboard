import React from 'react'

import SearchBox from './search/searchBox'
import SearchInput from './search/searchInput'
import LoginStatus from '../../../sign/login/loginStatus'


export default class Header extends React.Component{

    constructor(props){
        super(props)
    }
    componentDidMount(){
        $('.sidebar-toggle').on('click', e => {
            $('.app').toggleClass('is-collapsed');
            e.preventDefault();
        });
        $('.search-toggle').on('click', e => {
            $('.search-box, .search-input').toggleClass('active');
            $('.search-input input').focus();
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
                        {/* <SearchBox/>
                        <SearchInput/> */}
                        <li><LoginStatus/></li>
                    </ul>
                </div>
            </div>
        )
    }
}
