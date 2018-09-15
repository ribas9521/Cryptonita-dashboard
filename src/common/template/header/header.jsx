import React from 'react'

import Search from './search/search'
import LoginStatus from '../../../sign/login/loginStatus'
import Login from '../../../sign/login/login'
import PerfilHeader from '../../../perfil/perfilHeader'
import { connect } from 'react-redux'
import './header.scss'


class Header extends React.Component {

    constructor(props) {
        super(props)
    }
    componentDidMount() {
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

    render() {
        const { userAuthenticated } = this.props
        return (
            <div className="header navbar">
                <div className="header-container container-fluid">
                    <ul className="nav-left col-md-12">                       
                            <li className="col-md-1 col-sm-1 col-2" >
                                <a id="sidebar-toggle" className="sidebar-toggle" href="javascript:void(0);">
                                    <i className="ti-menu"></i>
                                </a>
                            </li>

                            <li className="col-md-6 col-sm-8 col-7">
                                <Search />
                            </li>

                            <li className="col-md-5 col-sm-3 col-3 login-content ">
                                {
                                    userAuthenticated ? <PerfilHeader /> : <Login />
                                }
                            </li>
 
                    </ul>

                </div>
            </div>


        )
    }
}

const mapStateToProps = state => {
    return { userAuthenticated: state.sign.userAuthenticated }
}

export default connect(mapStateToProps)(Header)