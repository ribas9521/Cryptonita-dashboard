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
        // $('.sidebar-toggle').on('click', e => {
        //     $('.app').toggleClass('is-collapsed');
        //     e.preventDefault();
        // });
        // $('.search-toggle').on('click', e => {
        //     $('.search-box, .search-input').toggleClass('active');
        //     $('.search-input input').focus();
        //     e.preventDefault();
        // });
    }

    render() {
        const {userAuthenticated } = this.props
        return (
            <div className="header navbar">
                <div className="header-container">
                    <div className="nav-left container-fluid">
                        <div className="row">
                            {/* <div className="col-md-3">
                                <LoginStatus />
                            </div> */}
                            <div className="offset-md-1 col-md-4">
                                <Search/>
                            </div>
                            <div className="col-md-4">
                            {
                                userAuthenticated ? <PerfilHeader/> : <Login />
                            }                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => {
    return { userAuthenticated: state.sign.userAuthenticated }
}

export default connect(mapStateToProps)(Header)