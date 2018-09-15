import React, { Component } from 'react'
import './perfilHeaderStyle.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../sign/signActions'


class PerfilHeader extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
    }
    logout() {
        this.props.logout()
    }

    render() {
        return (
            <div className="dropdown perfil-header-container">
                <a href="" className="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-toggle="dropdown" aria-expanded="false">
                    <div className="peer mR-10">
                        <img className="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt="" />
                    </div>
                    <div className="peer">
                        <span className="d-none d-sm-block fsz-sm c-grey-900">John Doe</span>
                    </div>
                </a>
                <ul className="dropdown-menu fsz-sm perfil-menu">
                    <li>
                        <a href="" className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                            <i className="ti-user mR-10"></i>
                            <span>Profile</span>
                        </a>
                    </li>
                    <li role="separator" className="divider">
                    </li>
                    <li>
                        <a href="#" onClick={() => this.logout()} className="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                            <i className="ti-power-off mR-10"></i>
                            <span>Logout</span>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return (bindActionCreators({ logout }, dispatch))
}
export default connect(null, mapDispatchToProps)(PerfilHeader)
