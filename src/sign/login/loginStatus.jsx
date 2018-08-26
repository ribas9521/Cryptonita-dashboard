import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { logout } from '../signActions'
import '../style.scss'

class LoginStatus extends Component{

    render(){
        const { userAuthenticated } = this.props
        return(
            userAuthenticated ? loggedIn(this.props):loggedOut
        )
    }
}


const loggedOut = <div className="vCenter">
    <Link to="/register">Register</Link> {` or `} 
    <Link to="/login">Login</Link>
</div>
const loggedIn = props=> <div>
    <h5>Bem vindo Fulano!</h5>
    <a href="#" onClick={(e)=>{e.preventDefault(); props.logout()}}>Logout</a>
</div>
const mapStateToProps = state => {
    return { userAuthenticated: state.sign.userAuthenticated }
}
const mapDispatchToProps = dispatch => {
    return (bindActionCreators({ logout }, dispatch))
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginStatus)