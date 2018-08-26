import React, { Component } from 'react'
import { login } from '../signActions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import '../style.scss'


class Login extends Component{

    onSubmit(values) {
        const { login } = this.props
        login(values)
    }
    componentDidUpdate(){
        const { userAuthenticated, history } = this.props
        userAuthenticated ? history.push("/dashboard") : null
    }

    render(){
        const { handleSubmit } = this.props
        return(
            <div className="peers ai-s fxw-nw h-100vh">
                <div className="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv" style={{ backgroundImage: 'url("assets/static/images/bg.jpg")' }}>
                    <div className="pos-a centerXY">
                        <div className="bgc-white bdrs-50p pos-r" style={{ width: "120px", height: "120px" }}>
                            <img className="pos-a centerXY" src="assets/static/images/logo.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style={{ minWidth: "320px" }}>
                    
                    <form onSubmit={handleSubmit(v => this.onSubmit(v))}>
                        <div className="form-group">
                            <label className="text-normal text-dark">Username</label>
                            <Field type="text" name="email" component="input" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label className="text-normal text-dark">Password</label>
                            <Field type="password" name="password" component="input" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <div className="peers ai-c jc-sb fxw-nw">
                                <div className="peer">
                                    {/* <div className="checkbox checkbox-circle checkbox-info peers ai-c">
                                        <input type="checkbox" id="inputCall1" name="inputCheckboxesCall" className="peer" />
                                        <label htmlFor="inputCall1" className=" peers peer-greed js-sb ai-c">
                                            <span className="peer peer-greed">Remember Me</span>
                                        </label>
                                    </div> */}
                                </div>
                                <div className="peer">
                                    <button type="submit" className="btn btn-primary">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
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
