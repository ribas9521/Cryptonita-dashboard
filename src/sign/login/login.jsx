import React, { Component } from 'react'
import { login } from '../signActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'


import '../style.scss'


class Login extends Component {

    constructor(props){

        super(props)
    }

    onSubmit(values) {
        const { login } = this.props
        login(values)
    }
    componentDidUpdate() {
        
    }

    render() {
        const { handleSubmit } = this.props
        return (
            <div className="container-fluid login-form">
                <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                    <div className="row">
                        <div className="col-md-5">
                            <div className="form-group login-form-group">                               
                                <Field type="text" name="email" component="input" className="login-input form-control" placeholder="Email"/>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group login-form-group">                                
                                <Field type="password" name="password" component="input" className="login-input form-control" placeholder="Password" />
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="peer">
                                <button type="submit" className="btn btn-primary login-button">Login</button>
                            </div>
                        </div>
                        <div className="form-group login-form-group check-box-form-group">
                            <div className="peers ai-c jc-sb fxw-nw">
                                <div className="peer">
                                    <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                        <label htmlFor="inputCall1" className="login-check-box peers peer-greed js-sb ai-c">
                                            <span className="peer peer-greed">Remember Me</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Login = reduxForm({
    form: 'login'
})(Login)

const mapStateToProps = state => {
    return { userAuthenticated: state.sign.userAuthenticated }
}

const mapDispatchToProps = dispatch => {
    return (bindActionCreators({ login }, dispatch))
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
